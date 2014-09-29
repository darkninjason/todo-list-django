from django.db import models

class Todo(models.Model):
    title = models.CharField(max_length=30,default="Default task")
    completed = models.BooleanField(default=False)

class TodoFooter(models.Model):
    itemsLeft = models.IntegerField(default=0)

class Placeholder(models.Model):
    label = models.CharField(max_length=100,default="What needs to be done?")