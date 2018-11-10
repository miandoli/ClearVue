function createSim(input) {
    var jqxhr = $.ajax({
        type: "POST",
        url: "/python/sim.py",
        async: false,
        data: { param: input },
    });
    var simResults = jqxhr.responseText;
    return 0;
}
