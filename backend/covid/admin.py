from django.contrib import admin
from .models import Town, Councilor

# Register your models here.

class TownAdmin(admin.ModelAdmin):
    list_display = ('name', 'zip_code', 'positive_cases', 'tested')

admin.site.register(Town, TownAdmin)

class CouncilorAdmin(admin.ModelAdmin):
    list_display = ('name', 'description', 'city')

admin.site.register(Councilor, CouncilorAdmin)