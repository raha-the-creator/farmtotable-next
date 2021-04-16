import React from 'react';
import Checkout from '../comps/Checkout';

export default {
    title: "Example/Checkout",
    component: <Checkout />
}

export const DefaultCheckout = () => (<Checkout 
    text="Organic Green Apples"
    weight="2.0kg"
    remove="REMOVE"
/>
);