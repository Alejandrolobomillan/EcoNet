from rest_framework import viewsets
from .serializer import UsuariSerializer, AgricultorSerializer, ClientSerializer, CompraSerializer, ProducteSerializer, Element_CompraSerializer
from .models import Usuari, Agricultor, Client, Compra, Producte, Element_Compra
from django.shortcuts import render
from django.http import JsonResponse
import json
from django.views.decorators.csrf import csrf_exempt

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


@csrf_exempt
def login_user(request):
    if request.method == 'POST':
        try:
            # Assuming the request body contains JSON data
            data = json.loads(request.body)
            # username = request.headers["X-Username"]
            # password = request.headers["X-Password"]
            username = data.get("username")
            password = data.get("password")

            # Query the database
            matching_records = Usuari.objects.filter(username=username, contrasenya=password)

            # Check if any records match
            if matching_records.exists():
                # Data exists in the database
                return JsonResponse({'message': 'success'})
            else:
                # Data does not exist in the database
                return JsonResponse({'message': 'invalid data'}, status=400)
        
        except json.JSONDecodeError:
            return JsonResponse({'error': 'invalid json data provided'}, status=400)
    
    return JsonResponse({'error': 'invalid request method'}, status=405)

