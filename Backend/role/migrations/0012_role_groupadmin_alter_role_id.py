# Generated by Django 4.0.1 on 2022-04-02 19:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('role', '0011_auto_20220401_1002'),
    ]

    operations = [
        migrations.AddField(
            model_name='role',
            name='groupadmin',
            field=models.BooleanField(default=False),
        ),
        migrations.AlterField(
            model_name='role',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]