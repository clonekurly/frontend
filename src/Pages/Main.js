import React, { useState } from 'react';
import '../Styles/main.scss';
import main_img1 from '../Image/main_img1.png';
import styled from "styled-components";
import Product from '../Components/Main/Product';
import Box from '@mui/material/Box';
import Main_sampleData from './Main_sampleData';
// import Paper from '@mui/material/Paper';

const Main = () => {

  let [data,setData]=useState([...Main_sampleData]);

  const [card,setCard]=useState([1,2,3,4]);

  

  const Grid = styled.div`
    text-align:center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  `;
  


  return (
    <div>     
      <img src={main_img1} style={{width:'100%'}}></img>
      <br/><br/><br/><br/>
      <h2 className='main_1'>이 상품 어때요?</h2>
      <br/><br/><br/><br/>
      
      <Grid>
      {
        data.map(function (data,i) {
          return(
            <Product key={i} data={data} />
          )  
        })
      }
      </Grid>
    
          


      </div>
  );
};

export default Main;