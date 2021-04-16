import React from 'react';
import styled from 'styled-components';

const LoginInput = styled.button`
    background-color:#7BC67B;
    border-radius: 10px 10px 10px 10px;
    min-height:30px;
    min-width:120px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    box-shadow: 1px 1px 2px 1px #888888;
`;

const LoginFont = styled.p `
    font-family: Montserrat, sans-serif;
    font-size:15px;
    font-weight: bold;
    font-family: Montserrat;
    color: white;
    letter-spacing: 1px;
`

const Login = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<LoginInput>
<LoginFont>Login</LoginFont>
</LoginInput>
 

</div>
}

export default Login;