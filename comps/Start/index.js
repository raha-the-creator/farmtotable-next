import React from 'react';
import styled from 'styled-components';

const StartInput = styled.div`
    background-color:#DDD3BA;
    border-radius: 10px 10px 10px 10px;
    min-height:60px;
    min-width:200px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    box-shadow: 1px 1px 2px 1px #888888;
`;

const StartFont = styled.p `
    font-size:20px;
    font-weight: bold;
    font-family: Merriweather;
    color:white;
    letter-spacing: 1px;
`

const Start = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<StartInput>
    <StartFont>Let's Start!</StartFont>
</StartInput>
 

</div>
}

export default Start;