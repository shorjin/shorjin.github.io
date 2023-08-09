import React from 'react';
import ReactDOM from 'react-dom';
import pic from './images/pic1.png';
import pic2 from './images/pic2.jpg';

// function component
const App = function() {
    // create a constant variable
    const divText="I am a text in a variable"
    // create a style variable
    const styleJSX={color:"purple",fontFamily:'Algerian'}
    return (
        <div>
            <h1 style={{color:"magenta", textAlign:"center"}}>Welcome to React JS</h1>
            <p>Let's be familiar with JSX element</p>
            <h2>Activity </h2>
            <ul>
                <li>list1</li>
                <li>list2</li>
                <li>list3</li>
                <li>list4</li>
            </ul>
            <h2>Inline styling</h2>
            <label htmlFor="email" style={{color:"olive", padding:"0.5em 1em"}}>Enter e-email</label>
            <input id="email" type="text" placeholder='Type your email' style={{backgroundColor: "rgb(230, 230, 230)", padding: '0.5em', borderRadius: '0.5em'}}></input>
            <button style={{marginLeft:'1em',backgroundColor:"magenta", padding:"0.5em 1em", borderRadius:'0.5em',color:"whitesmoke"}}>
                Submit Form
            </button>
            <figure>
                <img src={pic} style={{width:"50%"}}></img>
            </figure>
            <p className="title">Add a class name to a jsx element</p>
            <p className='txtVar'>{divText}</p>
            <p style={styleJSX}>{divText}</p>
            <figure>
                <img src={pic2} style={{width:"30%",border:"solid red", padding:"5px 8px", borderRadius:"50%", backgroundColor:"lightgray"}}></img>
            </figure>

        </div>
    );
}









// rooting the app
const root = document.querySelector('#root');
ReactDOM.render(<App />, root);