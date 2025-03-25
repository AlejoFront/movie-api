import express from 'express';
import cors from 'cors';
import {syncDatabase} from './models';
import movieRoutes from 'routes/movie.routes';
import actorRoutes from 'routes/actor.routes';
import genderRoutes from 'routes/gender.routes';
import directorRoutes from 'routes/director.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/movies', movieRoutes);
app.use('/actors', actorRoutes);
app.use('/genders', genderRoutes);
app.use('/directors', directorRoutes);

syncDatabase().then(() => {
    app.listen(5000,() => console.log('Server runnning on http://localhost:5000'));
});