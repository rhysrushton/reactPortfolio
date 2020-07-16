import React from "react";
import styled from 'styled-components';
const Styles = styled.div`
h1, p, a{
    margin: 10%;
    color:  #9FFFCB; ; 
}
` ; 

export default function contact(){
    return(
        <Styles>
        <div>
            <h1>Contact</h1>
            <a href ='https://github.com/rhysrushton'>Github </a>
            <a href ='https://www.linkedin.com/in/rhys-rushton-838a16197/'>Linkedin </a>
       
        </div>
        </Styles>
    )

}