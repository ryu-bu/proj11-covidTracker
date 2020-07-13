from rest_framework import serializers
from .models import Town, Councilor

class TownSerializer(serializers.ModelSerializer):
    class Meta:
        model = Town
        fields = ('id', 'name', 'zip_code', 'positive_cases', 'tested', 'percent_positive', 'updated_date', 'councilor')

class CouncilorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Councilor
        fields = ('id', 'name', 'description', 'city')