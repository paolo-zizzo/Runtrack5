import React from 'react';
import BeautifullScreen from './BeautifullScreen';
import MagnificientEqualButton from './MagnificientEqualButton';
import GreatOperationButton from './GratOperationButton';



import AmazingNumberButton from './AmazingNumberButton';

function Calculator(){
return(

    
    <div class="ligne_calcul">
    <BeautifullScreen/>
    <div class="d-flex  justify-content-between mt-2">
        <AmazingNumberButton name="7"/>
        <AmazingNumberButton name="8"/>
        <AmazingNumberButton name="9"/>
        <GreatOperationButton name="/"/>
    </div>
    <div class="d-flex  justify-content-between mt-2">
        <AmazingNumberButton name="4"/>
        <AmazingNumberButton name="5"/>
        <AmazingNumberButton name="6"/>
        <GreatOperationButton name="*"/>
    </div>
    <div class="d-flex  justify-content-between mt-2">
        <AmazingNumberButton name="1"/>
        <AmazingNumberButton name="2"/>
        <AmazingNumberButton name="3"/>
        <GreatOperationButton name="-"/>
    </div>
    <div class="d-flex  justify-content-between mt-2">
        <AmazingNumberButton name="0"/>
        <AmazingNumberButton name="."/>
        <MagnificientEqualButton name="="/>
        <GreatOperationButton name="+"/>
    </div>
</div>
)
    }

    export default Calculator;
