import React from "react";
import {connect} from "react-redux";
import {decrement, increment} from "./Action";


class App extends React.Component{
    render() {
        return(
            <div>
                <div>{this.props.num}</div>
                <button onClick={this.props.onIncrement}>+</button>
                <button onClick={this.props.onDecrement}>-</button>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return{
        num :state
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        onIncrement:()=>dispatch(increment()),
        onDecrement:()=>dispatch(decrement())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)























// import React from "react";
// import Home from "./Pages/Home";
// import {decrement, increment} from "./Action";
// import {store} from "./Store";
//
// function App() {
//
//   return (
//           <div className="App">
//               <Home
//                 onIncrement={()=>{store.dispatch(increment({type:"INCREMENT"}))}}
//                 onDecrement={()=>{store.dispatch(decrement({type:"DECREMENT"}))}}
//                 num={store.getState()}
//               />
//           </div>
//   );
// }
//
// export default App;


