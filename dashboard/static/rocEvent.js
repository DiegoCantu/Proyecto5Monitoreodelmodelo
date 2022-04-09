 var margin = { top: 30, right: 61, bottom: 70, left: 61 },
            width = 470 - margin.left - margin.right,
            height = 450 - margin.top - margin.bottom;

        // fpr for "false positive rate"
        // tpr for "true positive rate"

        // FPR: la proporción de todas las muestras que en realidad fueron negativas y que se consideraron incorrectas como positivas. FPR = FP / (FP + TN)
        // TPR: La tasa de ser juzgado positivamente como positivo entre todas las muestras realmente positivas. TPR = TP / (TP + FN)
        // Fuente: https://programmerclick.com/article/7523185645/
        var rocChartOptions = {
            "margin": margin,
            "width": width,
            "height": height,
            "interpolationMode": "basis",
            "fpr": "X",
            "tprVariables": [
                {
                    "name": "BPC",
                    "label": "Break Points"
                },
                {
                    "name": "WNR",
                    "label": "Winners"
                },
                {
                    "name": "FSP",
                    "label": "First Serve %",
                },
                {
                    "name": "NPW",
                    "label": "Net Points Won"
                }
            ],
            "animate": false,
            "smooth": true
        }

        d3.json("http://127.0.0.1:8000/static/lastDataset.json", function (error, data) {
            rocChart("#roc", data, rocChartOptions)
        })