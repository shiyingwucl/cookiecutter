from django.contrib import admin

# Register your models here.

from django.contrib import admin
from .models import LoginDetail

@admin.register(LoginDetail)
class LoginDetailAdmin(admin.ModelAdmin):
    list_display = ('email', 'password')