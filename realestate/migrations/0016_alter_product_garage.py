# Generated by Django 4.0.5 on 2022-07-31 18:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0015_product_header'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='garage',
            field=models.BooleanField(default=False),
        ),
    ]
