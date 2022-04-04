# Generated by Django 4.0.1 on 2022-04-02 19:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('userentreprise', '0015_alter_userentreprise_id'),
        ('groupcomment', '0002_auto_20220402_1351'),
    ]

    operations = [
        migrations.AddField(
            model_name='groupcomment',
            name='userentrepriseCom',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='userentreprise.userentreprise'),
        ),
        migrations.AlterField(
            model_name='groupcomment',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]