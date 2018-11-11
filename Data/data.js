function createSim(car, farm, fact) {
    var timeLength = 120;
    var samples = [];
    var states = createStates();
    for (var i = 0; i < timeLength; i++) {
        states = simOne(car, farm, fact, states);
        var newSample = new Sample(i, states);
        samples.push(newSample);
    }
    return samples;
}

function simOne(car, farm, fact, states) {
    for (var i = 0; i < 10; i++) {
        var state = states[i];
        var points = car * state.fCar + farm * state.fFarm + fact * state.fFact;
        state.temp += points;
        states[i] = state;
    }
    return states;
}

function State(name, abrv, temp, fCar, fFarm, fFact) {
    this.name = name;
    this.abrv = abrv;
    this.temp = temp;
    this.fCar = fCar;
    this.fFarm = fFarm;
    this.fFact = fFact;
}

function Sample(time, states) {
    this.time = time;
    this.state = states;
}

function getLine(text) {
    return text.substring(0, text.indexOf("\r\n"));
}

function nextLine(text) {
    return text.substring(text.indexOf("\r\n") + 2);
}

function createStates() {
    var text = "Alabama AL 62.8 0.01 0.56 0.27\r\nAlaska AK 26.6 1 0.63 0.54\r\nArizona AZ 60.3 0.13 0.08 0.06\r\nArkansas AR 60.4 0.01 0.42 0.51\r\nCalifornia CA 59.4 0.52 0.93 0.54\r\nColorado CO 45.1 0.76 0.1 0.46\r\nConnecticut CT 49 0.46 0.2 0.08\r\nDelaware DE 55.3 0.23 0.7 0.34\r\nFlorida FL 70.7 0.12 0.99 0.47\r\nGeorgia GA 63.5 0.25 0.72 0.81\r\n";
    var states = [];
    for (var i = 0; i < 10; i++) {
        var info = getLine(text);
        text = nextLine(text);
        var name = info.substring(0, info.indexOf(" "));
        console.log(name);
        info = info.substring(info.indexOf(" ") + 1);
        var abrv = info.substring(0, 2);
        console.log(abrv);
        info = info.substring(3);
        var temp = info.substring(0, 4);
        console.log(temp);
        info = info.substring(5);
        var fCar = info.substring(0, 4);
        console.log(fCar);
        info = info.substring(5);
        var fFarm = info.substring(0, 4);
        console.log(fFarm);
        info = info.substring(5);
        var fFact = info.substring(0, 4);
        console.log(fFact);
        info = info.substring(5);
        newState = new State(name, abrv, temp, fCar, fFarm, fFact);
        states.push(newState);
    }
    return states;
}
