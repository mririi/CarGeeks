# Generated by Django 3.0.3 on 2022-03-28 21:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0007_merge_20220327_2200'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
