# Generated by Django 3.0.3 on 2022-03-13 15:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('question', '0017_alter_question_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='question',
            name='id',
            field=models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
