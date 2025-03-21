import {
    Table,
    Column,
    Model,
    DataType
} from 'sequelize-typescript';

@Table
export class Directors extends Model {
    @Column({type: DataType.STRING, allowNull: false})
    name!: string; 
}

export default Directors