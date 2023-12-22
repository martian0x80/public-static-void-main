from rest_framework import serializers
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import JobModel
from .serializer import JobSerializer

class JobApi(APIView):
    def get(self, request):
        jobs = JobModel.objects.all()
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)
    
    def post(self, request):
        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors)