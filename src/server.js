import express from 'express';
import compression from 'compression';
import apiRoutes from './routes/index';
import { config } from './utils/config';

const app = express();
const port = config.port || 3000;
const BASE_URL = `${config.api_base}/${config.api_version}`;
app.use(compression());
app.use(express.static('public'));

apiRoutes.SSR(app, BASE_URL);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
