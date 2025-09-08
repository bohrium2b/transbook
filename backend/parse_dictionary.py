import json
import chardet



def parse_dictionary(file_path):
    """
    Parse a JSON dictionary file into a Python dictionary.
    """
    with open(file_path, 'r', encoding="utf-8") as f:
        dictionary = json.load(f)
    return dictionary