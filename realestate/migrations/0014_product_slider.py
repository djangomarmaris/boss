# Generated by Django 4.0.5 on 2022-07-31 17:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0013_product_house3d'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='slider',
            field=models.BooleanField(default=False),
        ),
    ]