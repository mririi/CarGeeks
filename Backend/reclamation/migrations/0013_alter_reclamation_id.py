# Generated by Django 4.0.1 on 2022-03-10 09:21

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('reclamation', '0012_auto_20220309_1047'),
    ]

    operations = [
        migrations.AlterField(
            model_name='reclamation',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
