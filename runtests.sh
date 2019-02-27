#!/bin/bash
echo 'Running django tests'
docker-compose exec django python manage.py test api
