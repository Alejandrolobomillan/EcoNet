from django.db import models

# Create your models here.
class Usuari(models.Model):
    username = models.CharField(max_length=255, primary_key=True)
    contrasenya = models.CharField(max_length=255, null=False)
    nom = models.CharField(max_length=255, null=False)
    telefon = models.CharField(max_length=200, null=False)
    correu = models.EmailField(max_length=255, null=False)

    def __str__(self):
        return self.username

class Client(models.Model):
    username_client = models.OneToOneField(Usuari, on_delete=models.CASCADE, primary_key=True)
    direccio_denviament = models.CharField(max_length=255, null=False)

    def __str__(self):
        return self.username_client.username
    
class Agricultor(models.Model):
    username_agricultor = models.OneToOneField(Usuari, on_delete=models.CASCADE, primary_key=True)
    descripcio = models.CharField(max_length=255, null=False)
    codi_postal = models.CharField(max_length=10, null=False)

    def __str__(self):
        return self.username_agricultor.username
    
class Compra(models.Model):
    client = models.ForeignKey(Client, on_delete=models.RESTRICT)
    data_de_compra = models.DateTimeField(null=False)

    class Meta:
        unique_together = (('client', 'data_de_compra'),)

    def __str__(self):
        return self.data_de_compra
    
class Producte(models.Model):
    agricultor = models.ForeignKey(Agricultor, on_delete=models.RESTRICT)
    codi_pro = models.CharField(max_length=100, null=False)
    nom_pro = models.CharField(max_length=255, null=False)
    descripcio = models.TextField(max_length=255, null=False)
    preu = models.FloatField(null=False)
    unitari = models.BooleanField(null=False)
    data_limit = models.DateTimeField(null=False)
    quantitat_disponible = models.IntegerField(null=False)
    descompte = models.FloatField(null=False)
    
    class Meta:
        unique_together = (('agricultor', 'codi_pro'),)
    def __str__(self):
        return self.codi_pro
    
class Element_Compra(models.Model):
    agricultor = models.ForeignKey(Agricultor, on_delete=models.RESTRICT)
    producte = models.ForeignKey(Producte, on_delete=models.RESTRICT)
    client = models.ForeignKey(Client, on_delete=models.RESTRICT)
    data_de_compra = models.ForeignKey(Compra, on_delete=models.RESTRICT)
    quantitat = models.FloatField(null=False)
    preu_pagat = models.FloatField(null=False)
    es_lot = models.BooleanField(null=False)
    
    class Meta:
        unique_together = (('agricultor', 'producte', 'client', 'data_de_compra'),)

    def __str__(self):
        return self.data_de_compra