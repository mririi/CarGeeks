# Generated by Django 3.0.3 on 2022-04-05 11:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('postgroup', '0005_auto_20220403_0123'),
        ('groupcomment', '0011_auto_20220405_1233'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupcomment',
            name='postCom',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='postgroup.Postgroup'),
        ),
    ]
