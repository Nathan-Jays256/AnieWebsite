# Generated by Django 2.1.15 on 2021-05-24 22:54

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Backend', '0003_auto_20210525_0142'),
    ]

    operations = [
        migrations.AlterField(
            model_name='newsletter',
            name='DatePublished',
            field=models.DateField(auto_now_add=True),
        ),
    ]
