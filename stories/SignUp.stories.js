import React from 'react';
import SignUp from '../comps/SignUp';

export default{
    title:"SignUp Button",
    component: <SignUp/>
}

export const MySignUp = () => <SignUp/>

export const MyLogin1 = () => (
    <SignUp 
    text="Login"
    bgcolor="#E5EFD7"
    color="black"
    
    
    />
    
    );