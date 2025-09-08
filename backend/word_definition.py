import jieba
import pypinyin
from collections import Counter
import math
from parse_subtlex import CORPUS_FREQ

# 1. Frequency corpus - load from large Chinese corpus

def get_word_frequency(word:str) -> int:
    return CORPUS_FREQ.get(word, 10000) # Fallback to 1 if not found => indicates rare word

def word_difficulty_score(word: str) -> float:
    """Difficulty = inverse frequency (rarer words = harder)."""
    freq = get_word_frequency(word)
    # Filter out numbers, punctuation, and single characters, Chinese punctuation
    if len(word) == 1 or all('\u4e00' <= char <= '\u9fff' for char in word) == False or word in "，。！？；：“”‘’（）《》、—…·":
        freq = 1
    # Debug print
    print(f"Word: {word}, Frequency: {freq}")
    return -math.log(freq / (max(CORPUS_FREQ.values()) + 1))

# Segment + rank 

def rank_difficult_words(text: str, top_percent: int = 10) -> list:
    """
    Segment text and rank words by difficulty.
    Return top_n difficult words with their scores.
    Returns list of tuples (word, score).
    """
    words = jieba.lcut(text)
    unique_words = set(words)
    word_scores = {word: word_difficulty_score(word) for word in unique_words}
    print(word_scores)
    ranked_words = sorted(word_scores.items(), key=lambda item: item[1], reverse=True)
    top_n = max(1, len(ranked_words) * (top_percent*2) // 100)
    return ranked_words[:top_n]


# Lookup Definitions from Dictionary (Stardict DSL format)
from parse_dictionary import parse_dictionary
dictionary = parse_dictionary("backend/abc.json")

def lookup_definition(word: str) -> str:
    entry = dictionary.get(word, 'No definition found.')
    return entry

# Putting it all together
def analyze_text(text: str, top_percent: int = 10) -> list:
    difficult_words = rank_difficult_words(text, top_percent)
    analyzed = []
    for word, score in difficult_words:
        definition = lookup_definition(word)
        if definition == 'No definition found.':
            continue
        pinyin = ' '.join([''.join(syllable) for syllable in pypinyin.pinyin(word)])
        analyzed.append({
            'word': word,
            'score': score,
            'definition': definition,
            'pinyin': pinyin
        })
    return analyzed

if __name__ == "__main__":
    sample_text = """如来佛祖拿出一件锦襕（lán）袈裟、一个九环锡杖[7]和三个金箍，说：“把袈裟和锡杖交给取经人自己用。这三个金箍能降伏神通广大的妖魔，将金箍戴在他们的头上，不听话可念紧箍咒，这样他们就会一心一意做取经人的徒弟了。”观音菩萨接了法旨，带着徒弟惠岸，径直走下灵山。"""
    analysis = analyze_text(sample_text, top_percent=10)
    for item in analysis:
        print(f"Word: {item['word']}")
        print(f"Score: {item['score']:.2f}")
        print(f"Pinyin: {item['pinyin']}")
        print(f"Definition: {item['definition']}")
        print()