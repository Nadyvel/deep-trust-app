# Generated by Django 3.0.2 on 2020-02-05 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('psychologists', '0004_auto_20200203_0907'),
    ]

    operations = [
        migrations.AddField(
            model_name='psychologist',
            name='description',
            field=models.TextField(blank=True, null=True, verbose_name='description'),
        ),
    ]