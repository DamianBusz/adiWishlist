from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import WishlistSerializer, WishlistSerializerPerId
from api.models import Wishlist
from rest_framework.renderers import JSONRenderer
from rest_framework.generics import ListAPIView, CreateAPIView, RetrieveAPIView
from rest_framework import mixins, permissions, status
from django.shortcuts import get_object_or_404


class WishlistViewSet(mixins.CreateModelMixin, mixins.ListModelMixin, mixins.RetrieveModelMixin, mixins.DestroyModelMixin, viewsets.GenericViewSet):
    """View responsible for retrieving entire list and adding item in wishlist"""
    queryset = Wishlist.objects.all()
    model = Wishlist
    serializer_class = WishlistSerializer