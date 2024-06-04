from django.urls import path, include
from rest_framework import routers
from econet import views 

router = routers.DefaultRouter()
router.register(r'usuari', views.UsuariView, 'usuari')

urlpatterns = [
    path("api/", include(router.urls))
]