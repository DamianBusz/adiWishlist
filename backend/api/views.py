from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import WishlistSerializer, WishlistSerializerPerId
from api.models import Wishlist
from rest_framework.renderers import JSONRenderer
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework import mixins, permissions
from django.shortcuts import get_object_or_404

class WishlistAPIView(mixins.CreateModelMixin, ListAPIView):
    passed_id = None
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializer


    def get_queryset(self, *args, **kwargs):
        return Wishlist.objects.all()

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def post(self, request, *args, **kwargs):
        return self.create(request, *args, **kwargs)

class WishlistsDetailsAPIView(mixins.DestroyModelMixin ,RetrieveAPIView):
    queryset = Wishlist.objects.all()
    serializer_class = WishlistSerializerPerId

    def get(self, request, *args, **kwargs):
        return super().get(request, *args, **kwargs)

    def delete(self, request, *args, **kwargs):
        return super().get(request, * args, **kwargs)
