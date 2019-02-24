from rest_framework import serializers
from api.models import Wishlist

class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = [
            'id',
            'name',
            'image',
            'review_rating',
            'review_count',
            'product_id',
            'url',
            'sub_title',
            'is_cloudary_image',
            'sub_title',
            'price',
            'sale_price'
        ]


  

class WishlistSerializerPerId(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = [
            'id',
            'name',
            'image',
            'review_rating',
            'review_count',
            'product_id',
            'url',
            'sub_title',
            'is_cloudary_image',
            'sub_title',
            'price',
            'sale_price'
        ]

 
