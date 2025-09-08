"""
This module provides functions to parse the SUBTLEX-CH word frequency data file.

SUBTLEX-CH is a word frequency corpus for Chinese, useful for determining word difficulty.
Columns:
Word	WCount	W/million	logW	W-CD	W-CD%	logW-CD

"""

import csv
from collections import defaultdict
import os

import chardet

CORPUS_FREQ = defaultdict(int)
DATA_FILE = os.path.join(os.path.dirname(__file__), 'SUBTLEX_CH.tsv')
# Detect file encoding
with open(DATA_FILE, 'rb') as f:
    raw_data = f.read(10000)
    result = chardet.detect(raw_data)
    encoding = result['encoding']
    print(f"Detected encoding: {encoding}")
# Load JSON file with detected encoding
if encoding is None:
    encoding = 'utf-8'
if encoding.lower() in ['gb2312', 'gbk']:
    encoding = 'GBK'
with open(DATA_FILE, 'r', encoding='utf-8') as f:
    reader = csv.DictReader(f, delimiter='\t')
    for row in reader:
        word = row['\ufeffWord']
        freq = float(row['WCount'])
        CORPUS_FREQ[word] = freq

