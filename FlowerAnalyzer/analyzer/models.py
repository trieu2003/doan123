from django.db import models

class DataTrained(models.Model):
    file_path = models.CharField(max_length=256)
    daisy = models.FloatField()
    dandelion = models.FloatField()
    rose = models.FloatField()
    sunflower = models.FloatField()
    tulip = models.FloatField()
    result = models.CharField(max_length=256)

    class Meta:
        db_table = 'Data_Trainned'

    def __str__(self):
        return self.result