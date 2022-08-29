import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import { HeaderOnly } from '~/layouts';
import Search from '~/pages/Search';
import config from '~/config';
import Live from '~/pages/Live';

//publicRoute
const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.flowing, component: Following },
    { path: config.routes.live, component: Live },
    { path: config.routes.profile, component: Profile },
    { path: config.routes.upload, component: Upload, layout: HeaderOnly },
    { path: config.routes.search, component: Search, layout: null },
];

//privateRoute
const privateRouter = [];

export { publicRoutes, privateRouter };
