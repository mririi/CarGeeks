# Generated by Django 4.0.1 on 2022-04-30 19:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('entreprisepromotion', '0013_auto_20220403_0123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='entreprisepromotion',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
