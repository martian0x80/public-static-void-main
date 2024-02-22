from rest_framework import serializers
from rest_framework.permissions import IsAuthenticated
from django.db import models
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import make_password

class RegisterSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'first_name', 'last_name', 'email')
        extra_kwargs = {
            'password': {'write_only': True},
            'first_name': {'required': True, 'allow_blank': False},
            'last_name': {'required': True, 'allow_blank': False},
            'email': {'required': True, 'allow_blank': False},
        }

    def create(self, validated_data):
        user = User.objects.create_user(username=validated_data['username'], first_name=validated_data['first_name'], last_name=validated_data['last_name'], email=validated_data['email'])
        user.set_password(validated_data['password'])
        user.save()
        return user
    # object wide validation
    # Doesn't work idk why
    # def validate(self, data):
    #     for field, value in data.items():
    #         if len(value) == 0:
    #             raise serializers.ValidationError({
    #                 'status': 'Failed',
    #                 'details': f'The field "{field}" is required and cannot be blank.'
    #             })
    #     return data
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'
