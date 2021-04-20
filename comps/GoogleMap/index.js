import React from 'react';
import styled from 'styled-components';

const GoogleMapCont = styled.div`
    
`;



const GoogleMap = () => {
    return <GoogleMapCont>
            <iframe src="//maps.google.com/maps?q=53.3381768,-6.2613077&z=15&output=embed"></iframe>
    </GoogleMapCont>
}

export default GoogleMap;