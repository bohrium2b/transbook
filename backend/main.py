"""
Main entry point for the text processing application.
Handles input and output operations.
Generates Report.
"""
from rich import print
from rich.prompt import Prompt
from process_raw_text import process_text
from generate_report import generate_report
import os

def main():
    print("[bold green]Welcome to the Chinese Text Processor![/bold green]")
    input_path = Prompt.ask("Enter the path to the input text file", default="input.txt")
    output_path = Prompt.ask("Enter the desired output HTML file path", default="output/report.html")

    if not os.path.exists(input_path):
        print(f"[bold red]Error:[/bold red] The file '{input_path}' does not exist.")
        return

    with open(input_path, 'r', encoding='utf-8') as f:
        raw_text = f.read()

    print("[bold blue]Processing text...[/bold blue]")
    processed_paragraphs = process_text(raw_text)

    # Flatten the list of lists into a single list of paragraphs
    flattened_paragraphs = []
    for para in processed_paragraphs:
        combined_original = '\n'.join(sentence['original'] for sentence in para)
        combined_pinyin = '\n'.join(sentence['pinyin'] for sentence in para)
        combined_english = '\n'.join(sentence['english'] for sentence in para)
        flattened_paragraphs.append({
            'chinese': combined_original,
            'pinyin': combined_pinyin,
            'english': combined_english,
            'sentences': para
        })

    print("[bold blue]Generating report...[/bold blue]")
    os.makedirs(os.path.dirname(output_path), exist_ok=True)
    generate_report(flattened_paragraphs, output_path)

    print(f"[bold green]Report generated successfully![/bold green] You can find it at: {output_path}")


if __name__ == "__main__":
    main()