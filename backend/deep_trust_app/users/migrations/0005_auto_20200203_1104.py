# Generated by Django 3.0.2 on 2020-02-03 11:04

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0004_user_favourite_by'),
    ]

    operations = [
        migrations.RenameField(
            model_name='user',
            old_name='favourite_by',
            new_name='favourite_psychologist',
        ),
    ]
