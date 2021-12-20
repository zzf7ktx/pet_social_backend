'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: { model: 'users', key: 'id' },
      },
      media_url: {
        type: Sequelize.TEXT,
      },
      caption: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.ENUM('allowed', 'warning'),
      },
      upvote: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      downvote: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('posts');
  },
};
