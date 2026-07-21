# Django - React/Vite.js Cookiecutter template (Deprecated)

Recommended alternatives:

[Official cookicutter django template without react](https://github.com/cookiecutter/cookiecutter-django)

## Overview

This template is used for web development project that uses Django and React + Vite.js

## Quickstart

Create a virtual environment first and make sure cookiecutter is installed

```python
pip install cookiecutter
```

Run cookiecutter against this repo's url:  
```python 
cookiecutter https://github.com/UCL-ARC/django-react-cookiecutter
```

This will prompt the following configurations for your project:

Default values (applied when inputting enter):
```json
"project_name": "My Django React App",
"project_slug": "my_django_react_app",
"author_name": "Your Name",
"email": "you@example.com",
"description": "Django + React template",
"use_docker": "y",
"frontend_package_manager": "npm",
```

## Django REST api routing

communication between backend and frontend is done via api routing.
```python
# your_project_slug/urls.py

router = routers.DefaultRouter()
router.register(r'logins', views.LoginDetailView, 'logins')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
```

this will allow react to fetch information from api

## React router

**WIP**

## Docker

To create and run the docker stack, you would first need to run `npm install` on the frontend, otherwise `npm run dev` would fail in the Dockerfiles:

```bash
$ cd <project_slug/frontend>
$ npm install
```
You can proceed to build and run the docker stack with:
```bash
$ docker compose up -d --build
```
- `docker compose up`: Runs the services defined in docker-compose.yml  
- `--build` : Forces a rebuild of the images before starting the containers, ensures any changes to the Dockerfiles or dependencies are applied.
- `--detach` (or `-d`): Runs the containers in the background (detached mode), so the terminal is not blocked by logs and you can continue using it.

## Use in production settings

**WIP**


