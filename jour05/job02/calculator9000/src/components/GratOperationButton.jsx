import React from 'react';
function GreatOperationButton(props){
const {name} =props
    return (
    

    
    <button class ="btn btn-success" name={name}> {name} </button>
    
    )

}

export default GreatOperationButton;