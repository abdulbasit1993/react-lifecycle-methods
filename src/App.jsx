import React, { Component } from 'react';
import Child from './components/child';
import './App.css';

// class App extends Component {
//     constructor() {
//         super()
//         this.state = {
//             count: 0,
//             data: []
//         }
//         console.log("constructor")
//     }

//     static getDerivedStateFromProps(){
//         console.log("getDerivedStateFromProps")
//         return {
//             count: 5
//         }
//     }

//     componentDidMount(){
//         console.log("componentDidMount")
//         fetch('https://jsonplaceholder.typicode.com/todos')
//             .then(response => response.json())
//             .then(data => {
//                 this.setState({
//                     data: data
//                 })
//             })
//             .catch(err => console.log(err))
//     }

//     render() {
//         console.log("data=>",this.state.data)
//         return (
//             <div>
//                 <h1>React Lifecycle</h1>
//                 {this.state.data.map((v,i)=>{
//                     return <h4>{v.title}</h4>
//                 })}
//             </div>
//         )
//     }
// }

class App extends Component {
    constructor() {
        super()
        this.state = {
            count: 0,
        }
    }
    
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Child count={this.state.count} />
                <button onClick={() => this.setState({count: this.state.count + 1})}>Increment</button>
                <button onClick={() => this.setState({count: this.state.count - 1})}>Decrement</button>
            </div>
        )
    }
}

export default App;