# Generated by Django 3.0.3 on 2022-04-03 00:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('groupmember', '0006_groupmember_userentreprisemem_alter_groupmember_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='groupmember',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
