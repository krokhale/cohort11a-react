import React, {useState, useEffect} from 'react';
import Button from "./button";

function Calculator(props) {

    const [numberOne, setNumberOne] = useState();
    const [numberTwo, setNumberTwo] = useState();

    const add = () => {
        console.log('add function was called!')
        console.log(numberOne)
        console.log(numberTwo);
        props.onResultUpdate(parseInt(numberOne) + parseInt(numberTwo));
    };

    const multiply = () => {
        console.log('multiply function was called!')
        props.onResultUpdate(parseInt(numberOne) * parseInt(numberTwo));
    };

    const divide = () => {
        console.log('divide function was called!')
        props.onResultUpdate(parseInt(numberOne) / parseInt(numberTwo));
    };

    const subtract = () => {
        console.log('subtract function was called!')
        props.onResultUpdate(parseInt(numberOne) - parseInt(numberTwo));
    };

    return (
        <div className={'text-gray-600'}>

            <input className={'border'} onChange={(event) => {
                setNumberOne(event.currentTarget.value)
            }}/>

            <input className={'border'} onChange={(event) => {
                setNumberTwo(event.currentTarget.value)
            }}/>

            {/*let obj = {firstName: 'John', lastName: 'Doe'}*/}
            {/*console.log(obj.firstName)*/}
            {/*let props = {buttonText: 'Add', clickFunction: add}*/}
            {/*props.buttonText*/}
            {/*props.clickFunction()*/}
            {/*props.add()*/}



            <Button buttonText={'Add'} clickFunction={add} />
            <Button buttonText={'Subtract'} clickFunction={subtract} />
            <Button buttonText={'Divide'} clickFunction={divide} />
            <Button buttonText={'Multiply'} clickFunction={multiply} />
        </div>
    );
}

export default Calculator;
