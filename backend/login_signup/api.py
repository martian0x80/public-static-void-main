from rest_framework import generics, permissions, mixins, authentication
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializer import RegisterSerializer, UserSerializer
from django.contrib.auth.models import User

class RegisterApi(APIView):
    def post(self, request, *args,  **kwargs):
        serializer = RegisterSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        return Response({
            "user": UserSerializer(user).data,
            "message": "User Created Successfully. Login to grab JWT token.",
        })
class DeleteApi(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]
    def get(self, request, *args, **kwargs):
        User.objects.all().delete()
        return Response({"message": "Deleted all entries."})