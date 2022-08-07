# Generated by Django 4.0.5 on 2022-07-26 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0008_room_category_model_alter_product_room'),
    ]

    operations = [
        migrations.CreateModel(
            name='Agent',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='İsim/Soyisim', max_length=150)),
                ('phone', models.CharField(default='Telefon', max_length=150)),
                ('email', models.CharField(default='Email', max_length=150)),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='İsim/Soyisim', max_length=150)),
                ('postion', models.CharField(default='Mesleği', max_length=150)),
                ('about', models.CharField(default='Müşteri Yorumumuz', max_length=150)),
            ],
        ),
    ]
