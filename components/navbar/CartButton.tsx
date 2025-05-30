import { Button } from "../ui/button";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";


function CartButton() {
    //temp

    const numItemsIncart = 9;
    return (
        <Button asChild variant="outline" size="icon" className="flex items-center justify-center relative">
            <Link href="/cart">
                <LuShoppingCart className="w-6 h-6" />
                <span className="absolute -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center justify-center text-xs">
                    {numItemsIncart}
                </span>
            </Link>
        </Button>
    )
}

export default CartButton