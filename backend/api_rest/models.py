from django.db import models

# Criando os modelos makemigrations is a Django management command used to create new database migration files based on changes detected in your Django models.

class Tipo(models.Model):
    # codigo, nome
    codigo = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=30, unique=True)
    
    def __str__(self):
        return f"Tipo: {self.nome}"
    

class Pokemon(models.Model):
    # codigo, nome, tipo primario, tipo secundario
    codigo = models.IntegerField(primary_key=True)
    nome = models.CharField(max_length=50, unique=True)
    tipo_primario = models.ForeignKey(Tipo, related_name="Tipo_primario", on_delete=models.CASCADE)
    tipo_secundario = models.ForeignKey(Tipo, related_name="Tipo_secundario", null=True, blank=True, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"pokemon: {self.nome} | tipo primario: {self.tipo_primario} | tipo secundario: {self.tipo_secundario}"
    
    
