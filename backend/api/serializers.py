from rest_framework import serializers
from api.models import Wishlist

class WishlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = [
            'id',
            'name',
            'image',
            'productId',
            'modelId',
            'price',
            'timestamp',
        ]

    def validate_image(self, value):
        qs = Wishlist.objects.filter(image__iexact=value)
        if qs.exists():
            raise serializers.ValidationError("This item is already in your wishlist")
        return value 
  

class WishlistSerializerPerId(serializers.ModelSerializer):
    class Meta:
        model = Wishlist
        fields = [
            'id',
            'name',
            'image',
            'productId',
            'modelId',
            'price',
            'timestamp',
        ]

 
