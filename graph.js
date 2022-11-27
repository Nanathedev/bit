

var ctx = document.getElementById('bar-graph').getContext('2d');

Chart.defaults.global.defaultFontColor = 'rgba(255,255,255, 1)';

var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: 'line',

  // The data for our dataset
  data: {
    labels: ["20 Марта 2018", "21 Марта 2018", "22 Марта 2018", "23 Марта 2018", "24 Марта 2018", "25 Марта 2018"],
    datasets: [{
        label: "Всего рефералов",
        backgroundColor: 'transparent',
        borderColor: '#2844ED',
        borderWidth: 2,
        data: [20, 80, 40, 100, 20, 60],
        pointRadius: 5,
        pointBackgroundColor: '#2844ED',
        pointHoverRadius: 5
      },
      {
        label: "Активных рефералов",
        backgroundColor: 'transparent',
        borderColor: '#8527EE',
        borderWidth: 2,
        data: [10, 30, 150, 80, 10, 120],
        pointRadius: 5,
        pointBackgroundColor: '#8527EE',
        pointHoverRadius: 5
      }
    ]
  },

  // Configuration options go here
  options: {
    responsive: true,
    tooltips: {
      yPadding: 10,
      xPadding: 10,
      caretSize: 8,
    },
    scales: {
      yAxes: [{
        gridLines: {
          zeroLineColor: "rgba(255,255,255,0.06)",
          zeroLineWidth: 1,
          color: 'rgba(255,255,255,0.06)'
        }
      }],
      xAxes: [{
        gridLines: {
          zeroLineColor: "rgba(255,255,255,0)",
          zeroLineWidth: 0,
          color: 'rgba(255,255,255,0)'
        }
      }]
    },
    legend: {
      labels: {
        // This more specific font property overrides the global property
        fontSize: 13,
        fillStyle: '#ffffff',
        usePointStyle: true
      }
    }
  }
});


$(document).ready(function() {
  var c1 = $('#circle1'),
      c2 = $('#circle2'),
      c3 = $('#circle3');

  c1.circleProgress({
    value: 0.9,//progress value
    size: 100,
    lineCap: 'round',
    thickness: 7,
    startAngle: -Math.PI / 4 * 2,
    emptyFill: "rgba(0, 0, 0, 0)",
    fill: "#2744E3",
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('.progress-data-item__value').text(parseInt(stepValue*100) + '%');
  });
  c2.circleProgress({
    value: 0.4,//progress value
    size: 100,
    lineCap: 'round',
    thickness: 7,
    startAngle: -Math.PI / 4 * 2,
    emptyFill: "rgba(0, 0, 0, 0)",
    fill: "#2744E3"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('.progress-data-item__value').text(parseInt(stepValue*100) + '%');
  });
  c3.circleProgress({
    value: 0.6,//progress value
    size: 100,
    lineCap: 'round',
    thickness: 7,
    startAngle: -Math.PI / 4 * 2,
    emptyFill: "rgba(0, 0, 0, 0)",
    fill: "#2744E3"
  }).on('circle-animation-progress', function(event, progress, stepValue) {
    $(this).find('.progress-data-item__value').text(parseInt(stepValue*100) + '%');
  });

});

