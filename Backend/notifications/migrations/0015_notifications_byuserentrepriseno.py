# Generated by Django 3.0.3 on 2022-03-28 21:14

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userentreprise', '0010_auto_20220328_2212'),
        ('notifications', '0014_auto_20220328_2212'),
    ]

    operations = [
        migrations.AddField(
            model_name='notifications',
            name='byuserentrepriseNo',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='userentreprisedoneit', to='userentreprise.Userentreprise'),
        ),
    ]