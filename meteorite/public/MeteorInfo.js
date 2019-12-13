function contains(name) {
    for( var i = 0; i < infodictionary.length;i++){
        if(infodictionary[i].name === name){
            return i
        }
    }
    return -1
}

const infodictionary =
    [{
        name: "Rivolta de Bassi",
        image: "images/Krasnojarsk.jpg",
        info: "Krasnojarsk was the first pallasite meteorite ever found and studied and led to the creation of the Pallasite group, named after Pallas. It was also the first meteorite ever etched with acid (by G. Thomson) and therefore was the first one to show to human eyes the Widmanstätten pattern."
    },
        {name: "Zhigansk", image: "images/Zhigansk.jpg", info: "alles huren nothing is displayed here"},
        {name: "Jalandhar", image: "images/Zhigansk.jpg", info: "alles huren nothing is displayed here"}

    ];
const datasmall = [
    {"name":"Rivolta de Bassi","recclass":"Stone-uncl","mass":"103.3","fall":"Fell","year":1490,"reclat":"45.483330","reclong":"9.516670","GeoLocation":"(45.48333, 9.51667)"},
    {"name":"Ensisheim","recclass":"LL6","mass":"127000","fall":"Fell","year":1491,"reclat":"47.866670","reclong":"7.350000","GeoLocation":"(47.86667, 7.35)"},
    {"name":"Castrovillari","recclass":"Stone-uncl","mass":"15000","fall":"Fell","year":1583,"reclat":"39.800000","reclong":"16.200000","GeoLocation":"(39.8, 16.2)"},
    {"name":"Jalandhar","recclass":"Iron","mass":"1967","fall":"Fell","year":1621,"reclat":"31.000000","reclong":"75.000000","GeoLocation":"(31.0, 75.0)"},
    {"name":"Stretchleigh","recclass":"Stone-uncl","mass":"10400","fall":"Fell","year":1623,"reclat":"50.383330","reclong":"-3.950000","GeoLocation":"(50.38333, -3.95)"},
    {"name":"Hatford","recclass":"Stone-uncl","mass":"29000","fall":"Fell","year":1628,"reclat":"51.650000","reclong":"-1.516670","GeoLocation":"(51.65, -1.51667)"},
    {"name":"Minamino","recclass":"L","mass":"1040","fall":"Fell","year":1632,"reclat":"35.078330","reclong":"136.933330","GeoLocation":"(35.07833, 136.93333)"},
    {"name":"Mount Vaisi","recclass":"Stone-uncl","mass":"17000","fall":"Fell","year":1637,"reclat":"44.083330","reclong":"6.866670","GeoLocation":"(44.08333, 6.86667)"},
    {"name":"Vago","recclass":"H6","mass":"40","fall":"Fell","year":1668,"reclat":"45.416670","reclong":"11.133330","GeoLocation":"(45.41667, 11.13333)"},
    {"name":"Ortenau","recclass":"Stone-uncl","mass":"4500","fall":"Fell","year":1671,"reclat":"48.500000","reclong":"8.000000","GeoLocation":"(48.5, 8.0)"},
    {"name":"Sasagase","recclass":"H","mass":"695","fall":"Fell","year":1688,"reclat":"34.716670","reclong":"137.783330","GeoLocation":"(34.71667, 137.78333)"},
    {"name":"Schellin","recclass":"L","mass":"7000","fall":"Fell","year":1715,"reclat":"53.350000","reclong":"15.050000","GeoLocation":"(53.35, 15.05)"},
    {"name":"Siratik","recclass":"Iron, IIAB","mass":"1700","fall":"Found","year":1716,"reclat":"14.000000","reclong":"-11.000000","GeoLocation":"(14.0, -11.0)"},
    {"name":"Ploschkovitz","recclass":"L5","mass":"39","fall":"Fell","year":1723,"reclat":"50.533330","reclong":"14.116670","GeoLocation":"(50.53333, 14.11667)"},
    {"name":"Steinbach","recclass":"Iron, IVA-an","mass":"98000","fall":"Found","year":1724,"reclat":"50.500000","reclong":"12.500000","GeoLocation":"(50.5, 12.5)"},
    {"name":"Rasgrad","recclass":"Stone-uncl","mass":"24700","fall":"Fell","year":1740,"reclat":"43.500000","reclong":"26.533330","GeoLocation":"(43.5, 26.53333)"}
    ];