import React from "react";
import styled from 'styled-components';
const Styles = styled.div`
h1, p{
    margin: 10%;
}
` ; 

export default function about(){
    return(
        <Styles>
        <div>
            <h1 >about</h1> 
            
            <p>Hey there, I'm Rhys, you may be here because (hopefully) you're thinking of employing me. If that is the case,
            please go directly to the portfolio page where you will find my latest work.</p>    
        </div>
        </Styles>
    )
}