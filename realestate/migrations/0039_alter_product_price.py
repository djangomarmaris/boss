# Generated by Django 4.0.5 on 2022-08-25 17:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0038_alter_product_price'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=6),
        ),
    ]
