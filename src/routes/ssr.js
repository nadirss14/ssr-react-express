import express from 'express';
import Home from '../components/Home/Home';
import React from 'react';
import { renderToString } from 'react-dom/server';
import hbs from 'handlebars';
export default (app, BASE_URL) => {
	const router = express.Router();
	const path = `/${BASE_URL}/ssr`;

	console.log(path);
	app.use(path, router);

	router.get('/', (req, res, next) => {
		const html = `
			<html>
			<head><title>My First SSR</title></head>
			<body>
			<h1>My First Server Side Render</h1>
			<div id="reactele">{{{template}}}</div>
			<script src="/app.js" charset="utf-8"></script>
			<script src="/vendor.js" charset="utf-8"></script>
			</body>
			</html>
			`;

		const template = hbs.compile(html);
		const reactComponet = renderToString(<Home />);
		const htmlToSend = template({ template: reactComponet });

		res.send(htmlToSend);
	});
};
