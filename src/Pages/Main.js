import React, { useState ,useEffect} from 'react';
import '../Styles/main.scss';
import main_img1 from '../Image/main_img1.png';
import styled from "styled-components";
import Product from '../Components/Main/Product';
import Box from '@mui/material/Box';
import Main_sampleData from './Main_sampleData';
import axios from 'axios';
// import Paper from '@mui/material/Paper';

const Main = () => {

  const URL = '/goods/';

  let [data,setData]=useState([...Main_sampleData]);

  const [goods, setGoods] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchGoods = async () => {
    try{
      setError(null);
      setGoods(null);
      setLoading(true);

      var rand_arr = [];

      for(var i=0;i<4;i++){
        rand_arr[i] = Math.floor(Math.random());
      }

      for(var i=0;i<4;i++){
        var response = await axios.get(URL+rand_arr[i]);
        var goods_res = response.data;
        setGoods(goods.concat(goods_res));
      }

    }catch(e){
      setError(e);
    }
    setLoading(false);
  }

  useEffect(()=>{
    fetchGoods();
  },[]);

  if(loading) return <div>loading...</div>;
  if(error) return <div>Error...</div>;
  if(!goods) return null;


  const Grid = styled.div`
    text-align:center;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin-left: 100px;
    margin-right: 100px;
  `;
  
  return (
    <div>     
      <img src={main_img1} style={{width:'100%'}}></img>
      <br/><br/><br/><br/>
      <h2 className='main_1'>이 상품 어때요?</h2>
      <br/><br/><br/>
      
      <Grid>
      {
        goods.map(function (data,i) {
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