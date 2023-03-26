import React from 'react';
import { Link } from 'react-router-dom';
import SearchAppointment from './SearchAppointment';

function Home() {

     return (<div className='container'>
        <h1>OnlineSalonService</h1>

        <div>
            <SearchAppointment/>
        </div>

        <div>
            <Link to="/appointment/all">View All Appointments</Link>
        </div>
        <div>
            <Link to="/appointment/add">Add New Appointment</Link>
        </div>
        
        
    </div>)
}

export default Home;