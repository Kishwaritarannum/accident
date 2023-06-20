import value from '../../../../assets/scss/_themes-vars.scss';


export default { 
  
    height: 228,
    type: 'pie',
    options: {
        dataLabels: {
            enabled: false,
        },
        labels: ['Total Items', 'Incoming', 'Outgoing'],
        legend: {
            show: true,
            position: 'bottom',
            fontFamily: 'inherit',
            labels: {
                colors: 'inherit',
            },
        },
        itemMargin: {
            horizontal: 10,
            vertical: 10,
        },
        colors: [value.error, value.primary, value.info],
    },
    series: [74,56,67]
    
    
};



