 var margin = { top: 30, right: 61, bottom: 70, left: 61 },
            width = 470 - margin.left - margin.right,
            height = 450 - margin.top - margin.bottom;

        // fpr for "false positive rate"
        // tpr for "true positive rate"

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

        d3.json("http://127.0.0.1:8000/static/data.json", function (error, data) {
            rocChart("#roc", data, rocChartOptions)
        })