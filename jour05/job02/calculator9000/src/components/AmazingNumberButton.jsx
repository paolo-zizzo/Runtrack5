import React from 'react';
function AmazingNumberButton(props){
const {name} =props
    return (
    

    
    <button class ="btn btn-success" name={name}> {name} </button>
    
    )

}

export default AmazingNumberButton;