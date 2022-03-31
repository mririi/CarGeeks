from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Chat(models.Model):
  message = models.TextField(null=True,blank=True)
  dateCh = models.DateTimeField(auto_now_add=True)
  sender = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True,related_name="sender")
  reciever = models.ForeignKey(User,on_delete=models.CASCADE,null=True,blank=True,related_name="reciever")
  preview = models.CharField(max_length=200,null=True,blank=True)
  def __str__(self):
    return 'message from '+self.sender.__str__()+' to '+self.reciever.__str__()