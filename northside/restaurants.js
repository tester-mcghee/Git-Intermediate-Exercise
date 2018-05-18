var document = "";

var data = [
  {
    "name": "Restaurant A",
    "neighborhood": "Ginter Park",
    "address": "123 Main Street",
    "note": "This is a good place"
  },
  {
    "name": "Restaurant B",
    "neighborhood": "Bellvue",
    "address": "123 Broad Street",
    "note": "This is place eat food"
  },
  {
    "name": "Restaurant C",
    "neighborhood": "Bellvue",
    "address": "123 Derp Street",
    "note": "Yay yay yay"
  }
];

function printSuggestion(inputData) {
  var suggestion = inputData[Math.floor(Math.random() * inputData.length)];
  console.group("Suggestion");
  console.log(JSON.stringify(suggestion, null, '  '));
  console.groupEnd();
  document.getElementById("suggestion").innerHTML =
    '<div class="vcard">' +
      '<div class="org">' + suggestion.name + '</div>' +
      '<div class="adr">' +
        '<div class="street-address">' + suggestion.address + '</div>' +
        '<span class="locality">Richmond</span>, ' +
        '<span class="state">VA</span>' +
      '</div>' +
      '<div class="note">' + suggestion.note + '</div>' +
    '</div>';
}
