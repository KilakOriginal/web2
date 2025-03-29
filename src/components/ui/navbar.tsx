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
import { 
    routesConfig,
    RouteConfig,
} from "@/utils"

export function Navbar() {
    return (
        <div>
            <NavigationMenu className="fixed top-5 left-10 w-full">
                <NavigationMenuList>
                    {routesConfig.map(({ path, label }: RouteConfig) => (
                        <NavigationMenuItem key={path}>
                            <Link to={path}>
                                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                    {label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
            </NavigationMenu>

            <Routes>
                {routesConfig.map(({ path, component: Component }: RouteConfig) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
        </div>
    );
}
