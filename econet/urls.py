from django.urls import path, include
from rest_framework import routers
from econet import views 


router = routers.DefaultRouter()
router.register(r'usuari', views.UsuariView, 'usuari')
router.register(r'client', views.ClientView, 'client')
router.register(r'agricultor', views.AgricultorView, 'agricultor')
router.register(r'compra', views.CompraView, 'compra')
router.register(r'producte', views.ProducteView, 'producte')
router.register(r'element_compra', views.Element_CompraView, 'element_compra')

urlpatterns = [
    path("api/", include(router.urls)),
    path("login/", views.login_user, name='login'),
    path("random-products/", views.get_random_products, name='random-products'),
    path("get_by_categoria/", views.get_products_by_category, name='get_by_categoria'),
    path("getuser/", views.getUserByUsername, name='getuser'),
]