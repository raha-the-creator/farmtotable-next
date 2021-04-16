import React from 'react';
import styled from 'styled-components';

const PasswordInput = styled.div`
        background-color:#FEFBF2;
        border-radius: 10px 10px 10px 10px;
        min-height:20px;
        min-width:300px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        box-shadow: 1px 1px 2px 1px #888888;

`;

const PasswordFont = styled.p `
font-size:15px;
font-weight:650;
font-family: Montserrat;
color:#545454;
letter-spacing: 1px;
margin-right:160px;
`

const Password = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center"
}}>
<PasswordInput>
<img src="https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png" style={{
width: "20px",
height: "20px",
marginRight: "10px",
}}></img><PasswordFont>Password</PasswordFont>
</PasswordInput>
 

</div>
}

export default Password;