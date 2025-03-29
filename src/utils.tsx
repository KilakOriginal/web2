export const basePath: string = import.meta.env.VITE_BASE_PATH || '/'

import { Home } from "@/pages/Home"
import { Quotes } from "@/pages/Quotes"

export interface RouteConfig {
    path: string
    label: string
    component: React.ElementType
}

export const routesConfig: RouteConfig[] = [
    { path: basePath, label: "Home", component: Home },
    { path: basePath.concat("Quotes"), label: "Quotes", component: Quotes },
];
