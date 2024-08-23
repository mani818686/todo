# models.py
from django.db import models

class Todo(models.Model):
    STATUS_CHOICES = [
        ('Not Started', 'Not Started'),
        ('In Progress', 'In Progress'),
        ('Completed', 'Completed'),
    ]

    task = models.CharField(max_length=200)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Not Started')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.task
