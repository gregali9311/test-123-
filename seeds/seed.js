const sequelize = require('../config/connection');
const { User, Mood } = require('../models');

const userData = require('./userData.json')
const moodData = require('./moodData.json')

const seedDatabase = async () => {
    await sequelize.sync({force: true});

    const user = await User.bulkCreate(userData, {
        individualHooks: true,
        returning: true,
    });
    for (const Mood of moodData) {
        await Mood.create({
            ...Mood,
            user_id: user[Math.floor(Math.random() * user.length)].id,
        });
    }
    
    process.exit(0);
}
seedDatabase();