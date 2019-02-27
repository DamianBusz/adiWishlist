from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import WishlistSerializer, WishlistSerializerPerId
from api.models import Wishlist
from rest_framework.renderers import JSONRenderer
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework import mixins, permissions, status
from django.shortcuts import get_object_or_404

class WishlistAPIView(mixins.CreateModelMixin, ListAPIView):
    """View responsible for retrieving entire list and adding item in wishlist"""
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer

    def get_queryset(self, *args, **kwargs):
        return Wishlist.objects.all()

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)


class WishlistsDetailsAPIView(mixins.DestroyModelMixin ,RetrieveAPIView):
    """View responsible for retrieving single item and deleting it"""
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return super().destroy(request, *args, **kwargs)
