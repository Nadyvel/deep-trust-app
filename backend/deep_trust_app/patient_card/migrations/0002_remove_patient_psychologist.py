# Generated by Django 3.0.2 on 2020-01-29 09:35

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('patient_card', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='patient',
            name='psychologist',
        ),
    ]