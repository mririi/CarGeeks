# Generated by Django 3.0.3 on 2022-03-12 10:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userentreprise', '0012_alter_userentreprise_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userentreprise',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
