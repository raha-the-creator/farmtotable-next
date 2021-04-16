import React from 'react';
import styled from 'styled-components';

const LocationInput = styled.div`
background-color:#E5EFD7;
border-radius: 100px 100px 100px 100px;
min-height:80px;
min-width:80px;
display:inline-flex;
align-items:center;
justify-content:center;
box-shadow: 1px 1px 2px 1px #888888;
`;


const Location = () => {

return <div style={{
    alignItems:"center",
    justifyContent: "center",

}}>
<LocationInput>
    <img src="https://www.freeiconspng.com/thumbs/location-icon-png/google-location-icon-7.png" style={{
        width: "20px",
        height: "35px",
     

    }}></img>
</LocationInput>
 

</div>
}

export default Location;