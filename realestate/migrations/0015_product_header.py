# Generated by Django 4.0.5 on 2022-07-31 18:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0014_product_slider'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='header',
            field=models.CharField(default='Ürünün İsmi', max_length=150),
        ),
    ]