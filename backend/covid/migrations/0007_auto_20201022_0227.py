# Generated by Django 3.0.8 on 2020-10-22 02:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('covid', '0006_auto_20201022_0111'),
    ]

    operations = [
        migrations.AlterField(
            model_name='town',
            name='tested',
            field=models.CharField(max_length=20),
        ),
    ]
