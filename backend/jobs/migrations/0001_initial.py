# Generated by Django 4.1 on 2023-12-22 17:48

from django.db import migrations, models


class Migration(migrations.Migration):
    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Model",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("jobID", models.UUIDField()),
                ("jobTitle", models.CharField(max_length=100)),
                ("companyUrl", models.URLField()),
                ("company", models.CharField(max_length=100)),
                ("salary", models.CharField(max_length=100)),
                ("freq", models.CharField(max_length=100)),
                ("jobType", models.CharField(max_length=100)),
                ("duration", models.PositiveIntegerField()),
                ("geoLong", models.DecimalField(decimal_places=20, max_digits=30)),
                ("geoLat", models.DecimalField(decimal_places=20, max_digits=30)),
            ],
        ),
    ]
