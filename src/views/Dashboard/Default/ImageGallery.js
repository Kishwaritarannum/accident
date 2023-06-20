import React, { useState, useEffect } from 'react';
import {} from 'react-router-dom';
import '../../../assets/scss/App.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import ImageList from '@mui/material/ImageList';

import ImageListItem from '@mui/material/ImageListItem';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';


import { FaAngleDoubleLeft, FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import '../../../assets/scss/Dashboard.css';
window.Buffer = window.Buffer || require('buffer').Buffer;

const ImageGallery = () => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState('');
    const[isOpen, setIsOpen] = useState(false);
    const[photoIndex, setPhotoIndex] = useState(0);


    const openLightbox = (index) => {
        setPhotoIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () =>{
        setIsOpen(false);
    };
    useEffect(() => {
        loadData();
    }, []);

    const loadData = async () => {
        const response = await axios.get('http://localhost:5000/image');
        setData(response.data);
    };

    const decodeBase64 = (base64data) => {
        return Buffer.from(base64data, 'base64').toString();
    };

    useEffect(() => {
        loadData();
    }, []);

    const deleteContact = (id) => {
        if (window.confirm('Are you sure that you want to delete this ?')) {
            axios.delete(`http://localhost:5000/image/remove/${id}`);
            toast.success('Contact Deleted Successfully');
            setTimeout(() => loadData(), 500);
        }
    };

    const handleSearch = async (e) => {
        e.preventDefault();
        return await axios
            .get(`http://localhost:5000/image/get/${value}`)
            .then((result) => {
                setData(result.data);
                setValue('');
            })
            .catch((err) => console.log(err));
    };

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const response = await fetch(`http://localhost:5000/search?username=${searchTerm}`);
        const data = await response.json();
        // Use the search results from the API
    };

    return (
        <>

        <a href="http://127.0.0.1:4000/">Button</a>
            <br />
            <form style={{ width: '400px', marginLeft: '80px' }} onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Search By Name..."
                    value={searchTerm}
                    onChange={handleChange}
                    // onChange={(e) => setValue(e.target.value)}
                />
            </form>
            <br />
            <div>
                <h2 style={{ marginLeft: 20, marginTop: 20 }}>All Objects</h2>
                <a href="/dashboard">
                    <button className="btn btn-contact" style={{ marginLeft: 1000 }}>
                        Add Objects
                    </button>
                </a>
                <table className="styled-table">
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>No.</th>
                            <th style={{ textAlign: 'center' }}>Object Name</th>
                            <th style={{ textAlign: 'center' }}>Serial No.</th>
                            <th style={{ textAlign: 'center' }}>Images</th>
                            <th style={{ textAlign: 'center' }}>Shelf No.</th>
                            <th style={{ textAlign: 'center' }}>New/Old</th>
                            <th style={{ textAlign: 'center' }}>Action</th>
                            
                        </tr>
                        <br />
                    </thead>
                    <tbody>
                        {data.map((item, index) => {
                            return (
                                <tr key={item.id}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{item.username}</td>
                                    <td>{item.number}</td>
                                    {/* <td style={{height:10,width:10}}><img src={item.url}/></td> */}

                                    <ImageList sx={{ width: 550, height: 200 }} onClick ={() => openLightbox(index)}>
                                        <ImageListItem sx={{ width: 250, height: 70 }} key={item.img} onClick ={() => openLightbox(index)}>
                                            <br />
                                            <img src={item.url} loading="lazy" />
                                            <br />
                                        </ImageListItem>
                                    </ImageList>
                                    <td>{item.shelfno}</td>
                                    <td>{item.newold}</td>
                                    <td>
                                        <a href={`/updatein/${item.id}`}>
                                            <button className="btn btn-edit">Edit</button>
                                        </a>
                                        <button className="btn btn-delete" onClick={() => deleteContact(item.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            <br />
            <div class="pagination">
                <div>
                    <FaAngleDoubleLeft />
                </div>
                <div>
                    <FaAngleLeft />
                </div>
                <div>1</div>
                <div>2</div>
                <div>
                    <FaAngleRight />
                </div>
                <div>
                    <FaAngleDoubleRight />
                </div>
            </div>
        </>
    );
};

export default ImageGallery;
