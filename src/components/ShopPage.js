import React from 'react';
import LivePlayers from './LivePlayers';
import DiscountTimer from './DiscountTimer';

function ShopPage() {
  return (
    <div>
      <h1>Welcome to the Shop</h1>
      <DiscountTimer />
      <LivePlayers />
    </div>
  );
}

export default ShopPage;
