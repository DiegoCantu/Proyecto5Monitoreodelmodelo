from django.shortcuts import render
from django.http import HttpResponse
import json
import csv

# Create your views here.
def histogram_chart(request):
    context = {'grafica1': '1. Incluye en tu dashboard una gráfica de histograma '
                           'con los scores obtenidos en tu predicción.',
               'grafica2': '2. Incluye en tu dashboard una gráfica de histograma '
                           'con la distribución de las etiquetas de predicción.'}
    return render(request, 'histogram_charts/histogram_Chart.html', context)


def roc_chart(request):
    context = {'grafica3': '3. Incluye en tu dashboard una gráfica que muestra la '
                           'curva ROC obtenida para el último dataset utilizado para la predicción.'}
    return render(request, 'roc_chart/roc_chart.html', context)

