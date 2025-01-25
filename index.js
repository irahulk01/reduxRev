let reduxState = {
    count: 0,
    name: "Rahul Kumar",
    age: 39,
};

function reducer(state, action){
if(action.type === "post/increment"){
 return {...state, age: state.age +1}
}else if (action.type === "post/decrement"){
    return {...state, age: state.age -1}
} else if (action.type == "post/incrementBy"){
    return {state, name: "suman Kumar", age: state.age + action.payload}
}
return state;
}


reduxState =  reducer(reduxState, {type: "post/increment"});
console.log(reduxState);

reduxState =  reducer(reduxState, {type: "post/decrement"});
console.log(reduxState);
reduxState =  reducer(reduxState, {type: "post/incrementBy", payload: 10});

console.log(reduxState);
