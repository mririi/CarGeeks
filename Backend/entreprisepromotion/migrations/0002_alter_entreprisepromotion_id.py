# Generated by Django 4.0.1 on 2022-03-18 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entreprisepromotion', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entreprisepromotion',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
