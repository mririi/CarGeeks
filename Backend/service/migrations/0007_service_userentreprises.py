# Generated by Django 3.0.3 on 2022-03-27 09:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userentreprise', '0007_userentreprise_nbvisits'),
        ('service', '0006_auto_20220326_2211'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='userentrepriseS',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='userentreprise.Userentreprise'),
        ),
    ]
