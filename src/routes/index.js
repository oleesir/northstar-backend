import AuthRouter from './api/auth.router';
import RequestsRoutes from './api/requests.router';
import IndexRoutes from './api/index.router';

const router = [RequestsRoutes, AuthRouter, IndexRoutes];

export default router;