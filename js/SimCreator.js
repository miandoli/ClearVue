function createSim(randomness) {
    var numTime = 1;
    var data = grabData();
    var collection = [];
    for (var i = 0; i < numTime; i++) {
        var mean = 70;
        var stdev = randomness;
        var countries = ["China[a]", "India", "United States", "Indonesia", "Brazil", "Pakistan", "Nigeria", "Bangladesh", "Russia", "Mexico", "Japan", "Ethiopia", "Philippines", "Egypt", "Vietnam", "Germany", "Democratic Republic of the Congo", "Iran", "Turkey", "Thailand", "United Kingdom", "France[b]", "Italy", "Tanzania[c]", "South Africa", "Myanmar", "South Korea", "Colombia", "Kenya", "Spain[d]", "Argentina", "Ukraine[e]", "Uganda", "Algeria", "Sudan", "Iraq", "Poland", "Canada", "Morocco", "Afghanistan", "Saudi Arabia", "Peru", "Venezuela", "Uzbekistan", "Malaysia[f]", "Angola", "Mozambique", "Nepal", "Ghana", "Yemen", "Madagascar", "North Korea", "Australia[g]", "Ivory Coast", "Cameroon", "Taiwan[h]", "Niger", "Sri Lanka", "Romania", "Burkina Faso", "Malawi", "Mali", "Syria", "Kazakhstan", "Chile", "Zambia", "Netherlands", "Guatemala", "Ecuador", "Zimbabwe", "Cambodia", "Senegal", "Chad", "Somalia", "Guinea", "South Sudan", "Rwanda", "Tunisia", "Cuba", "Belgium", "Benin", "Greece", "Bolivia", "Haiti", "Burundi", "Dominican Republic", "Czech Republic", "Portugal", "Sweden", "Azerbaijan[i]", "Hungary", "Jordan", "Belarus", "United Arab Emirates", "Honduras", "Tajikistan", "Serbia[j]", "Austria", "Switzerland", "Israel", "Papua New Guinea", "Togo", "Sierra Leone", "Hong Kong", "Bulgaria", "Laos", "Paraguay", "El Salvador", "Libya", "Nicaragua", "Lebanon", "Kyrgyzstan", "Turkmenistan", "Denmark", "Singapore", "Finland[k]", "Slovakia", "Norway[l]", "Congo", "Eritrea", "Palestine[m]", "Costa Rica", "Ireland", "Liberia", "New Zealand", "Central African Republic", "Oman", "Mauritania", "Croatia", "Kuwait", "Panama", "Moldova[n]", "Georgia[o]", "Puerto Rico", "Bosnia and Herzegovina", "Uruguay", "Mongolia", "Armenia", "Albania", "Jamaica", "Lithuania", "Qatar", "Namibia", "Botswana", "Lesotho", "The Gambia", "Republic of Macedonia", "Slovenia", "Gabon", "Latvia", "Guinea-Bissau", "Bahrain", "Trinidad and Tobago", "Eswatini (Swaziland)", "Estonia", "East Timor", "Equatorial Guinea", "Mauritius[p]", "Cyprus[q]", "Djibouti", "Fiji", "Réunion", "Comoros", "Bhutan", "Guyana", "Montenegro", "Macau", "Solomon Islands", "Luxembourg", "Suriname", "Western Sahara", "Cape Verde", "Guadeloupe[r]", "Maldives", "Malta", "Brunei", "Bahamas", "Martinique", "Belize", "Iceland", "Barbados", "French Polynesia", "French Guiana", "New Caledonia", "Vanuatu", "Mayotte", "Sao Tome and Principe", "Samoa", "Saint Lucia", "Guernsey and  Jersey", "Guam", "Curaçao", "Kiribati", "Saint Vincent and the Grenadines", "Tonga", "Grenada", "Federated States of Micronesia", "Aruba", "United States Virgin Islands", "Antigua and Barbuda", "Seychelles", "Isle of Man", "Andorra", "Dominica", "Cayman Islands", "Bermuda", "Greenland", "American Samoa", "Saint Kitts and Nevis", "Northern Mariana Islands", "Marshall Islands", "Faroe Islands", "Sint Maarten", "Monaco", "Liechtenstein", "Turks and Caicos Islands", "Gibraltar", "San Marino", "British Virgin Islands", "Caribbean Netherlands[s]", "Palau", "Cook Islands", "Anguilla", "Wallis and Futuna", "Nauru", "Tuvalu", "Saint Pierre and Miquelon", "Montserrat", "Saint Helena, Ascension and Tristan da Cunha", "Falkland Islands", "Niue", "Tokelau", "Vatican City[t]"];
        for (var j = 0; j < countries.length; j++) {
            var country = countries[j];
            var value = stdRand(mean, stdev);
            console.log(country + ": " + value);
            var point = createCountryShade(country, j, value);
        }
    }
    return collection;
}

function stdRand(mean, stdev) {
    var u1 = 1.0 - Math.random();
    var u2 = 1.0 - Math.random();
    var z = Math.sqrt(-2.0 * Math.log(u1)) * Math.sin(2.0 * Math.PI * u2);
    return mean + z * stdev;
}

function Category(name, params) {
    this.name = name;
    this.params = params;
}

function skipLine(text) {
    return text.substring(text.indexOf("\r\n") + 2)
}

function nextLine(text, str) {
    return text.substring(text.indexOf(str) + str.length, text.indexOf("\r\n"))
}

function grabData() {
    var file = "/Data/data.txt";
    //text = readTextFile(file);
    var text = "n:3\r\nc:cars\r\nd:1.13E13\r\nd:-2.23E16\r\nd:0.92\r\nc:co2\r\nc:temp\r\nd:0\r\nd:0\r\nd:0\r\n";
    var data = [];
    var numCats = nextLine(text, "n:");
    text = skipLine(text);
    for (var i = 0; i < numCats; i++) {
        var name = nextLine(text, "c:");
        text = skipLine(text);
        var params = [];
        while (text.charAt(0) == 'd') {
            var param = Number(nextLine(text, "d:"));
            text = skipLine(text);
            params.push(param);
        }
        var cat = new Category(name, params);
        data.push(cat);
    }
    return data;
}

function readTextFile(file) {
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                var allText = rawFile.responseText;
                alert(allText);
            }
        }
    }
    rawFile.send(null);
    return allText;
}
