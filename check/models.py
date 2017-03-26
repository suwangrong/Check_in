from __future__ import unicode_literals

from django.db import models

class user(models.Model):
    name = models.CharField(max_length=20, null=True)
    password = models.CharField(max_length=20, null=True)  # what about min length?
    login_status = models.BooleanField(default=False) #default not login
