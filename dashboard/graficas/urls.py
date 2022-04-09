from django.urls import path
from . import views


urlpatterns = [
    path('histogram_chart', views.histogram_chart, name='histogram_chart'),
    path('roc_chart', views.roc_chart, name='roc_chart'),
]
