# Generated by Django 4.0.1 on 2022-03-12 11:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evaluation', '0014_auto_20220312_1107'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evaluation',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
