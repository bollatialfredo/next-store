import { fetchCartItems } from "@/app/utils/actions";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";


async function CartButton() {
    //temp

    const numItemsInCart = await fetchCartItems();
    return (
        <Button asChild variant="outline" size="icon" className="flex items-center justify-center relative">
            <Link href="/cart">
                <LuShoppingCart className="w-6 h-6" />
                {
                    numItemsInCart !== 0 && (
                        <div className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                            {numItemsInCart}
                        </div>
                    )
                }
            </Link>
        </Button>
    )
}

export default CartButton