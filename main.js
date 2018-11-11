var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
}

function startSim(){
    var cars = document.getElementById("carslider").value;
    var facts = document.getElementById("factoryslider").value;
    var farms = document.getElementById("farmslider").value;
    createSim(cars, farms, facts);
}

function sliderChange(val, id) {
    if(id == 'carslider')
        document.getElementById('caroutput').innerHTML = val;
    else if(id == 'factoryslider')
        document.getElementById('factoryoutput').innerHTML = val;
    else if(id == 'farmslider')
        document.getElementById('farmoutput').innerHTML = val;
}