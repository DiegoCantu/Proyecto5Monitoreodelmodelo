from django.urls import path
from . import views


urlpatterns = [
    path('', views.graficas, name='graficas'),
    path('data/', views.get_data, name='get_data'),
]
