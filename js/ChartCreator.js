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
            "autoZoom": true
        },

        "export": {
            "enabled": true
        }
    });
}
    createMap([createLocPoint("New York", 40, 70, 10)], [createCountryShade("US", "United States", 10)]);
