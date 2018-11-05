import React from 'react';

//import {} from 'react-bootstrap'

const footerstyle = {
    left: 50,
    position: "fixed",
    bottom: 0,
    width: 100,
    backgroundColor: "black",
    color: "white",
    textAlign: "center"
}
const Footer = () => {
    return(<div style={footerstyle}>
        <footer >
            Hello
        </footer>
    </div>)
    
}

export default Footer;