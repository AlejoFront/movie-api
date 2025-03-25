import sequelize from '../config/database'
import Movies from './Movies';
import Actors from './Actors';
import Genders from './Genders';
import Directors from './Directors';

const syncDatabase = async () => {
    await sequelize.sync({force: false});
    console.log('Database synced!');
}

export {
    sequelize, Movies, Actors, Genders, Directors, syncDatabase
}