# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-22 08:41
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coreapp', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tasklist',
            name='target',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='tasklist',
            name='parameters',
            field=models.CharField(blank=True, max_length=1024),
        ),
        migrations.AlterField(
            model_name='tasklist',
            name='state',
            field=models.IntegerField(blank=True, default=0),
        ),
    ]
