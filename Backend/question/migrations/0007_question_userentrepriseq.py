# Generated by Django 4.0.1 on 2022-03-28 13:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userentreprise', '0008_alter_userentreprise_id'),
        ('question', '0006_alter_question_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='userentrepriseQ',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='userentreprise.userentreprise'),
        ),
    ]
