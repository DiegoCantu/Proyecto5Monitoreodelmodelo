from django.shortcuts import render
from django.http import HttpResponse
import json
import csv

# Create your views here.
def graficas(request):
    context = {'grafica1': '1. Incluye en tu dashboard una gráfica de histograma '
                           'con los scores obtenidos en tu predicción.',
               'grafica2': '2. Incluye en tu dashboard una gráfica de histograma '
                           'con la distribución de las etiquetas de predicción.',
               'grafica3': '3. Incluye en tu dashboard una gráfica que muestra la '
                           'curva ROC obtenida para el último dataset utilizado para la predicción.'}
    return render(request, 'graficas/index.html', context)


def get_data(request):
    #header = ['price']
    #data = [50, 50, 30, 40]
    #with open('data.csv', 'w', encoding='UTF8') as f:
        #writer = csv.writer(f)
        # write the header
        #writer.writerow(header)
        # write the data
        #writer.writerow(data)
    #file = open('data.csv')
    #csvreader = csv.reader(file)
    #return HttpResponse(csvreader)
    return None

