# Generated by Django 3.0.3 on 2022-03-18 10:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('role', '0018_alter_role_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='role',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
