import os
import shutil

use_docker = "{{cookiecutter.use_docker}}" == "y"

if not use_docker:
    os.remove("{{cookiecutter.project_slug}}/docker-compose.yml")
    os.remove("{{cookiecutter.project_slug}}/backend/Dockerfile")
    os.remove("{{cookiecutter.project_slug}}/frontend/Dockerfile")

print("Project generated successfully!")
