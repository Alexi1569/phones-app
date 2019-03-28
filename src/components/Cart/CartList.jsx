import React from 'react';
import CartItem from './CartItem';

export default function CartList({ ctx }) {
  const { cart } = ctx;

  return (
    <div className='container-fluid'>
      {cart.map(item => {
        return <CartItem key={item.id} item={item} ctx={ctx} />;
      })}
    </div>
  );
}
