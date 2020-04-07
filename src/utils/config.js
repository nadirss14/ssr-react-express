import dotenv from 'dotenv';
dotenv.config();

export const config = {
	enviroment: process.env.NODE_ENV,
	port: process.env.PORT,
	api_base: process.env.API_BASE,
	api_version: process.env.API_VERSION,
};
