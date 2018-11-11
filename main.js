var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

function startSim(){
    var cars = document.getElementById("carslider").value;
    var facts = document.getElementById("factoryslider").value;
    var farms = document.getElementById("farmslider").value;
    createSim(cars/100.0, farms/100.0, facts/100.0);
}

function sliderChange(val, id) {
    if(id == 'carslider')
        document.getElementById('caroutput').innerHTML = val+' %';
    else if(id == 'factoryslider')
        document.getElementById('factoryoutput').innerHTML = val+' %';
    else if(id == 'farmslider')
        document.getElementById('farmoutput').innerHTML = val+' %';
}
