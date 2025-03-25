import {
    Table,
    Column,
    Model,
    DataType,
    BelongsToMany
} from 'sequelize-typescript';
import Movies from './Movies';

@Table
class Actors extends Model {
    @Column({type: DataType.STRING, allowNull: false})
    name!: string;

    @BelongsToMany(() => Movies, {through: 'MovieActors'})
    movies!: Movies[];
}

export default Actors