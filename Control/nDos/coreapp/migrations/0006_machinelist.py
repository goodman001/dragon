# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-23 05:11
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('coreapp', '0005_tasklist_timer'),
    ]

    operations = [
        migrations.CreateModel(
            name='Machinelist',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('addr', models.CharField(blank=True, max_length=30)),
                ('port', models.IntegerField(default=10200)),
                ('ostype', models.IntegerField(default=0)),
                ('alive', models.IntegerField(default=0)),
                ('date_time', models.DateTimeField(auto_now_add=True)),
                ('describe', models.CharField(blank=True, max_length=50)),
            ],
            options={
                'ordering': ['-date_time'],
            },
        ),
    ]
