# Generated by Django 3.0.3 on 2022-03-15 15:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('service', '0022_auto_20220315_1029'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='dateS',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
