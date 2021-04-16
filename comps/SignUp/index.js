import React from 'react';
import styled from 'styled-components';

const SignUpInput = styled.button`
background-color:#7BC67B;
border-radius: 10px 10px 10px 10px;
min-height:30px;
min-width:120px;
display:inline-flex;
align-items:center;
justify-content:center;
box-shadow: 1px 1px 2px 1px #888888;

`;

const SignUpFont = styled.p `
    font-size:16px;
    font-weight:bold;
    font-family: Montserrat;
    color:white;
    letter-spacing: 1px;
`

const SignUp = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<SignUpInput>
<SignUpFont>Sign Up</SignUpFont>
</SignUpInput>
 

</div>
}

export default SignUp;