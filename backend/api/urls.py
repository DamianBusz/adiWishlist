from django.contrib import admin
from django.urls import path, include
from .views import WishlistAPIView, WishlistsDetailsAPIView

urlpatterns = [

    path('wishlist/', WishlistAPIView.as_view()),
    path('wishlist/<int:pk>/', WishlistsDetailsAPIView.as_view()),

]