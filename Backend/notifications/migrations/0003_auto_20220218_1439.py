# Generated by Django 3.0.3 on 2022-02-18 13:39

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('notifications', '0002_notifications_questionno'),
        ('userprofile', '0001_initial'),
        ('reply', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='notifications',
            name='replyNo',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='reply.Reply'),
        ),
        migrations.AddField(
            model_name='notifications',
            name='userprofileNo',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='userprofile.Userprofile'),
        ),
    ]
