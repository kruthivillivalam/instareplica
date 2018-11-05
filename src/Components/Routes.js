import React from 'react';
import {Route} from 'react-router';
import Home from './Home';
import signup from './signup'

class Routes extends React.Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/signup" component={signup}/>
               
            </div>
            
        )
    }
}

export default Routes;