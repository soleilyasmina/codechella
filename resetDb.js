const { sequelize } = require('./models');

async function resetDb() {
  try {
    await sequelize.sync({force: true});
    console.log('Sync complete.');
  } catch (e) {
    console.error(e);
  } finally {
    process.exit();
  }
}

resetDb();
