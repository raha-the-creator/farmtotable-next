import React from 'react';
import styled from 'styled-components';

const SaleInput = styled.div`
background-color:#EEB752;
border-radius: 100px 100px 100px 100px;
min-height:90px;
min-width:90px;
display:inline-flex;
align-items:center;
justify-content:center;
box-shadow: 1px 1px 2px 1px #888888;

`;

const SaleFont = styled.p `
font-size:20px;
font-weight:550;
font-family: Montserrat;
color:White;
letter-spacing: 1px;
`

const Sale = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<SaleInput>
<SaleFont>50%<br/>OFF</SaleFont>
</SaleInput>
 

</div>
}

export default Sale;