from rest_framework import serializers
from .models import JobModel

class JobSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobModel
        fields = '__all__'
    
    def create(self, validated_data):
        return JobModel.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.title = validated_data.get('title', instance.title)
        instance.description = validated_data.get('description',
                                                   instance.description)
        instance.save()
        return instance
    
    def delete(self, instance):
        instance.delete()
        return instance
