import { Sequelize } from 'sequelize'

export const db = new Sequelize('movie-generator', 'sa','M@thC0d31!', 
    {
        dialect: 'mssql',
        host: 'localhost',
        port: 1433,
        define: {
            timestamps: true
        }
    })


