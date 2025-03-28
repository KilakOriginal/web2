import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuItem,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import {
    Routes,
    Route,
    Link,
} from "react-router-dom"
import { Home } from "@/pages/Home"

export function Navbar() {
    return (
        <div>
            <NavigationMenu className="fixed top-5 left-10 w-full">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to="/">
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </div>
    );
}
