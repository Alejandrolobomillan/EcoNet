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
