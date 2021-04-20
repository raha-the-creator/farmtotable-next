import React from 'react';
import styled from 'styled-components';

const SignUpInput = styled.button`
background-color:${props=>props.bgcolor};
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
    font-weight:550;
    font-family: Montserrat;
    color:${props=>props.color};
    letter-spacing: 1px;
`

const SignUp = ({
    text="Sign Up",
    bgcolor="#5A7961",
    color="white"
}) => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<SignUpInput bgcolor={bgcolor}>
<SignUpFont color={color}>{text}</SignUpFont>
</SignUpInput>
 

</div>
}

export default SignUp;