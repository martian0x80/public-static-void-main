from rest_framework import generics, permissions, mixins, authentication
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_400_BAD_REQUEST
from .serializer import RegisterSerializer, UserSerializer
from django.contrib.auth.models import User

class RegisterApi(APIView):
    def post(self, request, *args,  **kwargs):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid(raise_exception=False):
            user = serializer.save()
            return Response({
                "user": UserSerializer(user).data,
                "message": "User Created Successfully. Login to grab JWT token.",
                "status": "success"
            })
        else:
            return Response(
                serializer.errors | {'status': 'Failed'}, status=HTTP_400_BAD_REQUEST
            )
class DeleteApi(APIView):
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAdminUser]
    def get(self, request, *args, **kwargs):
        User.objects.all().delete()
        return Response({"message": "Deleted all entries."})