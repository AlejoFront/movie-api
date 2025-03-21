import {Sequelize} from 'sequelize-typescript';
import path from 'path'

export const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'db/database.sqlite',
    logging: false,
    models: [path.join(__dirname,'models')]
});

export default sequelize;