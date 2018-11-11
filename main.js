var slider = document.getElementById("myRange");
var output = document.getElementById("demo");

function startSim(){
    var cars = document.getElementById("carslider").value;
    var facts = document.getElementById("factoryslider").value;
    var farms = document.getElementById("farmslider").value;
    createSim(cars/100, farms/100, facts/100);
}

function sliderChange(val, id) {
    if(id == 'carslider')
        document.getElementById('caroutput').innerHTML = val+' %';
    else if(id == 'factoryslider')
        document.getElementById('factoryoutput').innerHTML = val+' %';
    else if(id == 'farmslider')
        document.getElementById('farmoutput').innerHTML = val+' %';
}
