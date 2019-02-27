from rest_framework.test import APITestCase, URLPatternsTestCase
from rest_framework import status
from .models import Wishlist
from django.urls import include, path, reverse

class WishlistAPITestCase(APITestCase):

    def setUp(self):
        wishlist_item = Wishlist.objects.create(name='Adidas shoes one', image="https://image.com", productId="0F3J230", modelId="D343F", price=12)
        wishlist_item.save()

    def test_wishlist(self):
        qs = Wishlist.objects.all()
        self.assertEqual(qs.count(), 1)
    
    def test_wishlist_item_inside(self):
        response = self.client.get('/api/wishlist/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)

    def test_get_individual(self):
        response = self.client.get('/api/wishlist/1/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 7)

    def test_insert_wishlist_object(self):
        data = {
            "name": "Adidas ee",
            "image": 'test',
            "productId" : "0239213",
            "modelId" : "D92320",
            "price": "14"
        }
        response = self.client.post('/api/wishlist/', data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
    
    def test_remove_wishlist_object(self):
        response = self.client.delete('/api/wishlist/1/', format='json')
        self.assertTrue(response.status_code, status.HTTP_404_NOT_FOUND)



class WishlistMultipleItems(APITestCase):

    def setUp(self):
        Wishlist.objects.create(name='Adidas shoes one', image="https://Wimage.com", productId="0F3J230", modelId="D343F", price=12)
        Wishlist.objects.create(name='Adidas shoes two', image="https://image.cDom", productId="0F3J2D30", modelId="DC343F", price=12)
        Wishlist.objects.create(name='Adidas shoes three', image="https://Wimage.com", productId="0F3J230", modelId="D343F", price=12)
        Wishlist.objects.create(name='Adidas shoes four', image="https://imDage.com", productId="0F3J230", modelId="D343F", price=12)
      
    
    def test_crud(self):
        data = {
            "name": "Adidas ee",
            "image": 'test',
            "productId" : "0239213",
            "modelId" : "D92320",
            "price": "14"
        }
        response = self.client.post('/api/wishlist/', data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        response = self.client.get('/api/wishlist/11/')
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        response = self.client.delete('/api/wishlist/11/')
        self.assertEqual(response.status_code, status.HTTP_204_NO_CONTENT)
        response = self.client.get('/api/wishlist/11/')
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


