
const chartData = {
    
    type: 'bar',
    height: 115,
    options: {
        chart: {
            sparkline: {
                enabled: true,
            },
        },
        // dataLabels: {
        //     enabled: true,
        // },
        colors: ['#fff'],

        // xaxis: {
        //     categories: ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'],
        // },
        tooltip: {
            theme: 'dark',
            fixed: {
                enabled: false,
            },
            // x: {
            //     show: false,
            // },
            y: {
                title: {
                    formatter: (seriesName) => 'Sales/Order Per Day',
                },
            },
            marker: {
                show: false,
            },
        },
    },
    series: [
        // {
        //     name: 'series1',
        //     data: [55, 35, 75, 25, 90, 50],
        // },
        {
            name: 'added to inventory',
            
            data: [2722, 2080, 2063, 1972, 1516, 2722, 2080, 2063, 1972, 1516, 2722, 2080, 2063, 1972, 1516, 2722, 2080, 2063, 1972,2080],
        },
    ],
};



export default chartData;
