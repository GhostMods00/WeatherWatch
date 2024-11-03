import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import weatherRouter from './routes/api/weatherRoutes'; // path to weatherRoutes

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Serve static files from the client dist folder
app.use(express.static(path.join(__dirname, '../client/dist')));

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the weather router with the base path
app.use('/api/weather', weatherRouter);

// Catch-all route to serve index.html for any unmatched routes (for client-side routing)
app.get('*', (_req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});
// Start the server
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`))
