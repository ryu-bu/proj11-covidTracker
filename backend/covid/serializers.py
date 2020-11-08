from rest_framework import serializers
from .models import Town, Councilor
from .scraper import scraper

class TownSerializer(serializers.ModelSerializer):
    class Meta:
        model = Town
        model.objects.all().delete()
        fields = ('id', 'name', 'zip_code', 'positive_cases', 'tested', 'percent_positive')

        sc = scraper()
        data = sc.getData()

        for item in data:
            if model.objects.filter(zip_code=item['ZIP CODE']).count() == 0:
                b = model(
                    name=item['NEIGHBORHOOD'], 
                    zip_code=item['ZIP CODE'],
                    positive_cases=item['TOTAL POSITIVE CASES'], 
                    tested=item['NUMBER TESTED'], 
                    percent_positive=item['OF TESTED, CUMULATIVE % POSITIVE'], 
                )
                b.save()

class CouncilorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Councilor
        fields = ('id', 'name', 'description', 'city')