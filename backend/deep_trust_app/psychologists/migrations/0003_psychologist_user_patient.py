# Generated by Django 3.0.2 on 2020-01-28 09:09

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('psychologists', '0002_psychologist_user'),
    ]

    operations = [
        migrations.AddField(
            model_name='psychologist',
            name='user_patient',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL),
        ),
    ]
