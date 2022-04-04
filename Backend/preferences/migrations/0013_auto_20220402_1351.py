# Generated by Django 3.0.3 on 2022-04-02 12:51

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('questioncategory', '0012_auto_20220401_1002'),
        ('preferences', '0012_auto_20220401_1002'),
    ]

    operations = [
        migrations.RenameField(
            model_name='preferences',
            old_name='categoryPref',
            new_name='categoryPref1',
        ),
        migrations.AddField(
            model_name='preferences',
            name='categoryPref2',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cat2', to='questioncategory.Questioncategory'),
        ),
        migrations.AddField(
            model_name='preferences',
            name='categoryPref3',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='cat3', to='questioncategory.Questioncategory'),
        ),
    ]
