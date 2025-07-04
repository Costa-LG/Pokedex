from rest_framework.views import APIView
from rest_framework import viewsets, status
from rest_framework.response import Response
from django.http import HttpResponse
from django.db.models import Q
from .serializers import *
from .models import * 

def Home(request):
    return HttpResponse("Home Page")

class PokemonViewSet(viewsets.ModelViewSet):
    queryset = Pokemon.objects.all()
    serializer_class = PokemonSerializer

    def get_queryset(self):
        queryset = self.queryset
        
        nome = self.request.query_params.get("nome")
        tipo = self.request.query_params.get("tipo_primario")

        if nome:
            queryset = queryset.filter(nome__icontains=nome)
        if tipo:
            queryset = queryset.filter(
                Q(tipo_primario__nome__icontains=tipo) |
                Q(tipo_secundario__nome__icontains=tipo) 
            )


        return queryset



class TipoViewSet(viewsets.ModelViewSet):
    queryset = Tipo.objects.all()
    serializer_class = TipoSerializer