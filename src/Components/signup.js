import React from 'react';

class signup extends React.Component{
    constructor(props){
        super();
        console.log("props"+JSON.stringify(props))
    }
    render(){
        //console.log("Inside SIgn up"+JSON.stringify(props))
        return(
            <div>
                In sign up
            </div>
        )
    }
}

export default signup