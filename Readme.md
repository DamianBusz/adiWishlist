# adidas wishlist

A task is to create an application that searches for adidas products and gives an option to put specific product to a wishlist. This repository contains both client and server side code. 
**Backend** is coded with python framework called Django with django_rest_framework(drf)
**Frontend** is coded with javascript library called React with use of multiple libraries like Redux, Redux-Immutable, Immutable.js, Redux-Saga & React Router v4
**Routing** of app is being taken care of by Nginx
**Database** database used - Postgresql

You can preview project online, here:
```
https://adiwishlist.live
```

## Getting Started

### Prerequisites
Since entire application is dockerized you will need docker & docker-compose in order to run it properly.
###### get docker on linux or mac
```
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
```
###### get docker on windows
[docker for windows](https://docs.docker.com/docker-for-windows/)
### Installing
first off, you need to build docker project with docker-compose

```
docker-compose build
```

once project is built we can run it 

```
docker-compose up -d
```

This, however is not over of our missery, we still need to make database migration, there are two ways to make this work
##### first way
simply run bash script migrate.sh
```
./migrate.sh
```
##### second way
run this command
```
docker-compose exec django python manage.py migrate
```

At this point our application should be running. 
Frontend can be found on localhost:
```
http://localhost
```
while backend endpoints can be found:
```
http://localhost/api/<endpoint>
```
## API Endpoints

Retrieve entire wishlist list with **GET**
```
http://localhost/api/wishlist/
```

Retrieve single wishlist item with **GET**
```
http://localhost/api/wishlist/1/
```

Add item to the wishlist with **POST**
```
http://localhost/api/wishlist/
```

Remove item from the wishlist with **DELETE**
```
http://localhost/api/wishlist/1/
```

## Running the tests

### Backend
To run backend tests simply type in command line/terminal
```
docker-compose exec django manage.py test api
```
..or execute bash script

```
./runtests.sh
```
