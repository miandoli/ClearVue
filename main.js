var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

function startSim(){
    var cars = document.getElementById("carslider").value;
    var facts = document.getElementById("factoryslider").value;
    var farms = document.getElementById("farmslider").value;
    var samples = createSim(cars / 100.0, farms / 100.0, facts / 100.0);
    var counter = 0;
    var lblTime = document.getElementById("lblTime");
    var button = document.getElementById("btn");
    button.setAttribute("onclick", "");
    var tmr = setInterval(function() {
        if (counter < 120) {
            var year = Math.trunc(counter / 12) + 1;
            var month = counter % 12 + 1;
            lblTime.innerHTML = "Year: " + year + " Month: " + month;
            var sampleData = createData(samples, counter++);
            createMap(sampleData);
        } else if (counter == 120) {
            button.setAttribute("onclick", "startSim()");
        }
    }, 175);
}

function sliderChange(val, id) {
    if(id == 'carslider')
        document.getElementById('caroutput').innerHTML = val+' %';
    else if(id == 'factoryslider')
        document.getElementById('factoryoutput').innerHTML = val+' %';
    else if(id == 'farmslider')
        document.getElementById('farmoutput').innerHTML = val+' %';
}
