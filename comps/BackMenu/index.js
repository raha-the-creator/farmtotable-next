import React from 'react';
import styled from 'styled-components';

const BackInput = styled.div`
    background-color:#DDD3BA;
    border-radius: 10px 10px 10px 10px;
    min-height:60px;
    min-width:300px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    box-shadow: 1px 1px 2px 1px #888888;
    margin-top:60px;
`;

const BackFont = styled.p `
    font-size:20px;
    font-weight: bold;
    font-family: Merriweather;
    color:white;
    letter-spacing: 1px;
`;

const Back = () => {
return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<BackInput>
    <BackFont>Back to Home BackMenu</BackFont>
</BackInput>
 

</div>
}

export default Back;