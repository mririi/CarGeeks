# Generated by Django 4.0.1 on 2022-03-18 20:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evaluationentreprise', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evaluationentreprise',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
