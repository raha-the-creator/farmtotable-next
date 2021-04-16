import React from 'react';
import styled from 'styled-components';

const MinusOneInput = styled.button`
        background-color:#F47E7E;
        border-radius: 10px 10px 10px 10px;
        min-height:60px;
        min-width:60px;
        display:inline-flex;
        align-items:center;
        justify-content:center;
        box-shadow: 1px 1px 2px 1px #888888;
`;


const MinusOne = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<MinusOneInput>
    <img src="https://img.icons8.com/pastel-glyph/2x/minus.png" style={{
        width: "35px",
        height: "35px",
     

    }}></img>
</MinusOneInput>
 

</div>
}

export default MinusOne;