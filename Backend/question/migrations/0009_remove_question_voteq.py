# Generated by Django 4.0.1 on 2022-03-04 23:43

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('question', '0008_remove_question_pending_alter_question_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='question',
            name='voteQ',
        ),
    ]