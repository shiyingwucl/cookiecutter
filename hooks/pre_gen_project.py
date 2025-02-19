import sys

database = "{{cookiecutter.database}}"
if database not in ["sqlite", "postgres"]:
    print("Error: Invalid database choice")
    sys.exit(1)
