from django.db import models

class Wishlist(models.Model): 
    name                = models.TextField()
    image               = models.TextField()
    review_rating       = models.TextField(null=True, blank=True)
    review_count        = models.TextField(null=True, blank=True)
    product_id          = models.TextField()
    url                 = models.TextField()
    sub_title           = models.TextField()
    is_cloudary_image   = models.BooleanField(default=True)
    sub_title           = models.TextField()
    price               = models.FloatField()
    sale_price          = models.FloatField()
    updated             = models.DateTimeField(auto_now=True)
    timestamp           = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return str(self.name)[:50]

    class Meta:
        verbose_name = 'Wishlist post'
        verbose_name_plural = 'Wishlists posts'