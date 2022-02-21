import { ChartType } from "./blog.model";

var visitorsOptions: ChartType = {
    series: [{
        name: 'Current',
        data: [18, 21, 45, 36, 65, 47, 51, 32, 40, 28, 31, 26]
    }, {
        name: 'Previous',
        data: [30, 11, 22, 18, 32, 23, 58, 45, 30, 36, 15, 34]
    }],
    chart: {
        height: 330,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    colors: ['#556ee6', '#f1b44c'],
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth',
        width: 2,
    },
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.05,
            stops: [20, 100, 100, 100]
        },
    },
    xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    markers: {
        size: 3,
        strokeWidth: 3,
        hover: {
            size: 4,
            sizeOffset: 2
        }
    },
    legend: {
        position: 'top',
        horizontalAlign: 'right',
    },
};

const popularPostData = [
    {
        image: 'assets/images/small/img-2.jpg',
        title: 'Beautiful Day with Friends',
        date: '10 Nov, 2020',
        likes: 125,
        comments: 68
    },
    {
        image: 'assets/images/small/img-6.jpg',
        title: 'Drawing a sketch',
        date: '02 Nov, 2020',
        likes: 102,
        comments: 48
    },
    {
        image: 'assets/images/small/img-1.jpg',
        title: 'Riding bike on road',
        date: '24 Oct, 2020',
        likes: 98,
        comments: 35
    },
    {
        image: 'assets/images/small/img-2.jpg',
        title: 'Project discussion with team',
        date: '15 Oct, 2020',
        likes: 92,
        comments: 22
    },
]

export { visitorsOptions, popularPostData };
