# Generated by Django 4.0.5 on 2022-08-25 17:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0035_remove_works_info'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=3, max_digits=7),
        ),
    ]