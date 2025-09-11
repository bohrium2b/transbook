import jinja2
import os
from typing import List, Dict
from rich import print


def generate_report(paragraphs: List[Dict[str, str]], output_path: str) -> None:
    """
    Generate an HTML report from the processed paragraphs.
    """
    template_loader = jinja2.FileSystemLoader(searchpath=os.path.join(os.path.dirname(__file__), 'templates'))
    template_env = jinja2.Environment(loader=template_loader)
    template = template_env.get_template('index.html')
    template.globals['url_for'] = lambda endpoint, **values: f"/{endpoint}/" + "/".join(f"{k}/{v}" for k, v in values.items())
    template.globals['static'] = lambda filename: f"/static/{filename}"

    # Now process difficult words to add definitions
    new_paragraphs = []
    for para in paragraphs:
        newparagraph = []
        for sentence in para.get('sentences', []):
            newsentence = sentence.copy()
            for word_info in sentence.get('difficult_words', []):
                word = word_info['word']
                print(word)
                definition = word_info.get('definition', 'No definition found.')
                newsentence['original'] = newsentence['original'].replace(word, f'<define-word word="{word}">{definition}</define-word>')
            newparagraph.append(newsentence)
        new_paragraphs.append(newparagraph)

    output_from_parsed_template = template.render(paragraphs=new_paragraphs)

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write(output_from_parsed_template)
    
    # Copy static files (CSS, JS)
    static_src = os.path.join(os.path.dirname(__file__), 'static')
    static_dst = os.path.join(os.path.dirname(output_path), 'static')
    if not os.path.exists(static_dst):
        os.makedirs(static_dst)
    for filename in os.listdir(static_src):
        with open(os.path.join(static_src, filename), 'rb') as src_file:
            with open(os.path.join(static_dst, filename), 'wb') as dst_file:
                dst_file.write(src_file.read())
    # Rename .cjs files to .js
    for filename in os.listdir(static_dst):
        if filename.endswith('.cjs'):
            base = filename[:-4]
            os.rename(os.path.join(static_dst, filename), os.path.join(static_dst, base + '.js'))
    print(f"[bold green]✓ Report generated at:[/bold green] {output_path}")