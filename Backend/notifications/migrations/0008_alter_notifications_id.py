# Generated by Django 4.0.1 on 2022-03-04 14:39

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('notifications', '0007_auto_20220303_2041'),
    ]

    operations = [
        migrations.AlterField(
            model_name='notifications',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
