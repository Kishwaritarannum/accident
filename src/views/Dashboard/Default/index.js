import React from "react";
import moment from 'moment';
import {
  makeStyles,
  Grid,
  Card,
  CardHeader,
  CardContent,
  Hidden,
  Typography,
  Divider,
  LinearProgress,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import { useState, useEffect } from "react";
import axios from "axios";
import value from '../../../assets/scss/_themes-vars.scss';

import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import TrendingDownIcon from "@material-ui/icons/TrendingDown";
// import MonetizationOnTwoTone from '@material-ui/icons/MonetizationOnTwoTone';
import DvrIconTwoTone from "@material-ui/icons/DvrTwoTone";
import DescriptionTwoTone from "@material-ui/icons/DescriptionTwoTone";
// import ThumbUpAltTwoTone from '@material-ui/icons/ThumbUpAltTwoTone';
import IndeterminateCheckBoxTwoToneIcon from "@material-ui/icons/IndeterminateCheckBoxTwoTone";
import CalendarTodayTwoTone from "@material-ui/icons/CalendarTodayTwoTone";

import SalesLineCard from "./SalesLineCard";
import SalesLineCardData from "./chart/sale-chart-1";

import RevenuChartCard from "./RevenuChartCard";
import RevenuChartCardData from "./chart/revenu-chart";

import ReportCard from "./ReportCard";
import LatestorderCard from "./LatestorderCard";

import { gridSpacing } from "./../../../store/constant";

const useStyles = makeStyles((theme) => ({
  arrowicon: {
    "& svg": {
      width: "20px",
      height: "20px",
      verticalAlign: "top",
    },
  },
  flatcardbody: {
    padding: "0px !important",
    "& svg": {
      width: "40px",
      height: "40px",
    },
  },
  flatcardblock: {
    padding: "25px 25px",
    borderLeft: "1px solid" + theme.palette.background.default,
    [theme.breakpoints.down("xs")]: {
      borderLeft: "none",
      borderBottom: "10px solid" + theme.palette.background.default,
    },
    [theme.breakpoints.down("sm")]: {
      borderBottom: "10px solid" + theme.palette.background.default,
    },
  },
  textsuccess: {
    color: theme.palette.success.main,
  },
  texterror: {
    color: theme.palette.error.main,
  },
}));

const Default = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

 
//   const [totalItems, setTotalItems] = useState();
//   const [instock, setInStock] = useState();
//   const [count, setCount] = useState(0);
//   const [count1, setCount1] = useState(0);
//   const [counts, setCounts] = useState(0);
//   const [count2, setCount2] = useState([]);
//   const [count4, setCount4] = useState([]);
//   const [barData, setbarData] = useState([]);
 
useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(timer); // Clean up the timer on component unmount
    };
  }, []);
 
//   useEffect(() => {
//       fetch('http://localhost:5000/outofstock')
//           .then((res) => res.json())
//           .then((data) => {
//               setCounts(data[0].total_out_of_stock);
//           });
//       fetch('http://localhost:5000/count')
//           .then((res) => res.json())
//           .then((data) => {
//               setCount(data[0].count);
//           });
//       fetch('http://localhost:5000/data/count')
//           .then((res) => res.json())
//           .then((data) => {
//               setCount1(data.count1);
//           });
//           fetch('http://localhost:5000/barData')
//           .then((res) => res.json())
//           .then((data) => {
//               setbarData(data);
//           });
     
//      fetch('http://localhost:5000/daily/count')
//           .then(response => response.json())
//           .then(dataArray => setCount2(dataArray))
//           .catch(error => console.log(error));
          

//       //fetchTest();
//   }, []);

  

  return (
    <><br/><br/><br/>
     <div style={{marginLeft:350}}>
      <h4>{currentDateTime.toString()}</h4>
    </div>
    <Grid container spacing={gridSpacing} style={{ paddingLeft: "2rem" }}>
        
        {/* {console.log(count2)} */}
      <Grid item xs={9}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "30px" }}>
            <ReportCard
              primary={200}
            //   primary={count}
              secondary="Yearly Accident Records"
              color={theme.palette.primary.main}
              // footerData="10% changes on profit"
              iconPrimary={DvrIconTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          {/* <Grid item lg={3} sm={6} xs={12}>
                        <ReportCard
                            primary={145}
                            secondary="Number of categories"
                            color={theme.palette.primary.main}
                            // footerData="28% task performance"
                            iconPrimary={CalendarTodayTwoTone}
                            iconFooter={TrendingDownIcon}
                        />
                    </Grid> */}
          <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "30px" }}>
            <ReportCard
             primary={50}
            //   primary={count1}
              secondary="Monthly Accident Records"
              color={theme.palette.success.main}
              // footerData="10k daily views"
              iconPrimary={DescriptionTwoTone}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "30px" }}>
            <ReportCard
             primary={10}
            //   primary={counts}
              secondary="Today's Accident Records"
              color={theme.palette.primary.main}
              // footerData="1k download in App store"
              iconPrimary={IndeterminateCheckBoxTwoToneIcon}
              iconFooter={TrendingUpIcon}
            />
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={9}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={14} xs={12}>
            <Grid container spacing={gridSpacing}>
              <Grid item xs={12} sm={6}>
                <Grid container spacing={gridSpacing} direction="column">
                  <Grid item xs={12}>
                    {/* bar chart to go here */}
                    <CardHeader style={{background:"white"}}
                     title={
                    <Typography t="div" className="card-header">
                     Monthly Accident Records
                    </Typography>
                }
            />
                    <SalesLineCard
                     chartData = {{
                        type: 'line',
                        height: 155,
                        options: {
                            chart: {
                                sparkline: {
                                    enabled: true,
                                },
                            },
                            // labels:["jan","Feb","march","April"],
                            xaxis: {
                                type: 'categories',
                                // categories: barData.date,
                                axisBorder: {
                                    color: '#c90076' // Set the desired color for the x-axis line
                                },

                                labels: {
                                    show: true,
                                    style: {
                                        colors: '#a20076' // Set the desired color for the x-axis labels
                                    }
                                },

                                title: {
                                    text: 'Date',
                                    style: {
                                        color: '#a20076',
                                        fontSize: '12px',
                                        fontFamily: 'Helvetica, Arial, sans-serif',
                                        fontWeight: 400,
                                        cssClass: 'apexcharts-xaxis-title',
                                    },
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
                                        formatter: (seriesName) => 'Accidents Occur per Months',
                                    },
                                },
                                marker: {
                                    show: true,
                                },
                            },
                        },
                        series: [
                            // {
                            //     name: 'series1',
                                //data: [55, 35, 75, 25, 90, 50],
                            // },
                            {
                                // name: 'added to inventory',
                                data: [55, 35, 75, 25, 90, 50,55, 35, 75, 25, 90, 50]
                                
                                // data: barData.countdate
                            
                            
                            },
                        ],
                     
                    }}
                    />
                    
            </Grid>

                       
                      {/* chartData={SalesLineCardData}
                       title="Sales Per Day"
                       percentage="3%"
                       icon={<TrendingDownIcon />}
                       footerData={[ 
                         {
                    //       value: "2272 +",
                    //       label: "Max ",
                    //     },
                    //     {
                    //       value: "1516 +",
                    //       label: "Least ",
                    //     },
                    //   ]}
                
                
                  {/* <Hidden only="sm">
                                        <Grid item xs={12}>
                                            <Card>
                                                <CardContent className={classes.flatcardbody}>
                                                    <Grid container alignItems="center" spacing={0}>
                                                        <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                                                            <Grid container alignItems="center" spacing={1}>
                                                                <Grid item>
                                                                    <Typography variant="subtitle2" align="left">
                                                                        REALTY
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item sm zeroMinWidth>
                                                                    <Typography variant="h5" align="right">
                                                                        -0.99
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                        <Grid item sm={6} xs={12} className={classes.flatcardblock}>
                                                            <Grid container alignItems="center" spacing={1}>
                                                                <Grid item>
                                                                    <Typography variant="subtitle2" align="left">
                                                                        INFRA
                                                                    </Typography>
                                                                </Grid>
                                                                <Grid item sm zeroMinWidth>
                                                                    <Typography variant="h5" className={classes.textsuccess} align="right">
                                                                        -7.66
                                                                    </Typography>
                                                                </Grid>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </CardContent>
                                            </Card>
                                        </Grid>
                                    </Hidden> */}
                </Grid>
              </Grid>
              <Grid item xs={12} sm={6}>
              <RevenuChartCard
                                        chartData={{
                                            height: 228,
                                            type: 'pie',
                                            options: {
                                                dataLabels: {
                                                    enabled: false,
                                                },
                                                labels: ['Yearly', 'Monthly', 'Todays'],
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
                                            // series: [count, count1, counts],
                                            series: [200,50,10],
                                        }}
                                    />
              </Grid>
            </Grid>
          </Grid>
          {/* Progress report tables here */}
          {/* <Grid item lg={4} xs={12}>
                        <Card>
                            <CardHeader
                                title={
                                    <Typography component="div" className="card-header">
                                        Traffic Sources
                                    </Typography>
                                }
                            />
                            <Divider />
                            <CardContent>
                                <Grid container spacing={gridSpacing}>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Direct</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    80%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={80} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Social</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    50%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={50} color="secondary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Referral</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    20%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={20} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Bounce</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    60%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={60} color="secondary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Grid container alignItems="center" spacing={1}>
                                            <Grid item sm zeroMinWidth>
                                                <Typography variant="body2">Internet</Typography>
                                            </Grid>
                                            <Grid item>
                                                <Typography variant="body2" align="right">
                                                    40%
                                                </Typography>
                                            </Grid>
                                            <Grid item xs={12}>
                                                <LinearProgress variant="determinate" value={40} color="primary" />
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </CardContent>
                        </Card>
                    </Grid> */}
        </Grid>
        <Grid container spacing={gridSpacing} style={{ paddingLeft: "2rem" }}>
        {/* {console.log(count2)} */}
      <Grid item xs={12}>
        <Grid container spacing={gridSpacing}>
          <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "75px" }}>
            {/* <ReportCard
              primary={50}
            //   primary={count}
              secondary="Total Items"
              color={theme.palette.primary.main}
              // footerData="10% changes on profit"
              iconPrimary={DvrIconTwoTone}
              iconFooter={TrendingUpIcon} */}
               <CardHeader style={{background:"white"}}
                     title={
                    <Typography t="div" className="card-header">
                     Accident Time Interval
                    </Typography>
                }
            />
              <SalesLineCard
                     chartData = {{
                        type: 'bar',
                        height: 50,
                        options: {
                            chart: {
                                sparkline: {
                                    enabled: true,
                                },
                            },
                            xaxis: {
                                 type: 'categories',
                                //  categories: barData.date,
                                axisBorder: {
                                    color: '#c90076' // Set the desired color for the x-axis line
                                },

                                labels: {
                                    show: true,
                                    style: {
                                        colors: '#a20076' // Set the desired color for the x-axis labels
                                    }
                                },

                                // title: {
                                //     text: 'Date',
                                //     style: {
                                //         color: '#a20076',
                                //         fontSize: '12px',
                                //         fontFamily: 'Helvetica, Arial, sans-serif',
                                //         fontWeight: 400,
                                //         cssClass: 'apexcharts-xaxis-title',
                                //     },
                                // },
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
                                // y: {
                                //     title: {
                                //         formatter: (seriesName) => 'Incoming Stock Per Day',
                                //     },
                                // },
                                // marker: {
                                //     show: true,
                                // },
                            },
                        },
                        series: [
                            // {
                            //     name: 'series1',
                                //data: [55, 35, 75, 25, 90, 50],
                            // },
                            {
                                name: 'added to inventory',
                                data: [55, 35, 75, 25, 90,55, 35, 75, 25, 90,]
                                
                                // data: barData.countdate
                            
                            
                            },
                        ],
                     
                    }}
                    />
                    </Grid>
          {/* <Grid item lg={3} sm={6} xs={12}>
                        <ReportCard
                            primary={145}
                            secondary="Number of categories"
                            color={theme.palette.primary.main}
                            // footerData="28% task performance"
                            iconPrimary={CalendarTodayTwoTone}
                            iconFooter={TrendingDownIcon}
                        />
                    </Grid> */}
          <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "75px" }}>
          <CardHeader style={{background:"white"}}
                     title={
                    <Typography t="div" className="card-header">
                     Total Accident Expense
                    </Typography>
                }
            />
          <SalesLineCard
                     chartData = {{
                        type: 'bar',
                        height: 50,
                        options: {
                            chart: {
                                sparkline: {
                                    enabled: true,
                                },
                            },
                            xaxis: {
                                // type: 'categories',
                                // categories: barData.date,
                                axisBorder: {
                                    color: '#c90076' // Set the desired color for the x-axis line
                                },

                                labels: {
                                    show: true,
                                    style: {
                                        colors: '#a20076' // Set the desired color for the x-axis labels
                                    }
                                },

                                // title: {
                                //     text: 'Date',
                                //     style: {
                                //         color: '#a20076',
                                //         fontSize: '12px',
                                //         fontFamily: 'Helvetica, Arial, sans-serif',
                                //         fontWeight: 400,
                                //         cssClass: 'apexcharts-xaxis-title',
                                //     },
                                // },
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
                                // y: {
                                //     title: {
                                //         formatter: (seriesName) => 'Incoming Stock Per Day',
                                //     },
                                // },
                                // marker: {
                                //     show: true,
                                // },
                            },
                        },
                        series: [
                            // {
                            //     name: 'series1',
                                //data: [55, 35, 75, 25, 90, 50],
                            // },
                            {
                                name: 'added to inventory',
                                data: [55, 35, 75, 25, 90,55, 35, 75, 25, 90,]
                                
                                // data: barData.countdate
                            
                            
                            },
                        ],
                     
                    }}
                    />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "75px" }}>
          <CardHeader style={{background:"white"}}
                     title={
                    <Typography t="div" className="card-header">
                     Accident Road Category
                    </Typography>
                }
            />

          <SalesLineCard
                     chartData = {{
                        type: 'bar',
                        height: 50,
                        options: {
                            chart: {
                                sparkline: {
                                    enabled: true,
                                },
                            },
                            xaxis: {
                                // type: 'categories',
                                // categories: barData.date,
                                axisBorder: {
                                    color: '#c90076' // Set the desired color for the x-axis line
                                },

                                labels: {
                                    show: true,
                                    style: {
                                        colors: '#a20076' // Set the desired color for the x-axis labels
                                    }
                                },

                                // title: {
                                //     text: 'Date',
                                //     style: {
                                //         color: '#a20076',
                                //         fontSize: '12px',
                                //         fontFamily: 'Helvetica, Arial, sans-serif',
                                //         fontWeight: 400,
                                //         cssClass: 'apexcharts-xaxis-title',
                                //     },
                                // },
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
                                // y: {
                                //     title: {
                                //         formatter: (seriesName) => 'Incoming Stock Per Day',
                                //     },
                                // },
                                // marker: {
                                //     show: true,
                                // },
                            },
                        },
                        series: [
                            // {
                            //     name: 'series1',
                                //data: [55, 35, 75, 25, 90, 50],
                            // },
                            {
                                name: 'added to inventory',
                                data: [55, 35, 75, 25, 90,55, 35, 75, 25, 90,]
                                
                                // data: barData.countdate
                            
                            
                            },
                        ],
                     
                    }}
                    />
          </Grid>
          <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "75px" }}>
          <CardHeader style={{background:"white"}}
                     title={
                    <Typography t="div" className="card-header">
                     Accident(Type of Vehicles)
                    </Typography>
                }
            />
          <SalesLineCard
                     chartData = {{
                        type: 'bar',
                        height: 50,
                        options: {
                            chart: {
                                sparkline: {
                                    enabled: true,
                                },
                            },
                            xaxis: {
                                // type: 'categories',
                                // categories: barData.date,
                                axisBorder: {
                                    color: '#c90076' // Set the desired color for the x-axis line
                                },

                                labels: {
                                    show: true,
                                    style: {
                                        colors: '#a20076' // Set the desired color for the x-axis labels
                                    }
                                },

                                // title: {
                                //     text: 'Date',
                                //     style: {
                                //         color: '#a20076',
                                //         fontSize: '12px',
                                //         fontFamily: 'Helvetica, Arial, sans-serif',
                                //         fontWeight: 400,
                                //         cssClass: 'apexcharts-xaxis-title',
                                //     },
                                // },
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
                                // y: {
                                //     title: {
                                //         formatter: (seriesName) => 'Incoming Stock Per Day',
                                //     },
                                // },
                                // marker: {
                                //     show: true,
                                // },
                            },
                        },
                        series: [
                            // {
                            //     name: 'series1',
                                //data: [55, 35, 75, 25, 90, 50],
                            // },
                            {
                                name: 'added to inventory',
                                data: [55, 35, 75, 25, 90,55, 35, 75, 25, 90,]
                                
                                // data: barData.countdate
                            
                            
                            },
                        ],
                     
                    }}
                    />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "75px" }}>
                    <CardHeader style={{background:"white"}}
                     title={
                    <Typography t="div" className="card-header">
                     Accident(Human Factor)
                    </Typography>
                }
            />
                   <SalesLineCard
                     chartData = {{
                        type: 'bar',
                        height: 50,
                        options: {
                            chart: {
                                sparkline: {
                                    enabled: true,
                                },
                            },
                            xaxis: {
                                // type: 'categories',
                                // categories: barData.date,
                                axisBorder: {
                                    color: '#c90076' // Set the desired color for the x-axis line
                                },

                                labels: {
                                    show: true,
                                    style: {
                                        colors: '#a20076' // Set the desired color for the x-axis labels
                                    }
                                },

                                // title: {
                                //     text: 'Date',
                                //     style: {
                                //         color: '#a20076',
                                //         fontSize: '12px',
                                //         fontFamily: 'Helvetica, Arial, sans-serif',
                                //         fontWeight: 400,
                                //         cssClass: 'apexcharts-xaxis-title',
                                //     },
                                // },
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
                                // y: {
                                //     title: {
                                //         formatter: (seriesName) => 'Incoming Stock Per Day',
                                //     },
                                // },
                                // marker: {
                                //     show: true,
                                // },
                            },
                        },
                        series: [
                            // {
                            //     name: 'series1',
                                //data: [55, 35, 75, 25, 90, 50],
                            // },
                            {
                                name: 'added to inventory',
                                data: [55, 35, 75, 25, 90,55, 35, 75, 25, 90,]
                                
                                // data: barData.countdate
                            
                            
                            },
                        ],
                     
                    }}
                    />
                    </Grid>
                    <Grid item lg={4} sm={6} xs={12} style={{ marginTop: "75px" }}>
                    <CardHeader style={{background:"white"}}
                     title={
                    <Typography t="div" className="card-header">
                     Accident(Type of Collision)
                    </Typography>
                }
            />
                   <SalesLineCard
                     chartData = {{
                        type: 'bar',
                        height: 50,
                        options: {
                            chart: {
                                sparkline: {
                                    enabled: true,
                                },
                            },
                            xaxis: {
                                // type: 'categories',
                                // categories: barData.date,
                                axisBorder: {
                                    color: '#c90076' // Set the desired color for the x-axis line
                                },

                                labels: {
                                    show: true,
                                    style: {
                                        colors: '#a20076' // Set the desired color for the x-axis labels
                                    }
                                },

                                // title: {
                                //     text: 'Date',
                                //     style: {
                                //         color: '#a20076',
                                //         fontSize: '12px',
                                //         fontFamily: 'Helvetica, Arial, sans-serif',
                                //         fontWeight: 400,
                                //         cssClass: 'apexcharts-xaxis-title',
                                //     },
                                // },
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
                                // y: {
                                //     title: {
                                //         formatter: (seriesName) => 'Incoming Stock Per Day',
                                //     },
                                // },
                                // marker: {
                                //     show: true,
                                // },
                            },
                        },
                        series: [
                            // {
                            //     name: 'series1',
                                //data: [55, 35, 75, 25, 90, 50],
                            // },
                            {
                                name: 'added to inventory',
                                data: [55, 35, 75, 25, 90,55, 35, 75, 25, 90,]
                                
                                // data: barData.countdate
                            
                            
                            },
                        ],
                     
                    }}
                    />
                    </Grid>
        </Grid>
      </Grid>
      </Grid>
      </Grid>
      
      <Grid item xs={10}>
        <LatestorderCard title="Latest Accidents" />
      </Grid>
    </Grid>
    </>
  );
};

export default Default;
