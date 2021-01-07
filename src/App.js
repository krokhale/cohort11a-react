import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from 'react';
import TopBar from "./top-bar";
import MainContent from "./main-content";
import SideBar from "./side-bar";
import Button from "./button";
import ToDoListItem from "./to-do-list-item";
import 'antd/dist/antd.css';

// import { DatePicker, List, Typography, Divider, Input, Button, Popconfirm, message } from 'antd';
import { DatePicker, List, Typography, Divider, Input, Popconfirm, message } from 'antd';
import Calculator from "./calculator";


const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
];


// Child components
// communication between parent and child components

// Objects and classes and instances
// Animal
// cat
// dog
//
// Cat < Animal
// Dog < Animal

// class App extends React.Component {
//
//     constructor(props){
//         super(props);
//         this.state = {
//             counter: 0,
//             secondsCounter: 0
//         };
//     }
//
//
//     clickMe = () => {
//         // console.log('i was clicked!');
//         // alert('clicked');
//         let currentCounterValue = this.state.counter;
//         let updatedValue = currentCounterValue + 1;
//         this.setState({counter: updatedValue});
//         // this.state.counter = this.state.counter + 1;
//     };
//
//     componentDidMount() {
//         console.log('run this line of code when the component just mounts.')
//
//         let currentInterVal = setInterval(() => {
//             console.log('run this code every second')
//             let currentTimeCount = this.state.secondsCounter;
//             // this.state.secondsCounter = this.state.secondsCounter  + 1;
//             let updatedCount = currentTimeCount + 1;
//             this.setState({secondsCounter: updatedCount});
//         }, 1000);
//
//         this.setState({currentInterVal: currentInterVal});
//
//         // setInterval(() => {
//         //     console.log('run this code every second')
//         // }, 1000);
//
//     }
//
//     componentWillUnmount() {
//         console.log('clean up stuff right before the component unmounts');
//         clearInterval(this.state.currentInterVal);
//     }
//
//     // componentWi() {
//     //     console.log('run this line of code when component will mount')
//     // }
//
//     // compo
//
//
//     render() {
//
//         return <div>
//
//             <div style={{textAlign: 'center'}}>
//                 <h1>Time Counter: {this.state.secondsCounter}</h1>
//
//             </div>
//             <div>
//                 The value for the counter is: {this.state.counter}
//             </div>
//             <br/>
//             <br/>
//             <button onClick={this.clickMe} id={'my-button'}>Click me</button>
//         </div>
//     }
//
// }

function App() {

    // useState
    // useEffect

    // Class based components - state
    // functional components - React hooks - useState and useEffect

    const [counter, setCounter] = useState(0);
    const [txt, setTxt] = useState('');

    const [secondsCounter, setSecondsCounter] = useState(0);

    const [names, setNames] = useState(['John', 'Jane', 'Mary']);

    const [currentItem, setCurrentItem] = useState();

    const [list, setList] = useState([]);

    const [todos, setTodos] = useState([]);

    const [calculatorResult, setCalculatorResult] = useState();




    // const [firstName, setFirstName] = useState();
    // firstName = 'Jane'
    // setFirstName('Jane')

    // setCounter - a function that helps you update counter

    // useEffect(() => {
    //     console.log('anytime there is a change in the state variables, this code will run + when the component loads up');
    //
    // })

    useEffect(() => {
        console.log('Run this code only on component mount , just once');
        // setInterval(() => {
        //     console.log('i was here');
        //     // let currentSeconds = secondsCounter;
        //     // let updatedSeconds = currentSeconds + 1;
        //     setSecondsCounter(secondsCounter + 1);
        // }, 1000);

        const interval = setInterval(() => {
            setSecondsCounter(secondsCounter => secondsCounter + 1);
        }, 1000);

        // return () => clearInterval(interval);

    }, [])

    useEffect(() => {
        if(txt=='john'){
            alert("It's John!");
        }
    }, [txt])

    // useEffect(() => {
    //     console.log('run this code only when txt is updated');
    //
    // }, [txt])
    //
    // useEffect(() => {
    //     console.log('run this code when txt and counter updates');
    // }, [txt, counter])


    const clickMe = () => {
        // console.log('i was clicked!');
        // alert('clicked');
        let currentCounterValue = counter
        let updatedValue = currentCounterValue + 1;
        setCounter(updatedValue);
    };

    // $('#my-button').on('click', () => {
    //     console.log('i was clicked!');
    //     alert('clicked');
    //     counter = counter + 1;
    //     $('counter-text').html(counter)
    // })

    // const onTxtChange = (event) => {
    //     console.log(event.currentTarget.value);
    //     setTxt(event.currentTarget.value.toUpperCase());
    //
    // };

    useEffect(() => {
        if(txt == 'oliver'){
            // do something
        }
    }, [txt])

    const addTheName = () => {
        console.log('the current value of the txt in the box is:', txt)
        // this.setState
        setNames(oldArray => [...oldArray, txt]);
        // if(txt == 'oliver') {
            // do something
        // }

    };

    const addTheItem = async () => {
        console.log('add the item');
        console.log(currentItem);
        setList(oldArray => [...oldArray, currentItem]);
    };

    const onSomeButtonClicked = async (val) => {
        console.log('the child button was clicked');
        console.log(val);
    };

    const updateResult = (result) => {
        setCalculatorResult(result);
    };

  return (
    <div className="App" style={{border: '1px solid #ddd'}}>
      {/*JSX*/}
      <header className="App-header">

          <br/>
          <br/>
          <br/>


          <List
              size="large"
              header={<div>
                  <Input onPressEnter={(event) => {
                      console.log(event.currentTarget.value);
                      let txt = event.currentTarget.value;
                      setTodos(oldArray => [...oldArray, txt]);

                  }} />
              </div>}
              // footer={<div>Footer</div>}
              bordered
              // dataSource={data}
              dataSource={todos}
              renderItem={(item) => {
                  return <List.Item>
                      <span className={'text-gray-600'}>{item}</span>

                      {/*<Popconfirm*/}
                      {/*    title="Are you sure?"*/}
                      {/*    onConfirm={() => {*/}
                      {/*        // this is where you write code to delete the item*/}

                      {/*    }}*/}
                      {/*    // onCancel={cancel}*/}
                      {/*    okText="Yes"*/}
                      {/*    cancelText="No"*/}
                      {/*>*/}
                      {/*    <Button size={'small'} type={'danger'}>Delete</Button>*/}
                      {/*</Popconfirm>*/}


                  </List.Item>
              }}
          />

          {JSON.stringify(todos)}


          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>


          {/*<div className={'p-10 bg-gray-200'}>*/}
          {/*    yay*/}
          {/*</div>*/}



          {/*<TopBar />*/}

          {/*<MainContent />*/}

          {/*<SideBar />*/}


          {/*<div>top bar</div>*/}
          {/*<div>main content</div>*/}
          {/*<div>side bar</div>*/}

          {/*<TopBar />*/}
          {/*<MainContent />*/}
          {/*<SideBar />*/}


          <div>
              <h1>Result is: {calculatorResult} </h1>
          </div>

      {/*    let func = (result) => {*/}
      {/*    setCalculatorResult(result);*/}
      {/*}*/}
      {/*    let props = {onResultUpdate: func}*/}

          <Calculator onResultUpdate={updateResult} />

          {/*<Button buttonText={'Click Me'}*/}
          {/*        size={'large'}*/}
          {/*        someFunc={onSomeButtonClicked} />*/}

          {/*<Button buttonText={'Submit'} size={'large'}/>*/}
          {/*<Button buttonText={'do this'}/>*/}



          <br/>
          <br/>
          <br/>
          <br/>

          {/*{JSON.stringify(list)}*/}

          <input type="text" onChange={(event) => {
              // console.log(event.currentTarget.value);
              // setTxt(event.currentTarget.value.toUpperCase());
              // setTxt(event.currentTarget.value);
              setCurrentItem(event.currentTarget.value)
          }}/>
          <br/>
          <button onClick={addTheItem}>Add the Item</button>

          <br/>
          <br/>
          <hr/>
          <ul>
              {list.map((listItem, idx) => {
                  // return <li key={idx}>
                  //     {listItem}
                  // </li>

                  return <ToDoListItem listItem={listItem} />
              })}
          </ul>


          <hr/>









          <div style={{textAlign: 'center'}}>
              <h1>Timer: {secondsCounter}</h1>
              {/*{secondsCounter==5 && <h2>The time now is 5 seconds!</h2>}*/}
              {/*{(secondsCounter>5 && secondsCounter<11) && <h2>The seconds are between 5 and 10 seconds</h2>}*/}

              {/*{(secondsCounter==5 || secondsCounter==8) && <h2>Only show up when the seconds counter is 5 OR 8</h2>}*/}

              {/*{(secondsCounter!=5) && <h2>This will show up when seconds counter is not 5</h2>}*/}

              {/*{console.log('was here')}*/}
          </div>
          <br/>
          <div>
              <h1>Names:</h1>
              <ul>
                  {/*look up the .map and forEach in javascript and the differences between the two*/}
                  {names.map((name) => {
                      return <li key={name}>{name}</li>
                  })}
                  {/*<li>Two name</li>*/}
              </ul>
          </div>
          <br/>
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>

          <input type="text" onChange={(event) => {
              console.log(event.currentTarget.value);
              // setTxt(event.currentTarget.value.toUpperCase());
              setTxt(event.currentTarget.value);
          }}/>
          <br/>
          <button onClick={addTheName}>Add to names</button>

          <div>
              The value for the counter is: {counter}
          </div>

          <div>
              {/*ternary operator*/}
              <h1 style={txt=='john' ? {color: 'green'} : {color: 'red'}} className={txt=='john' ? 'bg-white' : 'bg-gray'}>The value for the txt is: {txt}</h1>
              {/*{txt=='John' &&  <h1>It's John!</h1>}*/}
          </div>

          <br/>
          <br/>
          <button onClick={clickMe} id={'my-button'}>Click me</button>
      </header>



    </div>
  );
}

export default App;
