# Generated by Django 4.0.1 on 2022-03-07 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reclamation', '0008_auto_20220305_2147'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reclamation',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
