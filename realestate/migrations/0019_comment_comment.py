# Generated by Django 4.0.5 on 2022-08-01 17:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('realestate', '0018_remove_comment_about_comment_image'),
    ]

    operations = [
        migrations.AddField(
            model_name='comment',
            name='comment',
            field=models.CharField(default='Yorum Giriniz.', max_length=500),
        ),
    ]
