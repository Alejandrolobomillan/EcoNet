from rest_framework import viewsets
from .serializer import UsuariSerializer, AgricultorSerializer, ClientSerializer, CompraSerializer, ProducteSerializer, Element_CompraSerializer
from .models import Usuari, Agricultor, Client, Compra, Producte, Element_Compra

# Create your views here.
class UsuariView(viewsets.ModelViewSet):
    serializer_class = UsuariSerializer
    queryset = Usuari.objects.all()

class AgricultorView(viewsets.ModelViewSet):
    serializer_class = AgricultorSerializer
    queryset = Agricultor.objects.all()

class ClientView(viewsets.ModelViewSet):
    serializer_class = ClientSerializer
    queryset = Client.objects.all()

class CompraView(viewsets.ModelViewSet):
    serializer_class = CompraSerializer
    queryset = Compra.objects.all()

class ProducteView(viewsets.ModelViewSet):
    serializer_class = ProducteSerializer
    queryset = Producte.objects.all()

class Element_CompraView(viewsets.ModelViewSet):
    serializer_class = Element_CompraSerializer
    queryset = Element_Compra.objects.all()

