import {
    NavigationMenu,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuItem,
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
import githubLogo from "@/assets/logos/github/black.svg";
import linkedinLogo from "@/assets/logos/linkedin/black.svg";

function iconLink(link: string, icon: string) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
        >
            <img src={icon} alt="Icon" />
        </a>
    );
}

export function Navbar() {
    return (
        <div>
            <NavigationMenu className="navigation-menu">
                <NavigationMenuList className="navigation-menu-list">
                    {routesConfig.map(({ path, label }: RouteConfig) => (
                        <NavigationMenuItem key={path}>
                            <Link to={path}>
                                <NavigationMenuLink className="navigation-menu-link">
                                    {label}
                                </NavigationMenuLink>
                            </Link>
                        </NavigationMenuItem>
                    ))}
                </NavigationMenuList>
                <div className="navigation-menu-right">
                    {iconLink("https://github.com/KilakOriginal/", githubLogo)}
                    {iconLink("https://www.linkedin.com/in/abdul-malik-abdoul-hamidou-a41a3423a/", linkedinLogo)}
                </div>
            </NavigationMenu>

            <Routes>
                {routesConfig.map(({ path, component: Component }: RouteConfig) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
        </div>
    );
}
