import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import {GiMagnifyingGlass} from 'react-icons/gi';

const SearchBarCont = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
    background-color: #fff;
    border-radius: 20px;
    border: 2px solid #838383;
    width: 340px;
    height: 45px;
    padding: 4px;
    margin-top: 20px;
`;

const SearchBarIcon = styled.div`
    display: flex;
    margin: 4px;

    .magnify-icon {
        width: 25px;
        height: 25px;
    }
`;

const SearchBarText = styled.p`
    font-family: Montserrat, sans-serif;
    font-size: 13px;
    margin-left: 10px;
`;

const SearchBar = ({
    text="Find the groceries!"
}) =>{
    return <SearchBarCont>
        <SearchBarIcon>
            <GiMagnifyingGlass className="magnify-icon"/>
        </SearchBarIcon>
        <SearchBarText>
            {text}
        </SearchBarText>
    </SearchBarCont>
}

export default SearchBar;