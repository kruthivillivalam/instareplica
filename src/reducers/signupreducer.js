const signupreducer = (state={}, action) => {
    console.log("State in reducer==="+JSON.stringify(state))
    switch(action.type){
        case 'SIGNUP':
            
            state={
                ...state,
                username: action.username
            };
            console.log("New state:"+JSON.stringify(state))
            return state;
            break;
        default:
            return state;
            break;
        
    }
    
}

export default signupreducer;