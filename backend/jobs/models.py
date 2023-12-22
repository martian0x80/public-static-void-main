from django.db import models

# Create your models here.

class Model(models.Model):

    jobID = models.CharField()
    jobTitle = models.CharField()
    company = models.CharField()
    salary = models.IntegerField()
    freq = models.CharField()
    jobType = models.CharField()
    