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
        name: "Krasnojarsk",
        image: "images/Krasnojarsk.jpg",
        info: "Krasnojarsk was the first pallasite meteorite ever found and studied and led to the creation of the Pallasite group, named after Pallas. It was also the first meteorite ever etched with acid (by G. Thomson) and therefore was the first one to show to human eyes the Widmanstätten pattern."
    },
        {
            name: "Zhigansk",
            image: "images/Zhigansk.jpg",
            info: ""},
        {
            name: "Sylacauga",
            image: "images/Sylacauga.jpg",
            info: "The Sylacauga meteorite is the first documented extraterrestrial object to have injured a human being. The grapefruit-sized fragment crashed through the roof of a farm house, bounced off a large wooden console radio, and hit Ann Elizabeth Hodges while she napped on a couch. The 34-year-old woman was badly bruised on one side of her body, but was able to walk. The event received worldwide publicity."},
        {
            name: "Chelyabinsk",
            image: "images/Chelyabinsk.jpg",
            info: "Extremely bright fireball entered atmosphere over Alaska and moving westward toward Chelyabinsk, near its termination point shortly before sunrise, creating a huge airblast shock that damaged thousands of buildings in Chelyabinsk (mostly broken glass) and injuring more than 1000 people; apparently meteorites were found in water under a large circular broken-ice feature found soon after the event."
        },
        {
            name: "Barwell",
            image: "images/Barwell.jpg",
            info: "Barwell is the largest and best recorded meteorite fall in British history. Although our exploration and understanding of space has moved on enormously since those first tentative steps in the 1960s, it is still thrilling to get close to this visitor from an ancient world."
        },
        {
            name: "Wethersfield (1971)",
            image: "images/Whethersfield.jpg",
            info: " The Cassarinos were sleeping and, surprisingly, were not awakened by the noise of the space rock passing through the roof of the house and lodging itself into the ceiling sheetrock of their second floor apartment.\n" +
                "\n" +
                "When he got up a 6:00 a.m. to go to work, Paul Cassarino noticed the living room floor cluttered with broken plaster and dust and saw the meteorite embedded in the ceiling insulation.  He pulled it out with his hand, put it on the floor and went to his job at Capewell Manufacturing.\n" +
                "\n" +
                "Fun fact: 11 years later the same small town was hit by a similar meteorite again."
        },
        {
            name: "Mihonoseki",
            image: "images/Mihonoseki.jpg",
            info: "During a thunderstorm the meteorite fell through the roof of a two-story house in the town of Mihonoseki. It penetrated two floors and was found the next day under the house near a small hole in the ground, one individual weighing 6.38 kg. A fireball was observed before by many eye-witnesses."
        },
        {
            name: "Santa Rosa",
            image: "images/Santa-Rosa.jpg",
            info: "In early 1810, on a Holy Saturday, a woman named Cecilia Corredor found the meteorite near the town in the Tocavita Hill. It was moved to the urban center of Santa Rosa de Viterbo, where it served as an anvil in the town's iron foundry for a long time. On 8 September 1877, the town's mayor had the meteorite placed on a stone column and exhibited in the town's central park."
        },
        {
            name: "Tucson",
            image: "images/Tucson_ring.jpg",
            info: "The Tucson Ring meteorite is a brezinaite meteorite fragment. It was reported as one of several masses of virgin iron found at the foot of the Sierra de la Madera and transported to the plaza of Tucson, Arizona circa 1850, where it was used as an anvil in a blacksmith's shop."
        },
        {
            name: "Wedderburn",
            image: "images/Wedderburn.jpg",
            info: "The Wedderburn meteorite is an iron meteorite discovered in 1951 near the town of Wedderburn in the state of Victoria, Australia.\n" +
                "\n" +
                "In 2019 it was announced that edscottite, a mineral previously not found in nature, had been identified in a sample of the Wedderburn meteorite. It is believed the mineral was created in the core of another planet."
        },
        {
            name: "Valera",
            image: "images/Valera.jpg",
            info: "On the evening of Oct. 15, 1972, farmhands in Trujillo, Venezuela, heard a sonic boom. The next morning, a large rock was found alongside a dead cow with a crushed neck and clavicle. Years later, scientists confirmed the rock, which in the meantime had served as a doorstop, was a meteorite.\n" +
                "\n" +
                "This is the only known meteorite responsible for a fatality, at least to date."
        },
        {
            name: "Peekskill",
            image: "images/Peekskill.jpg",
            info: "On Oct. 9, 1992, video cameras at Friday night football games in the northeastern United States caught the fiery descent of a meteorite that would end its fall by punching through the trunk of a red Chevy Malibu parked in Peekskill, N.Y. The owner of the car, 18-year-old Michelle Knapp, sold the car within a week for 25 times the $400 she paid for it when buying it from her grandmother. \n" +
                "\n" +
                "Not only are two pieces of this meteorite for sale, collectors also have a chance to purchase the original title to the Malibu and the bulb from the rear tail light, which exploded when the car's trunk was punctured by the meteorite."
        },
        {
            name: "Mbale",
            image: "images/Mbale.jpg",
            info: "On Aug. 14, 1992, residents of the Nigerian city of Mbale heard a loud explosion that became a rumbling, accompanied by a white smoke trail in the sky. Then rocks rained down, pelting an area of about 1.9 by 4.3 miles (3 by 7 kilometers). One small meteorite even struck a young boy after ricocheting off a banana tree. Because the region was being ravaged by AIDS, Mbale residents believed the meteorite shower brought a cure from God, and they ground up the stones into a paste that was eaten or applied topically.\n" +
            "\n" +
            "Within several months, 426 stones weighting 238 pounds (108 kilograms) had been recovered from this large meteorite shower."
        }


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