# Generated by Django 3.0.3 on 2022-03-13 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0017_service_country'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='service',
            name='evaluationS',
        ),
        migrations.AddField(
            model_name='service',
            name='nbEval',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='service',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
