
  // Load the Visualization API and the corechart package.
  google.charts.load('current', {'packages':['corechart']});

  // Set a callback to run when the Google Visualization API is loaded.
  google.charts.setOnLoadCallback(drawChart);
  function drawChart() {

    // Create the data table.
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Topping');
    data.addColumn('number', 'Slices');
    data.addRows([
      ['Peperonni', 1],
      ['Queso', 1],
      ['Champiñones', 1],
      ['Salchica', 1],
      ['Pimientos', 1],
      ['Aceitunas', 1],
      ['Piña', 1]
    ]);

    // Set chart options
    var options = {'title':'¿Cuanta pizza commiste anoche?',
                   'width':600,
                   'height':600};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('grafica'));
    chart.draw(data, options);
  }
