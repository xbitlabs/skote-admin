import { ChartType } from './chartjs.model';

const lineAreaChart: ChartType = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October'],
    datasets: [
        {
            label: 'Sales Analytics',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(85, 110, 230, 0.2)',
            borderColor: '#556ee6',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#556ee6',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#556ee6',
            pointHoverBorderColor: '#fff',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40, 55, 30, 80]
        },
        {
            label: 'Monthly Earnings',
            fill: true,
            lineTension: 0.5,
            backgroundColor: 'rgba(235, 239, 242, 0.2)',
            borderColor: '#ebeff2',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#ebeff2',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#ebeff2',
            pointHoverBorderColor: '#eef0f2',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [80, 23, 56, 65, 23, 35, 85, 25, 92, 36]
        }
    ],
    options: {
        defaultFontColor: '#8791af',
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        color: 'rgba(166, 176, 207, 0.1)',
                    },
                },
            ],
            yAxes: [
                {
                    ticks: {
                        max: 100,
                        min: 20,
                        stepSize: 10,
                    },
                    gridLines: {
                        color: 'rgba(166, 176, 207, 0.1)',
                    },
                },
            ],
        },

    }
};

const lineBarChart: ChartType = {
    labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July'
    ],
    datasets: [
        {
            label: 'Sales Analytics',
            backgroundColor: 'rgba(52, 195, 143, 0.8)',
            borderColor: 'rgba(52, 195, 143, 0.8)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(52, 195, 143, 0.9)',
            hoverBorderColor: 'rgba(52, 195, 143, 0.9)',
            data: [65, 59, 81, 45, 56, 80, 50, 20],
            barPercentage: 0.4

        },
    ],
    options: {
        maintainAspectRatio: false,
        scales: {
            xAxes: [
                {
                    gridLines: {
                        color: 'rgba(166, 176, 207, 0.1)'
                    },
                }
            ],
            yAxes: [
                {
                    gridLines: {
                        color: 'rgba(166, 176, 207, 0.1)'
                    }
                }
            ]
        }
    }
};

const pieChart: ChartType = {
    labels: [
        'Desktops', 'Tablets'
    ],
    datasets: [
        {
            data: [300, 180],
            backgroundColor: ['#34c38f', '#ebeff2'],
            hoverBackgroundColor: ['#34c38f', '#ebeff2'],
            hoverBorderColor: '#fff',
        }
    ],
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'top',
        }
    }
};

const donutChart: ChartType = {
    labels: [
        'Desktops', 'Tablets'
    ],
    datasets: [
        {
            data: [300, 210],
            backgroundColor: [
                '#556ee6', '#ebeff2'
            ],
            hoverBackgroundColor: ['#556ee6', '#ebeff2'],
            hoverBorderColor: '#fff',
        }],
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'top',
        }
    }
};

const radarChart: ChartType = {
    labels: [
        'Eating',
        'Drinking',
        'Sleeping',
        'Designing',
        'Coding',
        'Cycling',
        'Running',
    ],
    datasets: [
        {
            label: 'Desktops',
            backgroundColor: 'rgba(52, 195, 143, 0.2)',
            borderColor: '#34c38f',
            pointBackgroundColor: '#34c38f',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#34c38f',
            data: [65, 59, 90, 81, 56, 55, 40],
        },
        {
            label: 'Tablets',
            backgroundColor: 'rgba(85, 110, 230, 0.2)',
            borderColor: '#556ee6',
            pointBackgroundColor: '#556ee6',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: '#556ee6',
            data: [28, 48, 40, 19, 96, 27, 100],
        },
    ],
    options: {
        maintainAspectRatio: false,
        legend: {
            position: 'top'
        }
    }
};

const polarChart: ChartType = {
    labels: ['Series 1', 'Series 2', 'Series 3', 'Series 4'],
    datasets: [
        {
            data: [11, 16, 7, 18],
            backgroundColor: ['#f46a6a', '#34c38f', '#f1b44c', '#556ee6'],
            label: 'My dataset', // for legend
            hoverBorderColor: '#fff',
        },
    ],
    options: {
        responsive: true,
        legend: {
            position: 'top',
        }
    }
};

export { lineAreaChart, lineBarChart, pieChart, donutChart, radarChart, polarChart };
