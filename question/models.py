from django.db import models
from django_extensions.db.fields import AutoSlugField
# Create your models here.

class Question(models.Model):
  titleQ = models.CharField(max_length=501,unique=True,null=True,blank=True)
  contentQ = models.TextField(unique=True,null=True,blank=True)
  accepted = models.BooleanField(default=False)
  modified = models.BooleanField(default=False)
  nblikes = models.IntegerField(default=0)
  nbrep = models.IntegerField(default=0)
  dateQ = models.DateTimeField(auto_now_add=True)
  imageQ = models.ImageField(upload_to='images/',null=True, blank=True)
  userprofileQ = models.ForeignKey('userprofile.Userprofile',on_delete=models.CASCADE,null=True,blank=True)
  userentrepriseQ = models.ForeignKey('userentreprise.Userentreprise',on_delete=models.CASCADE,null=True,blank=True)
  categoryQ = models.ForeignKey('questioncategory.Questioncategory',on_delete=models.CASCADE,null=True,blank=True)
  tags = models.CharField(max_length=200,null=True,blank=True)
  slug = AutoSlugField(populate_from=['titleQ'])
  
  def __str__(self):
    return 'Question with title '+self.titleQ+' asked by '+self.userprofileQ.__str__()