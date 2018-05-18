var document = "";

var data = [
  {
    "name": "Restaurant A",
    "address": "123 Main Street",
    "neighborhood": "Ginter Park",
    "note": "This is a note (A)"
  },
  {
    "name": "Restaurant B",
    "address": "123 Franklin Street",
    "neighborhood": "Bellvue",
    "note": "This is a note (B)"
  }
];

// function printSuggestion(inputData) {
//   var suggestion = inputData[Math.floor(Math.random() * inputData.length)];
//   console.group("Suggestion");
//   console.log(JSON.stringify(suggestion, null, '  '));
//   console.groupEnd();
//   document.getElementById("suggestion").innerHTML =
//     '<div class="vcard">' +
//       '<div class="org">' + suggestion.name + '</div>' +
//       '<div class="adr">' +
//         '<div class="street-address">' + suggestion.address + '</div>' +
//         '<span class="locality">Richmond</span>, ' +
//         '<span class="state">VA</span>' +
//       '</div>' +
//       '<div class="note">' + suggestion.note + '</div>' +
//     '</div>';
// }
