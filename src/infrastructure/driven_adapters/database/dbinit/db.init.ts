const { Sequelize } = require('sequelize');

export async function dbinit() {
    
    const sequelize = new Sequelize('ias_skills', 'root', 'Ias2022*.', {
        host: 'localhost',
        dialect:'mysql'
    });

    await sequelize.authenticate();
}





