

const increment = () =>{
    return {
        type:'INCREMENT',
        value:'action'
    }
};

const decrement = () =>{
    return {
        type:'DECREMENT',
        value:'action'
    }
};

module.exports = {
    increment,
    decrement
}