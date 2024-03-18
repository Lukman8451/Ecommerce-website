import { DataTypes, Model } from 'sequelize';
import database from '../config/database';


// Define the model attributes
interface ProductAttributes {
    id: number;
    productname: string;
    price: string;
    category: string;
    product_img: string;
    createdAt: Date;
    updatedAt: Date;

}

// Define the model instance methods
interface UserInstance extends Model<ProductAttributes>, ProductAttributes { }

// Define the model class/static methods
interface UserModel extends Model<UserInstance> { }

// Export the model definition function
let Product = database.define<UserInstance, ProductAttributes>('users', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    productname: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    price: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    product_img: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    category: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataTypes.DATE("now"),
        allowNull: false,
        unique: true,
    },
    updatedAt: {
        type: DataTypes.DATE("now"),
        allowNull: false,
        unique: true,
    },
});
export default Product;
