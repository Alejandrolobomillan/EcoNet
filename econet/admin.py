from django.contrib import admin
from .models import Usuari, Client, Agricultor, Compra, Producte, Element_Compra

# Register your models here.
admin.site.register(Usuari)
admin.site.register(Client)
admin.site.register(Agricultor)
admin.site.register(Compra)
admin.site.register(Producte)
admin.site.register(Element_Compra)