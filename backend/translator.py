"""
This module handles translation features for the application.

It enables translating text between different languages and English using a choice of models.
Models:
 - easynmt (opus-mt, m2m_100)
 - ollama (qwen3-0.5b)
"""

from easynmt import EasyNMT
from rich.progress import Progress, SpinnerColumn, TextColumn
from rich import print
from ollama import chat, ChatResponse
from re import sub, DOTALL


class Ollama:
    def __init__(self, model_name='qwen3:0.6b'):
        self.model_name = model_name

    def chat(self, prompt, system=None) -> ChatResponse:
        response = chat(model=self.model_name, messages=[
            {"role": "system", "content": system} if system else {},
            {"role": "user", "content": prompt}
        ])
        return response

def bootstrap_translation_engine(engine_name):
    """
    Initialize and return the translation engine based on the specified engine name.
    Supported engines: 'easynmt', 'ollama'
    """
    with Progress(SpinnerColumn(), TextColumn("[progress.description]{task.description}")) as progress:
        task = progress.add_task(f"[bold blue]Bootstrapping translation engine: {engine_name}...", total=None)
        if engine_name == 'easynmt':
            model = EasyNMT('m2m_100_418M')
            print("[bold green]✓ EasyNMT model 'm2m_100_418M' initialized.[/bold green]")
            return model
        elif engine_name == 'ollama':
            model = Ollama('qwen3:0.6b')
            progress.console.print(f"[bold green]✓ Ollama model '{model.model_name}' initialized.[/bold green]")
            return model
        else:
            raise ValueError(f"Unsupported translation engine: {engine_name}")

def translate_text(model, text: list, source_lang='zh', target_lang='en', title="西游记", fullcontext: str = "") -> list:
    """
    Translate the given text from source_lang to target_lang using the provided model.
    """
    if isinstance(model, EasyNMT):
        translated = model.translate(text, target_lang=target_lang, source_lang=source_lang)
        return translated
    elif isinstance(model, Ollama):
        context_parts = []
        if fullcontext:
            context_parts.append(f"Context: {fullcontext}")
        if isinstance(text, list) and len(text) > 1:
            context_parts.append(f"Previous paragraphs: {' '.join(text[:-1])}")
        context_str = "\n".join(context_parts)
        if context_str:
            prompt = f"{context_str}\n\nTranslate the following text from {source_lang} to {target_lang}:\n\n{' '.join(text)}"
        else:
            prompt = f"Translate the following text from {source_lang} to {target_lang}:\n\n{' '.join(text)}"
        system_message = f"You are a helpful translation assistant that faithfully translates the text {title} from its source language {source_lang} to {target_lang}, keeping in mind cultural conventions of the time, character names, and literary features. You don't need to explain anything, just provide the translation."
        prompt = f"Translate the following text from {source_lang} to {target_lang}:\n\n{' '.join(text)}"

        response = model.chat(system=system_message, prompt=prompt)
        print(f"    [blue]Ollama response:[/blue] {response.message.content}")
        # Remove any reasoning - between <think>...</think> tags
        sub_pattern = r'<think>.*?</think>'
        response_complete = sub(sub_pattern, '', response.message.content, flags=DOTALL).strip()
        return response_complete.split('. ')
    else:
        raise ValueError("Unsupported model type for translation.")
    