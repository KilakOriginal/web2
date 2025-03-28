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
import { paths } from "@/utils"

export function Navbar() {
    return (
        <div>
            <NavigationMenu className="fixed top-5 left-10 w-full">
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link to={paths.Home}>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>

            <Routes>
                <Route path={paths.Home} element={<Home />} />
            </Routes>
        </div>
    );
}
