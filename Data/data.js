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
    var text = "Alabama|US-AL 62.8 0.15 0.35 0.35\r\nAlaska|US-AK 26.6 0.05 0.08 0.10\r\nArizona|US-AZ 60.3 0.25 0.12 0.15\r\nArkansas|US-AR 60.4 0.25 0.35 0.20\r\nCalifornia|US-CA 59.4 0.50 0.25 0.45\r\nColorado|US-CO 45.1 0.25 0.25 0.30\r\nConnecticut|US-CT 49.0 0.35 0.20 0.45\r\nDelaware|US-DE 55.3 0.40 0.07 0.68\r\nFlorida|US-FL 70.7 0.64 0.24 0.70\r\nGeorgia|US-GA 63.5 0.20 0.80 0.30\r\nHawaii|US-HI 70.0 0.03 0.04 0.06\r\nIdaho|US-ID 44.4 0.08 0.75 0.40\r\nIllinois|US-IL 51.8 0.50 0.60 0.30\r\nIndiana|US-IN 51.7 0.35 0.20 0.80\r\nIowa|US-IA 47.8 0.20 0.80 0.36\r\nKansas|US-KS 54.3 0.15 0.80 0.40\r\nKentucky|US-KY 55.6 0.30 0.86 0.15\r\nLouisiana|US-LA 66.4 0.53 0.60 0.30\r\nMaine|US-ME 41.0 0.13 0.20 0.16\r\nMaryland|US-MD 54.2 0.60 0.13 0.45\r\nMassachusetts|US-MA 47.9 0.80 0.04 0.99\r\nMichigan|US-MI 44.4 0.30 0.15 0.64\r\nMinnesota|US-MN 41.2 0.30 0.10 0.80\r\nMississippi|US-MS 63.4 0.20 0.60 0.48\r\nMissouri|US-MO 54.5 0.12 0.88 0.30\r\nMontana|US-MT 42.7 0.04 0.15 0.16\r\nNebraska|US-NE 48.8 0.16 0.34 0.12\r\nNevada|US-NV 49.9 0.73 0.12 0.36\r\nNew Hampshire|US-NH 43.8 0.19 0.34 0.23\r\nNew Jersey|US-NJ 52.7 0.74 0.18 0.19\r\nNew Mexico|US-NM 53.4 0.72 0.08 0.39\r\nNew York|US-NY 45.4 0.97 0.04 0.87\r\nNorth Carolina|US-NC 59.0 0.21 0.68 0.23\r\nNorth Dakota|US-ND 40.4 0.11 0.56 0.32\r\nOhio|US-OH 50.7 0.28 0.45 0.49\r\nOklahoma|US-OK 59.6 0.46 0.13 0.65\r\nOregon|US-OR 48.4 0.23 0.78 0.34\r\nPennsylvania|US-PA 48.8 0.67 0.32 0.39\r\nRhode Island|US-RI 50.1 0.34 0.12 0.54\r\nSouth Carolina|US-SC 62.4 0.21 0.59 0.28\r\nSouth Dakota|US-SD 45.2 0.12 0.54 0.34\r\nTennessee|US-TN 57.6 0.42 0.64 0.53\r\nTexas|US-TX 64.8 0.81 0.21 0.79\r\nUtah|US-UT 48.6 0.43 0.49 0.31\r\nVermont|US-VT 42.9 0.34 0.54 0.39\r\nVirginia|US-VA 55.1 0.23 0.84 0.54\r\nWashington|US-WA 48.3 0.23 0.56 0.43\r\nWest Virginia|US-WV 51.8 0.34 0.78 0.23\r\nWisconsin|US-WI 43.1 0.32 0.03 0.42\r\nWyoming|US-WY 42.0 0.12 0.17 0.21\r\n";
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
