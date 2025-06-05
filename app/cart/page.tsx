import CartItemsList from '@/components/cart/CartItemsList';
import CartTotals from '@/components/cart/CartTotals';
import SectionTitle from '@/components/global/SectionTitle';
import { fetchOrCreateCart, updateCart } from '@/app/utils/actions';
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
async function CartPage() {
  const { userId } = auth();
  if (!userId) redirect('/');
  const previousCart = await fetchOrCreateCart({ userId });
  const { cartItems, currentCart } = await updateCart(previousCart);

  if (cartItems.length === 0) {
    return <SectionTitle title='Empty cart' />;
  }
  return (
    <>
      <SectionTitle title='Shopping Cart' />
      <div className='mt-8 grid gap-4 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
}
export default CartPage;