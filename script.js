google.charts.load('current', {'packages':['corechart']});
      
google.charts.setOnLoadCallback(getData);
google.charts.setOnLoadCallback(getData2);

// Create a new request object
function getData(){
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "https://api.eia.gov/series/?api_key=f8f3fad1c1fe690549b8b646d4429af3&series_id=SEDS.REPRB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    
    renewableProd(theActualData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}

function renewableProd(freshData) {
  freshData.unshift(["Year", "Billion BTUs"])
  
  var data = google.visualization.arrayToDataTable(freshData);

  var options = {
    title: 'Renewable Energy Production in Florida',
    curveType: 'function',
    legend: { position: 'bottom' },
    reverseCategories: true,
    backgroundColor: '#e6ffee'
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart1'));

  chart.draw(data, options);

  $(window).resize(function(){
     renewableProd();
   });
}

function getData2(){
  let request = new XMLHttpRequest()
  // TODO: URL to contact goes here
  let requestUrl = "http://api.eia.gov/series/?api_key=f8f3fad1c1fe690549b8b646d4429af3&series_id=SEDS.TETCB.FL.A"
  // Open a connection
  request.open('GET', requestUrl, true)
  // Callback for when the request completes
  request.onload = function(){
    let theActualData = JSON.parse(request.response).series[0].data
    
    energyConsum(theActualData)
  }
  // Callback for when there's an error
  request.error = function(err){
    console.log("error is: ", err)
  }
  // Send the request to the specified URL
  request.send()
}

function energyConsum(freshData) {
  freshData.unshift(["Year", "Billion BTUs"])
  
  var data = google.visualization.arrayToDataTable(freshData);

  var options = {
    title: 'Electricity Total Consumption (i.e. sold) in Florida',
    curveType: 'function',
    legend: { position: 'bottom' },
    reverseCategories: true,
    backgroundColor: '#e6ffee'
  };

  var chart = new google.visualization.LineChart(document.getElementById('chart2'));

  chart.draw(data, options);

  $(window).resize(function(){
     energyConsum();
   });
}