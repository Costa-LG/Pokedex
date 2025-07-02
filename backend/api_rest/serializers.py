from rest_framework import serializers
from .models import *


class TipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo
        fields = '__all__'

class PokemonSerializer(serializers.ModelSerializer):
    # tipo_primario = TipoSerializer(read_only=True)
    # tipo_secundario = TipoSerializer(read_only=True)
    
    class Meta:
        model = Pokemon
        fields = '__all__'
        