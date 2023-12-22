from django.db import models

# Create your models here.

class JobModel(models.Model):

    jobID = models.UUIDField()
    jobTitle = models.CharField(max_length=100)
    companyUrl = models.URLField()
    company = models.CharField(max_length=100)
    salary = models.CharField(max_length=100)
    freq = models.CharField(max_length=100)
    jobType = models.CharField(max_length=100)
    duration = models.PositiveIntegerField()
    geoLong = models.DecimalField(decimal_places=20, max_digits=30)
    geoLat = models.DecimalField(decimal_places=20, max_digits=30)