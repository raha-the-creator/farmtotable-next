import React from 'react';
import styled from 'styled-components';

const ConfirmationInput = styled.div`
    background-color:#79C779;
    border-radius: 100px 100px 100px 100px;
    min-height:150px;
    min-width:150px;
    display:inline-flex;
    align-items:center;
    justify-content:center;
    box-shadow: 1px 1px 4px 1px #888888;
    border-style: solid;
    border-width: 9px;
    border-color: white;
`;


const Confirmation = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<ConfirmationInput>
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/White_check.svg/1200px-White_check.svg.png" style={{
        width: "90px",
        height: "90px",
        marginRight: "10 px",

    }}></img>
</ConfirmationInput>
 

</div>
}

export default Confirmation;