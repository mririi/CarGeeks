# Generated by Django 3.0.3 on 2022-04-23 16:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userprofile', '0015_auto_20220403_0123'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userprofile',
            name='tel',
            field=models.DecimalField(decimal_places=1, default=0, max_digits=20),
        ),
    ]
