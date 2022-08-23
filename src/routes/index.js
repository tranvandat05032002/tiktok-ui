import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/components/layout';
import Search from '~/pages/Search';
import routesConfig from '~/config/routes';

//publicRoute
const publicRoutes = [
    { path: routesConfig.home, component: Home },
    { path: routesConfig.flowing, component: Following },
    { path: routesConfig.profile, component: Profile },
    { path: routesConfig.upload, component: Upload, layout: HeaderOnly },
    { path: routesConfig.search, component: Search, layout: null },
];

//privateRoute
const privateRouter = [];

export { publicRoutes, privateRouter };
