import React from 'react';
import StoreCard from '../comps/StoreCard';

export default {
    title: "Example/StoreCard",
    component: <StoreCard />
}

export const DefaultStoreCard = () => <StoreCard />

export const StoreCardCheckout = () => (
<StoreCard 
StoreName="John's Apples"
Delivery="Delivery: In 30 minutes"
/>

)