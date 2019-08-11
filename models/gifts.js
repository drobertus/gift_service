'use strict';
module.exports = (sequelize, Sequelize) => {
  const Gifts = sequelize.define('gifts', {
    id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
    creator_auth_type: {type: Sequelize.STRING, allowNull: false},
    creator_auth_value: {type: Sequelize.STRING, allowNull: false},
    product_id: {type: Sequelize.STRING, allowNull:false},
    product_source: {type: Sequelize.STRING, allowNull:false },
    redemption_code: {type: Sequelize.STRING, allowNull: false},
    product_config: {type: Sequelize.TEXT},
    billing_schedule_id: {type: Sequelize.INTEGER},
    //created_at: Sequelize.DATE,
    redeemer_auth_type: {type: Sequelize.STRING, allowNull: true},
    redeemer_auth_value: {type: Sequelize.STRING, allowNull: true},
    redemption_time: Sequelize.DATE,
    //predefinedRedeemer: {type: Sequelize.BOOLEAN, defaultValue: false}
/*
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `creator_auth_type` varchar(45) NOT NULL,
    `creator_auth_value` varchar(45) NOT NULL,
    `product_id` varchar(45) NOT NULL,
    `product_source` varchar(45) NOT NULL,
    `product_config` mediumtext DEFAULT NULL,
    `created_at` datetime NOT NULL,
    `redeemer_auth_type` varchar(45) DEFAULT NULL,
    `redeemer_auth_value` varchar(45) DEFAULT NULL,
    `redemption_time` datetime DEFAULT NULL,
    `billing_schedule_id` varchar(45) DEFAULT NULL,
    `redemption_code` varchar(45) NOT NULL,
    */
  }, {});
  Gifts.associate = function(models) {
    // associations can be defined here
  };
  return Gifts;
};
/*
class Gifts extends Model {}
Gifts.init({
  id: {type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
  creatorAuthType: {type: Sequelize.STRING, allowNull: false},
  creatorAuthValue: {type: Sequelize.STRING, allowNull: false},
  productId: {type: Sequelize.STRING, allowNull:false},
  productSource: {type: Sequelize.STRING, allowNull:false },
  purchaseOptions: {type: Sequelize.TEXT},
  creationDate: Sequelize.TIMESTAMP

}, { db, modelName: 'gifts' });
module.exports = Gifts;
*/