# Generated by Django 3.0.3 on 2022-03-30 10:30

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questioncategory', '0009_alter_questioncategory_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='questioncategory',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
