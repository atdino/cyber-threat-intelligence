# Generated by Django 3.1.4 on 2020-12-05 11:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cti', '0005_ip_longitude'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ip',
            name='postal',
            field=models.CharField(max_length=16, null=True),
        ),
    ]