
from django.http import HttpResponse
from rest_framework import viewsets, status #, permissions
from rest_framework.response import Response #, permissions
from .serializers import *
from .models import *

def Home(request):
    return HttpResponse("Home Page")

class PokemonViewSet(viewsets.ModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer
    
    def get(self, request):
        nome = request.GET.get("nome")
        tipo = request.GET.get("tipo_primario")
        
        Pokemon = Pokemon.objects.all
        
        if nome:
            pokemons = pokemons.filter(nome__icontains=nome)
        if tipo:
            pokemons = pokemons.filter(tipo_primario=tipo)

        serializer = PokemonSerializer(pokemons, many=True)
        
        return Response(serializer.data)
    # def create(self, request):
    #     pass

    # def update(self, request, pk=None):
    #     pass

    # def destroy(self, request, pk=None):
    #     pass
    

class TipoViewSet(viewsets.ModelViewSet):
    queryset = Tipo.objects.all()
    serializer_class = TipoSerializer
    

    