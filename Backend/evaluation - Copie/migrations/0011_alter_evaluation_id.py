# Generated by Django 4.0.1 on 2022-03-31 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evaluation', '0010_auto_20220330_1130'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evaluation',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
