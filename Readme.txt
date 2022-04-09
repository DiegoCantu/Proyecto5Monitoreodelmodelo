Instalar la libreria de djnago:
pip install -r requirement.txt o pip install django

En Proyecto5Monitoreo:

Ir a la carpeta dashboard donde se encuentra el archivo manage.py:
Comando:
cd dashboard

Ejecutar el servidor:
Comando:
py manage.py runserver

Abrir la liga de la terminal:
http://127.0.0.1:8000/

La siguiente ruta mostrara las 2 graficas de histograma:
http://127.0.0.1:8000/graficas/histogram_chart

Los archivos para generar las graficas se encuentran en la carpeta static:

1. Incluye en tu dashboard una gráfica de histograma con los scores obtenidos en tu predicción
histogram1.js

2. Incluye en tu dashboard una gráfica de histograma con la distribución de las etiquetas de predicción
histogram2.js

Template:
Proyecto5Monitoreo/dashboard/graficas/templates/histogram_charts/histogram_Chart.html

Datos primera grafica de historgrama:
static/scores.csv

Datos segunda grafica de historgrama:
static/distriucionEtiquetas.csv

La siguiente ruta mostrara la grafica de roc:
http://127.0.0.1:8000/graficas/roc_chart

3. Incluye en tu dashboard una gráfica que muestra la curva ROC obtenida para el último dataset utilizado para la predicción.
rocEvent.js
rocChart.js

Template:
Proyecto5Monitoreo/dashboard/graficas/templates/roc_chart/roc_chart.html

Datos ultimo dataset:
static/lastDataset.json
