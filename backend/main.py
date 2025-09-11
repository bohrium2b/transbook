"""
Main entry point for the text processing application.
Handles input and output operations.
Generates Report.
"""
from rich import print
from rich.prompt import Prompt
import builtins

from argparse import ArgumentParser
import os

# Replace all print statements with rich print for better formatting including in imported modules
builtins.print = print

def main():
    parser = ArgumentParser(description="Chinese Text Processor")
    parser.add_argument("--input", default="input.txt", help="Path to the input text file")
    parser.add_argument("--output", default="output/report.html", help="Path to the output HTML file")
    args = parser.parse_args()

    input_path = args.input if args.input != "input.txt" else None
    output_path = args.output if args.output != "output/report.html" else None

    print("[bold blue]Welcome to the Chinese Text Processor![/bold blue]")
    if not input_path:
        input_path = Prompt.ask("[bold red]? Enter the path to the input text file[/bold red]", default="input.txt")
    if not output_path:
        output_path = Prompt.ask("[bold red]? Enter the desired output HTML file path[/bold red]", default="output/report.html")

    if not os.path.exists(input_path):
        print(f"[bold red]Error:[/bold red] The file '{input_path}' does not exist.")
        return

    with open(input_path, 'r', encoding='utf-8') as f:
        raw_text = f.read()
    print(f"[bold green]✓ Loaded input file:[/bold green] {input_path}")
    from process_raw_text import process_text
    from generate_report import generate_report
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

    print(f"[bold green]✓ Report generated successfully![/bold green] You can find it at: {output_path}")


if __name__ == "__main__":
    main()