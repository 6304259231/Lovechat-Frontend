import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Network.css'

function Chatrooms() {
    let [users, setUsers] = useState([])
    let navigate = useNavigate();
    function getUsers() {
        axios.get('https://lovechat-api.onrender.com/mynetwork', {
            headers: {
                'Authorization': localStorage.getItem('jwt')
            }
        }).then((response) => {
            console.log(response.data)
            setUsers(response.data)
        })
    }
    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className='network-section' style={{ margin: '25px auto', width: '85%', border: '2px solid black', boxShadow: '4px 4px 6px black' }}>
            <center style={{ fontFamily: 'monospace', fontSize: '32px', color: '#ffffff', fontWeight: '400', margin: '20px' }}>Network</center>
            {
                users && users.map((user) => {
                    let { username, location, bio, avatar, _id } = user;
                    return (
                        <div className="card current-user" style={{ width: "40%", margin: '20px 40px', boxShadow: '4px 4px 5px black', cursor: 'pointer', display: 'inline-block' }} key={_id}>
                            <div className="card-body">
                                <div className='user-avatar-section mt-0'>
                                    <img src={avatar} alt="avatar" style={{ borderRadius: '3px dotted red' }} />
                                </div>
                                <h5 className="card-title" style={{ display: 'inline-block', marginTop: '15px', fontFamily: 'monospace', fontSize: '18px', marginLeft: '11px' }}>{username}</h5>
                                <h6 className="card-title" style={{ display: 'block', marginTop: '15px', fontFamily: 'monospace', fontSize: '16px', marginLeft: '11px' }}>ID : {_id}</h6>
                                <h6 className="card-title" style={{ display: 'block', marginTop: '15px', fontFamily: 'monospace', fontSize: '16px', marginLeft: '11px' }}>{bio}</h6>
                                <p className="card-text mt-3">
                                    <span> <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                                    </svg></span> <span className='text-muted'>{location}</span>
                                </p>
                                <button type="button" class="btn btn-outline-primary" style={{ display: 'inline-block', marginLeft: '10px' }} onClick={() => {
                                    navigate('/mychat')
                                }}>Connect</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Chatrooms