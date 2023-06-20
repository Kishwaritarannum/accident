import React, { useState,useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import axios from 'axios';
import {toast} from 'react-toastify'

import {
    Card,
    CardHeader,
    Divider,
    Grid,
    CardContent,
    CardActions,
    Chip,
    IconButton,
    CardMedia,
    Typography,
    Button,
} from '@material-ui/core';

import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { gridSpacing } from '../../../../store/constant';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import DoneTwoToneIcon from '@material-ui/icons/DoneTwoTone';
import CloseTwoToneIcon from '@material-ui/icons/CloseTwoTone';

import Phone1 from './../../../../assets/images/widget/PHONE1.jpg';
import Phone2 from './../../../../assets/images/widget/PHONE2.jpg';
import Phone3 from './../../../../assets/images/widget/PHONE3.jpg';
import Phone4 from './../../../../assets/images/widget/PHONE4.jpg';

const useStyles = makeStyles({
    table: {
        minWidth: 250,
    },
    imgproduct: {
        width: '20px',
        height: 'auto',
    },
});

// function createData(cid, itemName, photo, location, quantity, date, status, statuscolor, verify) {
//     // return { cid,  itemName,photo, location, totalStock, quantity, date, stockIn, StockOut };
//     return { cid, itemName, photo, location, quantity, date, status, statuscolor, verify };
// }

// const rows = [
//     createData('#81412314', 'Item A', Phone1, '1/2', '10', '17-2-2017', '4', 'secondary'),
//     createData('#68457898', 'Item B', Phone2, '2/5', '16', '20-2-2017', '5', 'primary'),
//     createData('#45457898', 'Item C', Phone3, '5/3', '20', '17-2-2017', '6', 'secondary'),
//     createData('#62446232', 'Item D', Phone4, '8/45', '15', '25-4-2017', '6', 'primary'),
// ];

export default function LatestorderCard() {
    const classes = useStyles();
    const [val, setVal] = useState(true);
    const [data,setData] = useState([])
    // const [itemsToDelete, setItemsToDelete] = useState([]);

    // function handleDelete(itemId) {
    //   // Add the item ID to the list of items to be deleted
    //   setItemsToDelete([...itemsToDelete, itemId]);
    // }

    const handleDelete = (id) => {
        if(window.confirm("Are you sure that you want to delete this ?")){
            axios.delete(`http://localhost:5000/latestdata/delete/${id}`);
            toast.success("Item Deleted Successfully");
            setTimeout(()=> loadData(), 500);
        }
     };
    
    const loadData = () =>{
    fetch('http://localhost:5000/latestdata')
    .then((res)=>res.json())
    .then((data)=> setData(data))
    .catch((err)=>console.log(data))
}
 
useEffect (()=>{
    loadData()
},[])

    return (
        <Grid container spacing={gridSpacing}>
            <Grid item xs={12}>
           
                <Card>
                    <CardHeader
                        title={
                            <Typography component="div" className="card-header">
                                Latest Accident
                            </Typography>
                        }
                    />
                    <Divider />
                    <CardContent className="p-0">
                        <TableContainer>
                            <Table className={classes.table} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>No.</TableCell>
                                        <TableCell>Accident Type</TableCell>
                                        <TableCell>Accident Expence</TableCell>
                                        <TableCell>Date &amp; Time</TableCell>
                                        <TableCell>Human Factor</TableCell>
                                        <TableCell>Age/Gender</TableCell>
                                        <TableCell>Action</TableCell>
                                       
                                       
                                        
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {console.log(data)}
                                    {data.map((item, index) => (
                                        <TableRow key={index +1}>
                                            {/* <TableCell>{item.id}</TableCell> */}
                                            {/* <TableCell>{item.label}</TableCell> */}
                                            <TableCell>{1}</TableCell>
                                             <TableCell>{"overloading,distracted driving"}</TableCell>
                                             <TableCell>{"Rs 2000"}</TableCell>
                                            {/* <TableCell>
                                            <img src={`data:image/jpeg;base64,${item.img}`} alt="Detected Image" style={{ width: 150, height: 70 }}/>
                                               
                                            </TableCell> */}
                                            <TableCell>{"20/06/2023"}</TableCell>
                                            {/* <TableCell>{row.quantity}</TableCell> */}
                                            <TableCell>{"No helmet &amp; seat belts"}</TableCell>
                                            <TableCell>{"45/Male"}</TableCell>

                                            {/* <TableCell>
                                                <Chip color={item.statuscolor} label={item.status} size="small" />
                                            </TableCell> */}
                                            <TableCell>
                                                {/* <IconButton color="primary">
                                                    <EditOutlinedIcon />
                                                </IconButton> */}

                                                {/* <IconButton color="inherit" onClick={() => handleDelete(item.id)}>
                                                    <DeleteOutlineOutlinedIcon /> 
                                                </IconButton> */}
                                                
                                            </TableCell>
                                            <TableCell>
                                                {/* <IconButton
                                                    color="inherit"
                                                    onClick={() => {
                                                        data[index].verify = !data[index].verify;
                                                        setVal(!val);
                                                        data[index].verify = val;
                                                    }}
                                                >
                                                    {row.verify ? <DoneTwoToneIcon /> : <CloseTwoToneIcon />}
                                                </IconButton> */}
                                                {10}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </CardContent>
                    <CardActions className="f-right">
                        <a href="/widget/data">
                            <Button variant="text" size="small" color="primary">
                                View all Accidents
                            </Button>
                        </a>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    );
}
