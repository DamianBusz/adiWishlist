#!/bin/bash
#running migration
echo 'Running postgres migration'
docker-compose exec django python manage.py migrate
