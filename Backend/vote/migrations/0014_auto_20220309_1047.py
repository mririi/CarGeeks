# Generated by Django 3.0.3 on 2022-03-09 09:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('vote', '0013_alter_vote_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vote',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
