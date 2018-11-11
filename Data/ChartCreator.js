function createMap(locations, regions) {
    var map = AmCharts.makeChart("chartdiv", {
        "type": "map",
        "dataProvider": {
            "map": "worldHigh",
            "areas": regions
        },
        "colorSteps": 10,
        "areasSettings": {

            "alpha": 0.8,
            "unlistedAreasAlpha": 0.1,
            "balloonText": "[[title]] joined EU at [[customData]]"
        },
        "valueLegend": {
            "right": 10,
            "minValue": "little",
            "maxValue": "a lot!"
        },
        "areasSettings": {
            "autoZoom": false
        },

        "export": {
            "enabled": true
        }
    });
}
createMap(0, 0);
