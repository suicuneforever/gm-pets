import App from './app';
import PetRoutes from './routes/PetRoutes';

const app = new App([new PetRoutes()]);

app.listen();
