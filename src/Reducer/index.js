
const initState = 0;
const counter = (state=initState, action) => {
    switch (action.type){
        case "INCREMENT":
            return state= state+1;
        case "DECREMENT":
            return state= state-1;
        default:
            return state;
    }
}

export default counter;

























// const initState = 1;
//
// const Reducer = (state=initState,action) =>{
//     console.log('Reducer:',state,action)
//     switch (action.type){
//         case "INCREMENT":
//             return state=state+1;
//         case "DECREMENT":
//             return state=state-1;
//         default:
//             return state;
//     }
// };
//
// module.exports = {
//     Reducer
// };