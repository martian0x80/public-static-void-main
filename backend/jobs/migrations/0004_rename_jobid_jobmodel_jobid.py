# Generated by Django 5.0 on 2023-12-23 08:51

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("jobs", "0003_rename_companyurl_jobmodel_companyurl"),
    ]

    operations = [
        migrations.RenameField(
            model_name="jobmodel",
            old_name="jobID",
            new_name="jobId",
        ),
    ]
