# Generated by Django 3.0.3 on 2022-03-05 20:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car', '0007_alter_car_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
