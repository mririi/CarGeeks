# Generated by Django 4.0.1 on 2022-04-02 20:19

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('question', '0013_alter_question_id'),
        ('userprofile', '0014_alter_userprofile_id'),
        ('userentreprise', '0015_alter_userentreprise_id'),
    ]

    operations = [
        migrations.CreateModel(
            name='GroupVote',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('dateCreationVo', models.DateTimeField(auto_now_add=True)),
                ('postVo', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='question.question')),
                ('userentrepriseVo', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='userentreprise.userentreprise')),
                ('userprofileVo', models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='userprofile.userprofile')),
            ],
        ),
    ]
