# Generated by Django 4.0.1 on 2022-03-08 12:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('car', '0010_auto_20220307_2105'),
    ]

    operations = [
        migrations.AlterField(
            model_name='car',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
