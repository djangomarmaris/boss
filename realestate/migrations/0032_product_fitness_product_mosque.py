# Generated by Django 4.0.5 on 2022-08-16 12:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0031_alter_product_market'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='fitness',
            field=models.BooleanField(default=False, verbose_name='Spor Salonu'),
        ),
        migrations.AddField(
            model_name='product',
            name='mosque',
            field=models.BooleanField(default=False, verbose_name='Cami'),
        ),
    ]