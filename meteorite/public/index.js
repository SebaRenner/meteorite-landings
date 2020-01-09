var mymap = L.map('mapid', {zoomControl: false,minZoom:2.3}).setView([0, 0], 1);
var info_name = document.getElementById("info-name");
var info_recclass = document.getElementById("info-recclass");
var info_year = document.getElementById("info-year");
var info_mass = document.getElementById("info-mass");
var info_fall = document.getElementById("info-fall");
var info_position = document.getElementById("info-position");
var info_detail = document.getElementById("info_long");
var p1 =document.getElementById("t1")
var p2 =document.getElementById("t2")
var p3 =document.getElementById("t3")
var p4 =document.getElementById("t4")

var info_image = document.getElementById("info-image");
L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
    attribution: '©OpenStreetMap, ©CartoDB',
    noWrap:true,
    bounds: [
        [-90, -180],
        [90, 180]
    ]

}).addTo(mymap);
L.control.zoom({
    position: 'topright'
}).addTo(mymap);
mymap.on('click', function (e) {
    closeNav();
});

var listOfAllMarkers = [];
var listOfSpecialMarkers = [];
//CHANGE datasmall to data to show all markers

data.forEach((value, index) => {
    createAllMarkers(value)
})
var allMarkerLayer = L.layerGroup(listOfAllMarkers);
mymap.addLayer(allMarkerLayer);
var markerListForSlider = listOfAllMarkers;
var specialMarkerLayer = L.layerGroup(listOfSpecialMarkers);

//creates markers and adds them to internal markerarray
function createAllMarkers(meteorite) {

    var isInDictionaryAtPosition = contains(meteorite.name);
    if (isInDictionaryAtPosition > -1) {
        var specialMarker = createMarker(meteorite,
            {
                color: '#ff7904',
                weight: 3,
                opacity: 1,
                fillColor: '#ff7904',
                fillOpacity: 0.33,
                radius: parseFloat(meteorite.mass)
            }, isInDictionaryAtPosition);
        listOfSpecialMarkers.push(specialMarker)
    }
    var marker = createMarker(meteorite, {
        color: 'rgb(255,0,51)',
        weight: 1,
        opacity: 0.15,
        fillColor: 'rgb(255,0,51)',
        fillOpacity: 0.33,
        radius: parseFloat(meteorite.mass)
    }, isInDictionaryAtPosition);
    listOfAllMarkers.push(marker)
}

function showSpecialMarkers() {
    mymap.removeLayer(allMarkerLayer);
    mymap.addLayer(specialMarkerLayer);
    markerListForSlider = listOfSpecialMarkers;
    slider.value = slider.max;
    lastMarkerindex = listOfSpecialMarkers.length - 1;
    onSliderValueChange(slider.max)
}

function showAllMarkers() {
    mymap.removeLayer(specialMarkerLayer);
    mymap.addLayer(allMarkerLayer);
    markerListForSlider = listOfAllMarkers;
    slider.value = slider.max;
    lastMarkerindex = listOfAllMarkers.length - 1;
    onSliderValueChange(slider.max)

}

function createMarker(meteorite, markerOptions, isInDictionaryAtPosition) {
    var c = L.circle([meteorite.reclat, meteorite.reclong], markerOptions).on('click', display_info);
    c.meteorite = meteorite;
    c.dictinaryPosition = isInDictionaryAtPosition;

    var p = c.bindPopup("meteorite: " + c.meteorite.name + "<br>"
        + "mass: " + c.meteorite.mass + "<br>"
        + "year: " + c.meteorite.year + "<br>"
        + "category: " + c.meteorite.recclass + "<br>"
        + "fell: " + c.meteorite.fall);

    p.on('mouseover', function (e) {
        this.openPopup();
    });
    p.on('mouseout', function (e) {
        this.closePopup();
    });
    return c
}

function display_info(e) {
    closeNav();
    var m = e.target.meteorite;
    var dictionaryIndex = e.target.dictinaryPosition;

    if (dictionaryIndex > -1) {
        var dictionaryEntry = infodictionary[dictionaryIndex];
        info_name.innerText = m.name;
        info_position.innerText = m.GeoLocation;
        info_mass.innerText = "Mass (g): " + m.mass;
        info_recclass.innerText = "Category: " + m.recclass;
        info_year.innerText = "Year: " + m.year;
        info_fall.innerText = "Fell/Found: " + m.fall;
        info_detail.innerText = dictionaryEntry.info;
        info_image.src = dictionaryEntry.image;

        openNav();
    }

}

///SLIDER
var slider = document.getElementById("myRange");
var prog = document.getElementById("progress");
var min = parseFloat(data[0].year);
var max = parseFloat(data[data.length - 1].year);
slider.max = max;
slider.min = min;
slider.value = slider.max;
var lastSlidervalue = slider.value;
var lastMarkerindex = listOfAllMarkers.length - 1;
var jump= (max-min)/3
//TIMELINE
p1.innerText=min.toString()
p2.innerText=Math.round(min+jump).toString()
p3.innerText=Math.round(min+2*jump).toString()
p4.innerText=max.toString()



function onSliderValueChange(value) {
    if (value < lastSlidervalue) {
        var i = lastMarkerindex;
        while (i >= 0 && markerListForSlider[i].meteorite.year > value - 1) {
            mymap.removeLayer(markerListForSlider[i]);
            i--
        }
        lastMarkerindex = i + 1;
    } else {
        var i = lastMarkerindex;
        while (i < markerListForSlider.length && markerListForSlider[i].meteorite.year < value) {
            mymap.addLayer(markerListForSlider[i]);
            i++
        }
        lastMarkerindex = i - 1;
    }
    lastSlidervalue = value;
    prog.innerText = value;
}


var isInfoBarOpen = false;

function openNav() {
    var sideInfo = document.getElementById("sideInfo");
    sideInfo.style.width = "45%";
    sideInfo.style.paddingLeft = "20px";
    sideInfo.style.paddingRight = "20px";
    isInfoBarOpen = true;
}

function closeNav() {
    if (isInfoBarOpen) {
        info_name.innerText = "";
        info_position.innerText = "";
        info_mass.innerText = "";
        info_recclass.innerText = "";
        info_year.innerText = "";
        info_fall.innerText = "";
        info_detail.innerText = "";
        var sideInfo = document.getElementById("sideInfo");
        sideInfo.style.width = "0px";
        sideInfo.style.paddingLeft = "0px";
        sideInfo.style.paddingRight = "0px";
        isInfoBarOpen = false;
    }
}