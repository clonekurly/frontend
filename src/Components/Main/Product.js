import React from 'react';
import '../../Styles/main.scss'

const product = (props) => {
    // const {id, img_data, name, price, info} =props;
    return (
        <div className='prod_padding'>
            <img className="prod_img" margin = "10px"width="250px" height="315px" src={ props.data.img_url} width="100%" />
            <br/><br/>
            <h3 className='text1'>{props.data.name}</h3>
            <br/>
            <h3 className='text2'>{props.data.original_price}원</h3>
         
        </div>
    );
};

export default product;