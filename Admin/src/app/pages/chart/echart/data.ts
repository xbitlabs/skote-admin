import { ChartType } from './echart.model';
import { graphic } from 'echarts';

const lineChart: ChartType = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        axisLabel: {
                color: '#999'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
    },
    yAxis: {
        type: 'value',
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
                color: '#999'
        }
    },
    series: [{
        data: [120, 132, 101, 134, 90, 230, 210],
        type: 'line'
    },
    {
        data: [420, 500, 611, 454, 540, 450, 330],
        type: 'line'
    },
    {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }],
    color: ['#556ee6', '#34c38f', '#f1b44c'],
    tooltip: {
        trigger: 'axis'
    },
};

const barChart: ChartType = {
    color: ['#50a5f1'],
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            axisTick: {
                show: false
            },
            axisLabel: {
                    color: '#999'
            },
            axisLine: {
                show: false
            },
        },
    ],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        axisLabel: {
            color: '#999'
        }
    }],
    series: [{
        name: 'Counters',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220]
    }]
};

const pieChart: ChartType = {
    series: [{
        data: [
            { value: 45, name: 'Crome' },
            { value: 20, name: 'IE' }, { value: 17, name: 'Firefox' }, { value: 5, name: 'Safari' }, { value: 10, name: 'Etc' }],
        type: 'pie',
    }],
    color: ['#556ee6', '#34c38f', '#f1b44c', '#50a5f1', '#f46a6a'],
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['Crome', 'IE', 'Firefox', 'Safari', 'Etc'],
    },
    tooltip: {
        trigger: 'axis'
    },
};

const customPieChart: ChartType = {
    series: [{
        data: [
            { value: 25, name: 'Crome' },
            { value: 10, name: 'IE' }, { value: 15, name: 'Firefox' }, { value: 30, name: 'Safari' }, { value: 10, name: 'Etc' }],
        type: 'pie',
        roseType: 'radius',
    }],
    color: ['#556ee6', '#34c38f', '#f1b44c', '#50a5f1', '#f46a6a'],
    legend: {
        x: 'center',
        y: 'bottom',
        data: ['Crome', 'IE', 'Firefox', 'Safari', 'Etc']
    },
    tooltip: {
        trigger: 'axis'
    },
};

const lineBarChart: ChartType = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 80,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    toolbox: {
        orient: 'center',
        left: 0,
        top: 20,
        feature: {
            dataView: { readOnly: false, title: "Data View" },
            magicType: { type: ['line', 'bar'], title: { line: "For line chart", bar: "For bar chart" } },
            restore: { title: "restore" },
            saveAsImage: { title: "Download Image" }
        }
    },
    color: ['#34c38f', '#556ee6', '#f46a6a'],
    legend: {
        data: ['Evaporation', 'Precipitation', 'Average Temperature'],
        textStyle: { color: '#8791af' }
    },
    xAxis: [
        {
            type: 'category',
            data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
            axisPointer: {
                type: 'shadow'
            },
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: 'Water volume',
            min: 0,
            max: 250,
            interval: 50,
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(166, 176, 207, 0.1)"
                }
            },
            axisLabel: {
                formatter: '{value} ml'
            }
        },
        {
            type: 'value',
            name: 'Temperature',
            min: 0,
            max: 25,
            interval: 5,
            axisLine: {
                lineStyle: {
                    color: '#8791af'
                },
            },
            splitLine: {
                lineStyle: {
                    color: "rgba(166, 176, 207, 0.1)"
                }
            },
            axisLabel: {
                formatter: '{value} Ã‚Â°C'
            }
        }
    ],
    series: [
        {
            name: 'Evaporation',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2]
        },
        {
            name: 'Precipitation',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2]
        },
        {
            name: 'Average Temperature',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4]
        }
    ]
};

const donughnutChart: ChartType = {
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)"
    },
    legend: {
        orient: 'vertical',
        x: 'left',
        data: ['Laptop', 'Tablet', 'Mobile', 'Others', 'Desktop'],
        textStyle: { color: '#8791af' }
    },
    color: ['#556ee6', '#f1b44c', '#f46a6a', '#50a5f1', '#34c38f'],
    series: [
        {
            name: 'Total sales',
            type: 'pie',
            radius: ['50%', '70%'],
            avoidLabelOverlap: false,
            normal: {
                show: false,
                position: 'center'
            },
            emphasis: {
                show: true,
                textStyle: {
                    fontSize: '30',
                    fontWeight: 'bold'
                }
            },
            labelLine: {
                show: false
            },
            data: [
                { value: 335, name: 'Laptop' },
                { value: 310, name: 'Tablet' },
                { value: 234, name: 'Mobile' },
                { value: 135, name: 'Others' },
                { value: 1548, name: 'Desktop' }
            ]
        }
    ]
};
var data = [
    [[28604, 77, 17096869, 'Australia', 1990], [31163, 77.4, 27662440, 'Canada', 1990], [1516, 68, 1154605773, 'China', 1990], [13670, 74.7, 10582082, 'Cuba', 1990], [28599, 75, 4986705, 'Finland', 1990], [29476, 77.1, 56943299, 'France', 1990], [31476, 75.4, 78958237, 'Germany', 1990], [28666, 78.1, 254830, 'Iceland', 1990], [1777, 57.7, 870601776, 'India', 1990], [29550, 79.1, 122249285, 'Japan', 1990], [2076, 67.9, 20194354, 'North Korea', 1990], [12087, 72, 42972254, 'South Korea', 1990], [24021, 75.4, 3397534, 'New Zealand', 1990], [43296, 76.8, 4240375, 'Norway', 1990], [10088, 70.8, 38195258, 'Poland', 1990], [19349, 69.6, 147568552, 'Russia', 1990], [10670, 67.3, 53994605, 'Turkey', 1990], [26424, 75.7, 57110117, 'United Kingdom', 1990], [37062, 75.4, 252847810, 'United States', 1990]],
    [[44056, 81.8, 23968973, 'Australia', 2015], [43294, 81.7, 35939927, 'Canada', 2015], [13334, 76.9, 1376048943, 'China', 2015], [21291, 78.5, 11389562, 'Cuba', 2015], [38923, 80.8, 5503457, 'Finland', 2015], [37599, 81.9, 64395345, 'France', 2015], [44053, 81.1, 80688545, 'Germany', 2015], [42182, 82.8, 329425, 'Iceland', 2015], [5903, 66.8, 1311050527, 'India', 2015], [36162, 83.5, 126573481, 'Japan', 2015], [1390, 71.4, 25155317, 'North Korea', 2015], [34644, 80.7, 50293439, 'South Korea', 2015], [34186, 80.6, 4528526, 'New Zealand', 2015], [64304, 81.6, 5210967, 'Norway', 2015], [24787, 77.3, 38611794, 'Poland', 2015], [23038, 73.13, 143456918, 'Russia', 2015], [19360, 76.5, 78665830, 'Turkey', 2015], [38225, 81.4, 64715810, 'United Kingdom', 2015], [53354, 79.1, 321773631, 'United States', 2015]]
];
const bubbleChart: ChartType = {
    // Setup grid
    grid: {
        zlevel: 0,
        x: 50,
        x2: 50,
        y: 30,
        y2: 30,
        borderWidth: 0,
        backgroundColor: 'rgba(0,0,0,0)',
        borderColor: 'rgba(0,0,0,0)',
    },
    legend: {
        right: 10,
        data: ['2018', '2019']
    },
    xAxis: {
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
    },
    yAxis: {
        axisLine: {
            lineStyle: {
                color: '#8791af'
            },
        },
        splitLine: {
            lineStyle: {
                type: 'dashed',
                color: "rgba(166, 176, 207, 0.1)"
            }
        },
        scale: true
    },
    series: [{
        name: '2018',
        data: data[0],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
            label: {
                show: true,
                formatter: function (param) {
                    return param.data[3];
                },
                position: 'top'
            }
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(85, 110, 230, 0.5)',
            shadowOffsetY: 5,
            color: '#556ee6'
        }
    }, {
        name: '2019',
        data: data[1],
        type: 'scatter',
        symbolSize: function (data) {
            return Math.sqrt(data[2]) / 5e2;
        },
        emphasis: {
            show: true,
            formatter: function (param) {
                return param.data[3];
            },
            position: 'top'
        },
        itemStyle: {
            shadowBlur: 10,
            shadowColor: 'rgba(52, 195, 143, 0.5)',
            shadowOffsetY: 5,
            color: '#f46a6a'
        }
    }],
    tooltip: {
        trigger: 'axis'
    },
}

const dataAxis = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T'];
const data1 = [220, 182, 191, 234, 290, 330, 310, 123, 442, 321, 90, 149, 210, 122, 133, 334, 198, 123, 125, 220];
const dataShadow = [];
const yMax = 500;

// tslint:disable-next-line: prefer-for-of
for (let i = 0; i < data1.length; i++) {
    dataShadow.push(yMax);
}
const gradientBarChart: ChartType = {
    xAxis: {
        data: dataAxis,
        axisLabel: {
            inside: true,
                color: '#fff'
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: false
        },
        z: 10
    },
    yAxis: {
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLabel: {
                color: '#999'
        }
    },
    dataZoom: [
        {
            type: 'inside'
        }
    ],
    tooltip: {
        trigger: 'axis'
    },
    series: [
        { // For shadow
            type: 'bar',
            itemStyle: {
                color: 'rgba(0,0,0,0.05)'
            },
            barGap: '-100%',
            barCategoryGap: '40%',
            data: dataShadow,
            animation: false
        },
        {
            type: 'bar',
            normal: {
                color: new graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#83bff6' },
                        { offset: 0.5, color: '#188df0' },
                        { offset: 1, color: '#188df0' }
                    ]
                )
            },
            emphasis: {
                color: new graphic.LinearGradient(
                    0, 0, 0, 1,
                    [
                        { offset: 0, color: '#2378f7' },
                        { offset: 0.7, color: '#2378f7' },
                        { offset: 1, color: '#83bff6' }
                    ]
                )
            },

            data: data1
        }
    ]
};

const gaugeChart: ChartType = {
    tooltip: {
        formatter: "{a} <br/>{b} : {c}%"
    },
    toolbox: {
        feature: {
            restore: { title: "Refresh" },
            saveAsImage: { title: "Download Image" }
        }
    },
    series: [
        {
            name: 'Business indicator',
            type: 'gauge',
            detail: { formatter: '{value}%' },
            axisLine: {
                lineStyle: {
                    color: [[0.2, '#34c38f'], [0.8, '#556ee6'], [1, '#f46a6a']],
                    width: 20
                }
            },
            data: [{ value: 50, name: 'Completion rate' }]
        }
    ]
}

export { lineChart, barChart, pieChart, customPieChart, gradientBarChart, lineBarChart, gaugeChart, donughnutChart, bubbleChart };
