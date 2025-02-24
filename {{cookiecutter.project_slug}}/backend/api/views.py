from django.shortcuts import render
from rest_framework import viewsets
from .serializers import LoginDetailSerializer
from .models import LoginDetail

# Create your views here.

class LoginDetailView(viewsets.ModelViewSet):
    serializer_class = LoginDetailSerializer
    queryset = LoginDetail.objects.all()