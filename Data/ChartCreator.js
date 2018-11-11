function createMap(data) {
    AmCharts.addInitHandler(function (chart) {
      var dataProvider = chart.dataProvider;
      var areas = chart.dataProvider.areas;
      var colorRanges = dataProvider.colorRanges;

      // Based on https://www.sitepoint.com/javascript-generate-lighter-darker-color/
      function ColorLuminance(hex, lum) {

        // validate hex string
        hex = String(hex).replace(/[^0-9a-f]/gi, '');
        if (hex.length < 6) {
          hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
        }
        lum = lum || 0;

        // convert to decimal and change luminosity
        var rgb = "#", c, i;
        for (i = 0; i < 3; i++) {
          c = parseInt(hex.substr(i*2,2), 16);
          c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
          rgb += ("00"+c).substr(c.length);
        }

        return rgb;
      }

      if (colorRanges) {

        var item;
        var range;
        var average;
        var variation;
        for (var i = 0, iLen = areas.length; i < iLen; i++) {

          item = areas[i];

          for (var x = 0, xLen = colorRanges.length; x < xLen; x++) {

            range = colorRanges[x];

            if (item.value >= range.start && item.value <= range.end) {
              average = (range.start - range.end) / 2;

              if (item.value <= average)
                variation = (range.variation * -1) / item.value * average;
              else if (item.value > average)
                variation = range.variation / item.value * average;

              item.color = ColorLuminance(range.color, variation.toFixed(2));
            }
          }
        }
      }

    }, ["map"]);

    var map = AmCharts.makeChart("chartdiv", {
        "type": "map",
        "theme": "dark",
        "dataProvider": {
            "map": "usaLow",
            "colorRanges": [{
              "start": 26,
              "end": 45,
              "color": "#66ffff",
              "variation": .4
            }, {
                "start": 46,
                "end": 50,
                "color": "#00ffcc",
                "variation": .4
            }, {
              "start": 51,
              "end": 55,
              "color": "#00ff99",
              "variation": .4
            }, {
              "start": 56,
              "end": 60,
              "color": "#00ff00",
              "variation": .4
            }, {
              "start": 61,
              "end": 65,
              "color": "#99ff33",
              "variation": .4
            }, {
              "start": 66,
              "end": 70,
              "color": "#ffff66",
              "variation": .4
            }, {
              "start": 71,
              "end": 75,
              "color": "#ff9933",
              "variation": .4
            }, {
              "start": 76,
              "end": 95,
              "color": "#cc3300",
              "variation": .4
            }],
            "areas": data
        },
        "colorSteps": 10,
        "areasSettings": {
            "alpha": 0.8,
            "unlistedAreasAlpha": 0.1,
            "balloonText": "[[title]] joined EU at [[customData]]"
        },
        "legend": {
            "bottom": 10,
            "right": 10,
            "align": "right",
            "data": [{
              "color": "#66ffff",
              "title": "<45"
            }, {
              "color": "#00ffcc",
              "title": "46-50"
            }, {
              "color": "#00ff99",
              "title": "51-55"
            }, {
              "color": "#00ff00",
              "title": "56-60"
            }, {
              "color": "#99ff33",
              "title": "61-65"
            }, {
              "color": "#ffff66",
              "title": "66-70"
            }, {
              "color": "#ff9933",
              "title": "71-75"
            }, {
              "color": "#cc3300",
              "title": ">76"
            }]
          },
        "areasSettings": {
            "autoZoom": false
        },

        "export": {
            "enabled": true
        }
    });
}

createMap(0);

function createData(samples, index) {
    var sample = samples[index];
    var states = sample.states;
    var data = [];
    for (var i = 0; i < 50; i++) {
        var state = states[i];
        var point = {"id": state.abrv, "value": state.temp};
        console.log(state.abrv + ": " + state.temp);
        data.push(point);
    }
    return data;
}
