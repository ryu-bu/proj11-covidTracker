from django.contrib import admin
from .models import Tracker

# Register your models here.

class TrackerAdmin(admin.ModelAdmin):
    list_display = ('title', 'description', 'completed')


admin.site.register(Tracker, TrackerAdmin)
