# Generated by Django 4.0.1 on 2022-03-02 12:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carengine', '0003_auto_20220301_2047'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carengine',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
