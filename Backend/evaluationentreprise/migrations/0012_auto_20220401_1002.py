# Generated by Django 3.0.3 on 2022-04-01 09:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('evaluationentreprise', '0011_evaluationentreprise_commenteval'),
    ]

    operations = [
        migrations.AlterField(
            model_name='evaluationentreprise',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
