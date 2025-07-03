from rest_framework import serializers
from .models import *


class TipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo
        fields = '__all__'

class PokemonSerializer(serializers.ModelSerializer):
    tipo_primario = serializers.CharField(source="tipo_primario.nome", read_only=True)
    tipo_secundario = serializers.CharField(source="tipo_secundario.nome", read_only=True)
    
    class Meta:
        model = Pokemon
        fields = ['codigo', 'nome', 'tipo_primario', 'tipo_secundario']
        