from django.shortcuts import render
from rest_framework import viewsets
from .serializers import TownSerializer, CouncilorSerializer
from .models import Town, Councilor

# Create your views here.

class TownView(viewsets.ModelViewSet):
    serializer_class = TownSerializer
    queryset = Town.objects.all()

class CouncilorView(viewsets.ModelViewSet):
    serializer_class = CouncilorSerializer
    queryset = Councilor.objects.all()
