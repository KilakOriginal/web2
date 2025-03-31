import { useEffect, useState } from "react";
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
import { Button } from "@/components/ui/button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon, faSun } from "@fortawesome/free-regular-svg-icons"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

function jsxLink(link: string, Element: any) {
    return (
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
        >
            {Element}
        </a>
    );
}

export function Navbar() {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        if (theme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        localStorage.setItem("theme", theme);
      }, [theme]);

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
                    {jsxLink("https://github.com/KilakOriginal/", <FontAwesomeIcon icon={faGithub} />)}
                    {jsxLink("https://www.linkedin.com/in/abdul-malik-abdoul-hamidou-a41a3423a/", <FontAwesomeIcon icon={faLinkedin} />)}
                    <Button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        variant="ghost"
                        style={{
                            all: "unset",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            cursor: "pointer",
                        }}
                        className={`${theme === "dark" ? "text-white" : "text-black"}`}
                    >
                        {theme === "dark" ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />}
                    </Button>
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
