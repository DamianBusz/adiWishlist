from rest_framework.test import APITestCase, URLPatternsTestCase
from rest_framework import status
from .models import Wishlist
from django.urls import include, path, reverse


class WishlistAPITestCase(APITestCase):
    def setUp(self):
        self.wishlist_item = Wishlist.objects.create(name='Adidas shoes one', image="https://image.com", productId="0F3J230", modelId="D343F", price=12)

    def test_list(self):
        response = self.client.get('/api/wishlist/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['id'], self.wishlist_item.id)

    def test_get_individual(self):
        response = self.client.get('/api/wishlist/{}/'.format(self.wishlist_item.id))
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['id'], self.wishlist_item.id)

    def test_get_individual_non_existing(self):
        response = self.client.get('/api/wishlist/99999999/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_insert_wishlist_object(self):
        Wishlist.objects.all().delete()
        data = {
            "name": "Adidas ee",
            "image": 'test',
            "productId" : "0239213",
            "modelId" : "D92320",
            "price": "14"
        }
        response = self.client.post('/api/wishlist/', data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        ws = Wishlist.objects.all()
        self.assertEqual(len(ws), 1)
        self.assertEqual(ws[0].name, 'Adidas ee')
  
    
    def test_remove_wishlist_object(self):
        response = self.client.delete('/api/wishlist/{}/'.format(self.wishlist_item.id), format='json')
        self.assertTrue(response.status_code, status.HTTP_204_NO_CONTENT)

    def test_remove_wishlist_object_non_existing(self):
        response = self.client.delete('/api/wishlist/99999999/', format='json')
        self.assertTrue(response.status_code, status.HTTP_404_NOT_FOUND)
