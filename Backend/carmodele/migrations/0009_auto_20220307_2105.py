# Generated by Django 3.0.3 on 2022-03-07 20:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('carmodele', '0008_alter_carmodele_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='carmodele',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
