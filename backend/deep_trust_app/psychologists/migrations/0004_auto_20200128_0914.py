# Generated by Django 3.0.2 on 2020-01-28 09:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('psychologists', '0003_psychologist_user_patient'),
    ]

    operations = [
        migrations.AlterField(
            model_name='psychologist',
            name='image',
            field=models.ImageField(blank=True, upload_to='', verbose_name='image'),
        ),
    ]