import { FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Heading = ({filterPages,setFilterPages}) => {


  
  return (
    <div>
         <div className="heading">
      <Typography variant="h6">A List of books detail</Typography>
        <div className="heading-right">

        <Link to="/add" style={{textDecoration:"none"}}>
          <button className="addbtn">ADD <span ><AiOutlinePlus/></span></button>
        </Link>
        <FormControl>

        <InputLabel id="demo-simple-select-label">ALL pages</InputLabel>
        <Select
        value={filterPages}
        onChange={(e) => setFilterPages(e.target.value)}
        style={{width:"150px", borderColor:"gray"}}
        label="All pages"
        MenuProps={{
          PaperProps: {
            style: {
              borderColor: "black", 
            },
          },
        }}
        >
       
        <MenuItem value="">All Pages</MenuItem>
        <MenuItem value="<1000"> <label>
          <input
            type="radio"
            name="pageFilter"
            value="<1000"
            checked={filterPages === "<1000"}
            onChange={() => setFilterPages("<1000")}
            />
        {"<1000"}
        </label></MenuItem>
        <MenuItem value=">1000">  <label>
          <input
            type="radio"
            name="pageFilter"
            value=">1000"
            checked={filterPages === ">1000"}
            onChange={() => setFilterPages(">1000")}
          />
        {">1000"}
        </label></MenuItem>
      </Select>
      </FormControl>

      


            </div>
      </div>
    </div>
  )
}

export default Heading