var module = angular.module('vizApp', ['ui.bootstrap']);

module.controller('appCtrl', function($scope, $http, $q) {



var chart = new Highcharts.Chart({
        chart: {
        	renderTo: 'chart',
            type: 'column'
        },
        title: {
            text: 'Number of Images tweeted - Age distribution'
        },
        xAxis: {
        	title: {
                text: 'Age'
            },
            categories: ['<18', '18-24', '25-34', '35-44', '45-54', '55-64', '>64']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Number of Images'
            },
            stackLabels: {
                enabled: true,
                style: {
                    fontWeight: 'bold',
                    color: (Highcharts.theme && Highcharts.theme.textColor) || 'gray'
                }
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y + '<br/>' +
                    'Total: ' + this.point.stackTotal;
            }
        },
        plotOptions: {
            column: {
                stacking: 'normal',
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'white',
                    style: {
                        textShadow: '0 0 3px black'
                    }
                }
            }
        },
        series: [{
            name: 'Male',
            data: [35, 599, 56, 1743, 199, 499,83],

        }, {
            name: 'Female',
            data: [344, 1613, 288, 1945, 203, 380, 66],
            color: '#F56F6F'
        }]
    });


var chart = new Highcharts.Chart({
        chart: {
        	renderTo: 'keywordChart',
            type: 'column'
        },
        title: {
            text: 'Distribution of AlchemyAPI Image Tagging Credibility'
        },
        xAxis: {
        	title: {
                text: 'Keywords'
            },
            categories: ['person', 'wedding', 'fashion', 'dress', 'bridal', 'bride', 'logo', 'design', 'boda', 'model']
        },
        yAxis: {
            min: 0.5,
            title: {
                text: 'Average Score'
            }
        },
        legend: {
            align: 'right',
            x: -30,
            verticalAlign: 'top',
            y: 25,
            floating: true,
            backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || 'white',
            borderColor: '#CCC',
            borderWidth: 1,
            shadow: false
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.x + '</b><br/>' +
                    this.series.name + ': ' + this.y
            }
        },
        plotOptions: {
            column: {
                dataLabels: {
                    enabled: true,
                    color: (Highcharts.theme && Highcharts.theme.dataLabelsColor) || 'black',
                    style: {
                        textShadow: '0 0 0px'
                    }
                }
            }
        },
        series: [{
            name: 'Keywords',
            data: [0.931702, 0.862155, 0.813149, 0.837535, 0.642577, 0.738885, 0.853768, 0.747055, 0.814331, 0.608924]

        }]
    });
	

});