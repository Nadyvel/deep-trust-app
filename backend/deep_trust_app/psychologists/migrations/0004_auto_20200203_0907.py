# Generated by Django 3.0.2 on 2020-02-03 09:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('psychologists', '0003_auto_20200203_0903'),
    ]

    operations = [
        migrations.AlterField(
            model_name='psychologist',
            name='zip',
            field=models.IntegerField(blank=True, null=True, verbose_name='psychologist_zip'),
        ),
    ]
