# Generated by Django 3.0.3 on 2022-04-03 14:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('postgroup', '0005_auto_20220403_0123'),
        ('groupvote', '0005_auto_20220403_0138'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupvote',
            name='postVo',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='postgroup.Postgroup'),
        ),
    ]
