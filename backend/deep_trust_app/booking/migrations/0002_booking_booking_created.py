# Generated by Django 3.0.2 on 2020-02-13 08:54

import datetime
from django.db import migrations, models
from django.utils.timezone import utc


class Migration(migrations.Migration):

    dependencies = [
        ('booking', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='booking',
            name='booking_created',
            field=models.DateTimeField(default=datetime.datetime(2020, 2, 13, 8, 54, 47, 716629, tzinfo=utc)),
        ),
    ]