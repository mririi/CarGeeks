# Generated by Django 4.0.1 on 2022-04-02 20:52

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('postgroup', '0004_postgroup_userentreprisepost_alter_postgroup_id'),
        ('groupvote', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupvote',
            name='postVo',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='postgroup.postgroup'),
        ),
    ]
