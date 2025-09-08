from easynmt import EasyNMT
import pypinyin
from rich.progress import Progress, SpinnerColumn, TextColumn


model = EasyNMT('opus-mt')


def process_text(text):
    """
    Process the raw input text and return a version with separated paragraphs, translated sentences, and Pinyin.
    """
    # Split the text into paragraphs
    paragraphs = text.split('\n\n')
    processed_paragraphs = []

    for paragraph in paragraphs:
        # Translate each sentence in the paragraph
        sentences = paragraph.split('. ')
        translated_sentences = model.translate(sentences, target_lang='en')

        # Convert each sentence to Pinyin
        pinyin_sentences = [pypinyin.pinyin(sentence) for sentence in sentences]


        # Combine the translated sentences and their Pinyin
        paragraph_processed = []
        for original, translated, pinyin in zip(sentences, translated_sentences, pinyin_sentences):
            paragraph_processed.append({
                'original': original,
                'english': translated,
                'pinyin': ' '.join([''.join(syllable) for syllable in pinyin])
            })
        processed_paragraphs.append(paragraph_processed)
    return processed_paragraphs


def test_process_text():
    sample_text = """如来佛祖拿出一件锦襕（lán）袈裟、一个九环锡杖[7]和三个金箍，说：“把袈裟和锡杖交给取经人自己用。这三个金箍能降伏神通广大的妖魔，将金箍戴在他们的头上，不听话可念紧箍咒，这样他们就会一心一意做取经人的徒弟了。”观音菩萨接了法旨，带着徒弟惠岸，径直走下灵山。"""
    with Progress(SpinnerColumn(), TextColumn("[progress.description]{task.description}")) as progress:
        task = progress.add_task("Processing text...", total=None)
        result = process_text(sample_text)
        progress.update(task, completed=1)
    for para in result:
        for sentence in para:
            print(f"Original: {sentence['original']}")
            print(f"English: {sentence['english']}")
            print(f"Pinyin: {sentence['pinyin']}")
            print()

if __name__ == "__main__":
    test_process_text()