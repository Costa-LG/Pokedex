from django.urls import path
from rest_framework.routers import DefaultRouter
from .views import *

router = DefaultRouter()
router.register("pokemons", PokemonViewSet)
router.register("tipos", TipoViewSet)
urlpatterns = router.urls