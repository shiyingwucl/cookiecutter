from rest_framework import serializers
from .models import LoginDetail

class LoginDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = LoginDetail
        fields = ('id', 'email', 'password')