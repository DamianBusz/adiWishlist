from django.db import models


class Wishlist(models.Model): 
    name                = models.TextField()
    image               = models.TextField()
    productId           = models.TextField()
    modelId             = models.TextField()
    price               = models.FloatField()
    updated             = models.DateTimeField(auto_now=True)
    timestamp           = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name[:50]

    class Meta:
        verbose_name = 'Wishlist post'
        verbose_name_plural = 'Wishlists posts'