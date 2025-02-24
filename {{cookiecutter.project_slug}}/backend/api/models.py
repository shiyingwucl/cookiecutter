from django.db import models

# Create your models here.

class LoginDetail(models.Model):
    email = models.CharField(max_length=120)
    password = models.TextField()

    def _str_(self):
        return self.email