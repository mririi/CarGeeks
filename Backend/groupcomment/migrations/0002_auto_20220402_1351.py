# Generated by Django 3.0.3 on 2022-04-02 12:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groupcomment', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupcomment',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
