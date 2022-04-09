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

La siguiente ruta mostrara las 3 graficas:
http://127.0.0.1:8000/graficas/

Los archivos para generar las graficas se encuentran en la carpeta static:

1. Incluye en tu dashboard una gráfica de histograma con los scores obtenidos en tu predicción
histogram1.js

2. Incluye en tu dashboard una gráfica de histograma con la distribución de las etiquetas de predicción
histogram2.js

3. Incluye en tu dashboard una gráfica que muestra la curva ROC obtenida para el último dataset utilizado para la predicción.
rocEvent.js
rocChart.js

Dentro de Proyecto5Monitoreo/dashboard/graficas/
Se encuentra el archivo views.py el cual es el encargado de generar la vista.

La vista que se carga es el template Index.html que se encuentra en:
Proyecto5Monitoreo/dashboard/graficas/templates/graficas
