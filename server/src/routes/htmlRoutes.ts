import express from 'express';
import path from 'path';
import weatherRouter from './api/weatherRoutes';
import htmlRouter from './index';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and serving static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../../client')));

// Use weather and HTML routes
app.use('/api/weather', weatherRouter);
app.use('*', htmlRouter);

app.listen(PORT, () => console.log(`Server is running on http://localhost:${PORT}`));