import os
import django
import json

# Configurando o ambiente Django
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'backend.settings')
django.setup()

from api_rest.models import Pokemon, Tipo

# Carregando os dados
with open("initial_data/dados_iniciais.json", encoding="utf-8") as f:
    dados = json.load(f)

# Pegando os tipos únicos
tipos_unicos = set()
for pokemon in dados:
    if pokemon["tipo_primario"]:
        tipos_unicos.add(pokemon["tipo_primario"].strip().lower())
    if pokemon["tipo_secundario"]:
        tipos_unicos.add(pokemon["tipo_secundario"].strip().lower())


# Criando dicionário com código
tipos_dict = {tipo: i + 1 for i, tipo in enumerate(sorted(tipos_unicos))}

# Inserindo os tipos no banco
for nome, codigo in tipos_dict.items():
    Tipo.objects.get_or_create(nome=nome, defaults={'codigo': codigo})

# Inserindo os Pokémons
for pokemon in dados:
    tipo1_nome = pokemon["tipo_primario"].strip().lower() if pokemon["tipo_primario"] else None
    tipo2_nome = pokemon["tipo_secundario"].strip().lower() if pokemon["tipo_secundario"] else None

    tipo1 = Tipo.objects.get(nome=tipo1_nome) if tipo1_nome else None
    tipo2 = Tipo.objects.get(nome=tipo2_nome) if tipo2_nome else None

    Pokemon.objects.get_or_create(
        codigo=pokemon["codigo"],
        defaults={
            "nome": pokemon["nome"],
            "tipo_primario": tipo1,
            "tipo_secundario": tipo2,
        }
    )

