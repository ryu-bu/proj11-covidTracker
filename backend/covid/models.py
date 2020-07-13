from django.db import models

# Create your models here.

class Town(models.Model):
    name = models.CharField(max_length=50)
    zip_code = models.CharField(max_length=5) #warning: this is char, not integer
    positive_cases = models.BigIntegerField()
    tested = models.BigIntegerField() #total tested
    percent_positive = models.DecimalField(decimal_places=3, max_digits=3)
    updated_date = models.DateTimeField()
    councilor = models.CharField(max_length=50)

    def _str_(self):
        return self.name

class Councilor(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    city = models.CharField(max_length=50)

    def _str_(self):
        return self.name