from django.contrib import admin
from django.urls import path, include
from django.conf.urls import url
from rest_framework import routers

from .views import WishlistViewSet


router = routers.DefaultRouter()
router.register(r'wishlist', WishlistViewSet, base_name='wishlist')

urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^', include(router.urls)),
]