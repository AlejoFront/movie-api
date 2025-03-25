import {
    Table,
    Column,
    Model,
    DataType,
    ForeignKey,
    BelongsTo,
    BelongsToMany
} from 'sequelize-typescript';

import {
    Actors,
    Directors,
    Genders
} from 'models';

@Table
class Movies extends Model {

    @Column({type: DataType.STRING, allowNull: false})
    title!: string;

    @Column({type: DataType.TEXT})
    description!: string;

    @Column({type: DataType.INTEGER})
    year?: string;

    @Column({type: DataType.INTEGER})
    duration?: string;

    @ForeignKey(() => Directors)
    @Column(DataType.STRING)
    directorId?: string;

    @BelongsTo(() => Genders)
    gender!: Genders[]

    @BelongsTo(() => Directors)
    director!: Directors[]

    @BelongsTo(() => Actors)
    actors!: Actors[]

}

export default Movies