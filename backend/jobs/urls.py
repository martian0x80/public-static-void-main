from django.contrib import admin
from django.urls import path, include
from .api import JobApi

urlpatterns = [
    path('getJobs', JobApi.as_view(), name='getJobs'),
    path('addJob', JobApi.as_view(), name='addJob'),
    path('deleteJob/<int:pk>', JobApi.as_view(), name='deleteJob'),
]