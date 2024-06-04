from rest_framework import viewsets
from .serializer import UsuariSerializer
from .models import Usuari

# Create your views here.
class UsuariView(viewsets.ModelViewSet):
    serializer_class = UsuariSerializer
    queryset = Usuari.objects.all()
