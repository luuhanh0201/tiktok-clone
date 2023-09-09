import Home from "@/pages/Home";
import Following from "@/pages/Following";
import Profile from "@/pages/Profile";
import Upload from "@/pages/Upload";
import HeaderOnly from "@/components/Layout/HeaderOnly";
import Search from "@/pages/Search";
import Explore from "@/pages/Explore";
import Live from "@/pages/Live";

interface Route {
    path: string;
    component: () => JSX.Element;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    layout?: any;
}

export const publicRoutes: Route[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/following",
        component: Following
    },
    {
        path: "/profile",
        component: Profile
    },
    {
        path: "/explore",
        component: Explore
    },
    {
        path: "/live",
        component: Live
    },
    {
        path: "/upload",
        component: Upload,
        layout: HeaderOnly
    },
    {
        path: "/search",
        component: Search,
        layout: null
    }
];
