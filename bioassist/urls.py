from django.urls import path
from bioassist.views import index, triagem

urlpatterns = [
    path('', index),
    path('triagem/', triagem, name='triagem'),
]