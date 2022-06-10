import React from "react";
import { AppBar, Tab, Tabs, Toolbar } from '@mui/material';
import { FaBookOpen } from 'react-icons/fa'
import { useState } from "react";
import { Link, NavLink } from 'react-router-dom';



export default function Header () {

  const [value, set_value] = useState();



  return (
    <div>
      <AppBar position="sticky" sx={{background: '#180022'}}>
        <Toolbar>
          <Link to='/'> <h1 style={{color: 'white'}}> <FaBookOpen /> </h1> </Link>
          <Tabs 
            sx={{
              marginLeft: 'auto'
            }}
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={(e, val) => set_value(val)}>
            <Tab LinkComponent={NavLink} to="/add" label='Add books' />
            <Tab LinkComponent={NavLink} to="/books" label='Books' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  )
}