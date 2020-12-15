import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';


// Objects and classes and instances
// Animal
// cat
// dog
//
// Cat < Animal
// Dog < Animal

class App extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counter: 0
        };
    }


    clickMe = () => {
        // console.log('i was clicked!');
        // alert('clicked');
        let currentCounterValue = this.state.counter;
        let updatedValue = currentCounterValue + 1;
        this.setState({counter: updatedValue});
        // this.state.counter = this.state.counter + 1;
    };



    render() {

        return <div>
            <div>
                The value for the counter is: {this.state.counter}
            </div>
            <br/>
            <br/>
            <button onClick={this.clickMe} id={'my-button'}>Click me</button>
        </div>
    }

}

// function App() {
//
//     // useState
//     // useEffect
//
//     // Class based components - state
//     // functional components - React hooks - useState and useEffect
//
//     const [counter, setCounter] = useState(0);
//     const [txt, setTxt] = useState('');
//     // const [firstName, setFirstName] = useState();
//     // firstName = 'Jane'
//     // setFirstName('Jane')
//
//     // setCounter - a function that helps you update counter
//
//
//     const clickMe = () => {
//         // console.log('i was clicked!');
//         // alert('clicked');
//         let currentCounterValue = counter
//         let updatedValue = currentCounterValue + 1;
//         setCounter(updatedValue);
//     };
//
//     // $('#my-button').on('click', () => {
//     //     console.log('i was clicked!');
//     //     alert('clicked');
//     //     counter = counter + 1;
//     //     $('counter-text').html(counter)
//     // })
//
//     // const onTxtChange = (event) => {
//     //     console.log(event.currentTarget.value);
//     //     setTxt(event.currentTarget.value.toUpperCase());
//     //
//     // };
//
//   return (
//     <div className="App" style={{border: '1px solid #ddd'}}>
//       {/*JSX*/}
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//
//           <input type="text" onChange={(event) => {
//               console.log(event.currentTarget.value);
//               setTxt(event.currentTarget.value.toUpperCase());
//           }}/>
//
//           <div>
//               The value for the counter is: {counter}
//           </div>
//           <div>
//               The value for the txt is: {txt}
//           </div>
//
//           <br/>
//           <br/>
//           <button onClick={clickMe} id={'my-button'}>Click me</button>
//       </header>
//
//
//
//     </div>
//   );
// }

export default App;
