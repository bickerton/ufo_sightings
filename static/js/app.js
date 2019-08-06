// from data.js
var tableData = data;

// Build Table
var tableBody = d3.select('tbody');
function buildTable(data){
    tableBody.html('')
    data.forEach(function(weatherReport) {
           console.log(weatherReport);
           var row = tableBody.append("tr");
           Object.entries(weatherReport).forEach(function([key, value]) {
             console.log(key, value);
             var cell = row.append("td");
             cell.text(value);
           });
         });
        

} 

//Enable date search with a buttion click
buildTable(tableData);
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  
  var filteredData = tableData.filter(row=>row.datetime === inputValue);

  console.log(filteredData);

 buildTable(filteredData);
});
