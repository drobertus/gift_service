CREATE TABLE `gifts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `creator_auth_type` varchar(45) NOT NULL,
  `creator_auth_value` varchar(45) NOT NULL,
  `product_id` varchar(45) NOT NULL,
  `product_source` varchar(45) NOT NULL,
  `product_config` mediumtext DEFAULT NULL,
  `redeemer_auth_type` varchar(45) DEFAULT NULL,
  `redeemer_auth_value` varchar(45) DEFAULT NULL,
  `redemption_time` datetime DEFAULT NULL,
  `billing_schedule_id` varchar(45) DEFAULT NULL,
  `redemption_code` varchar(45) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `redemption_code_UNIQUE` (`redemption_code`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=latin1;
 from gifts