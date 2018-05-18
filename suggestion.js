function printSuggestion(inputData) {
  var suggestion = inputData[Math.floor(Math.random() * inputData.length)];
  console.group("Suggestion");
  console.log(JSON.stringify(suggestion, null, '  '));
  console.groupEnd();
  document.getElementById("suggestion").innerHTML =
    '<div class="fyi">' +
    '<p>The updated printSuggestion() function that supports sponsored ' +
    'suggestions is still in development.</p></div>';
}
