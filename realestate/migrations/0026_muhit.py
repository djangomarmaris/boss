# Generated by Django 4.0.5 on 2022-08-15 17:05

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0025_alter_category_name'),
    ]

    operations = [
        migrations.CreateModel(
            name='Muhit',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('awm', models.BooleanField(default=False, verbose_name='Alış Veriş Merkezi')),
                ('sea', models.BooleanField(default=False, verbose_name='Denize Sıfır')),
                ('hospital', models.BooleanField(default=False, verbose_name='Hastane')),
                ('product', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='realestate.product')),
            ],
        ),
    ]
