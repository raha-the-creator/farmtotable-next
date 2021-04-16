import React from 'react';
import styled from 'styled-components';

const PlusOneInput = styled.button`
        background-color:#79C779;
        border-radius: 10px 10px 10px 10px;
        min-height:60px;
        min-width:60px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        box-shadow: 1px 1px 2px 1px #888888;
`;


const PlusOne = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<PlusOneInput>
    <img src="https://img.icons8.com/ios/72/plus--v1.png" style={{
        width: "35px",
        height: "35px",
     

    }}></img>
</PlusOneInput>
 

</div>
}

export default PlusOne;