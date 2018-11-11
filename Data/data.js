function createSim(car, farm, fact) {
    var timeLength = 120;
    var samples = [];
    var states = createStates();
    for (var i = 0; i < timeLength; i++) {
        var newStates = simOne(car, farm, fact, states);
        states = newStates;
        var newSample = new Sample(i, newStates);
        samples.push(newSample);
    }
    return samples;
}

function simOne(car, farm, fact, states) {
    var newStates = [];
    for (var i = 0; i < 50; i++) {
        var state = states[i];
        var points = car * state.fCar + farm * state.fFarm + fact * state.fFact;
        var newTemp = Number(state.temp) + Number(points);
        var newState = new State(state.name, state.abrv, newTemp, state.fCar, state.fFarm, state.fFact);
        newStates.push(newState);
    }
    return newStates;
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
    this.states = states;
}

function getLine(text) {
    return text.substring(0, text.indexOf("\r\n"));
}

function nextLine(text) {
    return text.substring(text.indexOf("\r\n") + 2);
}

function createStates() {
    var text = getStateData();
    var states = [];
    for (var i = 0; i < 50; i++) {
        var info = getLine(text);
        text = nextLine(text);
        var name = info.substring(0, info.indexOf("|"));
        info = info.substring(info.indexOf("|") + 1);
        console.log(name);
        var abrv = info.substring(0, 5);
        info = info.substring(6);
        console.log(abrv);
        var temp = info.substring(0, 4);
        info = info.substring(5);
        var fCar = info.substring(0, 4);
        info = info.substring(5);
        var fFarm = info.substring(0, 4);
        info = info.substring(5);
        var fFact = info.substring(0, 4);
        info = info.substring(5);
        newState = new State(name, abrv, temp, fCar, fFarm, fFact);
        states.push(newState);
    }
    return states;
}
