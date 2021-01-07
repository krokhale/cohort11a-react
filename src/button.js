import React, {useState, useEffect} from 'react';

function Button(props) {
    // console.log(props);
    // props.someFunc
    return (
        <span style={{
            border: '1px solid #fff',
            color: '#fff',
            padding: (props.size=='large' ? '14px' : '10px'),
            margin: '10px',
            borderRadius: '10px',
            fontSize: (props.size=='large' ? '20px': "16px"),
            backgroundColor: 'red'}}
            // onClick={() => {
            //     props.someFunc(45);
            // }}
            // onClick={props.someFunc(45)}
            onClick={props.clickFunction}
        >{props.buttonText}</span>
    );
}

export default Button;
