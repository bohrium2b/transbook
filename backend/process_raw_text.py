from easynmt import EasyNMT
import pypinyin
from rich.progress import Progress, SpinnerColumn, TextColumn, BarColumn
from rich import print
from rich.console import Console
from langdetect import detect, DetectorFactory
DetectorFactory.seed = 0  # For consistent results


model = EasyNMT('m2m_100_418M')
console = Console()

def process_text(text):
    """
    Process the raw input text and return a version with separated paragraphs, translated sentences, and Pinyin.
    """
    # Split the text into paragraphs
    paragraphs = text.split('\n\n')
    processed_paragraphs = []
    print("[bold blue]Detecting language...[/bold blue]")
    lang = detect(text)
    print(f"[bold green]✓ Detected language:[/bold green] {lang}")
    if lang != 'zh-cn' and lang != 'zh-tw' and lang != 'zh':
        console.log(f"[red]Warning:[/red] Detected language is '{lang}', which may lead to inaccurate translations.")
    with Progress() as progress:
        task = progress.add_task("[bold blue]Translating and processing paragraphs...", total=len(paragraphs))
        for paragraph in paragraphs:
            # Translate each sentence in the paragraph
            sentences = paragraph.split('. ')
            # Replace Chinese punctuation with English punctuation for better sentence splitting
            sentences = [s.replace('。', '.').replace('！', '!').replace('？', '?').replace("、", ", ").strip() for s in sentences if s.strip()]
            if not sentences:
                progress.update(task, advance=1)
                continue

            translated_sentences = model.translate(sentences, target_lang='en', source_lang="zh")
            # If paragraph ends with "I'm not sure what I'm going to do." replace with close quotation mark.
            if translated_sentences and translated_sentences[-1].endswith("I'm not sure what I'm going to do."):
                translated_sentences[-1] = translated_sentences[-1].replace("I'm not sure what I'm going to do.", "”")

            # Convert each sentence to Pinyin
            pinyin_sentences = [pypinyin.pinyin(sentence) for sentence in sentences]

            
            # Combine the translated sentences and their Pinyin
            paragraph_processed = []
            for original, translated, pinyin in zip(sentences, translated_sentences, pinyin_sentences):
                # Analyse text for difficult words
                # difficult_words = analyze_text(original)
                paragraph_processed.append({
                    'original': original,
                    'english': translated,
                    'pinyin': ' '.join([''.join(syllable) for syllable in pinyin]),
                    'difficult_words': []
                })
            processed_paragraphs.append(paragraph_processed)
            progress.console.print(f"[green]✓ Processed paragraph: {paragraph[:30]}...")
            progress.update(task, advance=1)
    return processed_paragraphs


def test_process_text():
    sample_text = """如来佛祖拿出一件锦襕（lán）袈裟、一个九环锡杖[7]和三个金箍，说：“把袈裟和锡杖交给取经人自己用。这三个金箍能降伏神通广大的妖魔，将金箍戴在他们的头上，不听话可念紧箍咒，这样他们就会一心一意做取经人的徒弟了。”观音菩萨接了法旨，带着徒弟惠岸，径直走下灵山。"""
    result = process_text(sample_text)

    for para in result:
        for sentence in para:
            print(f"Original: {sentence['original']}")
            print(f"English: {sentence['english']}")
            print(f"Pinyin: {sentence['pinyin']}")
            print("Difficult Words:")
            for dw in sentence['difficult_words']:
                print(f"  - Word: {dw['word']}, Score: {dw['score']:.2f}, Pinyin: {dw['pinyin']}, Definition: {dw['definition']}")
            print()

if __name__ == "__main__":
    test_process_text()