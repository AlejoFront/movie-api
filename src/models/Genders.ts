import {
    Table,
    Column,
    Model,
    DataType
} from 'sequelize-typescript';

@Table
class Genders extends Model {
    @Column({type: DataType.STRING, allowNull: false, unique: true})
    name!: string; 
}
export default Genders