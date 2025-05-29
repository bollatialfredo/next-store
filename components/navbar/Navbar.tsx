

import Container from "../global/Container"
import Logo from "./Logo"
import NavSearch from "./NavSearch"
import CartButton from "./CartButton"
import DarkMode from "./DarkMode"
import LinksDropdown from "./LinksDropdown"
import { Suspense } from "react"

function Navbar() {
    return (
        <nav className="border-b">
            <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
                <Logo></Logo>
                <Suspense>
                    <NavSearch />
                </Suspense>
                <div className="flex items-center gap-4">
                    <CartButton></CartButton>
                    <DarkMode></DarkMode>
                    <LinksDropdown></LinksDropdown>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar