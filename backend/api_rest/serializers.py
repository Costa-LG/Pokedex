from rest_framework import serializers
from .models import Pokemon, Tipo

class TipoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tipo
        fields = '__all__'

class PokemonSerializer(serializers.ModelSerializer):
    # Recebe o ID do tipo primário/ secundário na criação/edição
    tipo_primario = serializers.PrimaryKeyRelatedField(
        queryset=Tipo.objects.all()
    )
    tipo_secundario = serializers.PrimaryKeyRelatedField(
        queryset=Tipo.objects.all(),
        allow_null=True,
        required=False,
    )

    # Campos somente leitura para retornar o nome na resposta
    tipo_primario_nome = serializers.CharField(
        source='tipo_primario.nome', read_only=True
    )
    tipo_secundario_nome = serializers.CharField(
        source='tipo_secundario.nome', read_only=True
    )

    class Meta:
        model = Pokemon
        # Inclua os campos que quer enviar e receber
        fields = [
            'codigo', 'nome',
            'tipo_primario', 'tipo_secundario',
            'tipo_primario_nome', 'tipo_secundario_nome',
        ]
