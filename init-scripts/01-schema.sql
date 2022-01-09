DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
                           `id` int NOT NULL AUTO_INCREMENT,
                           `given_name` varchar(45) DEFAULT NULL,
                           `family_name` varchar(45) DEFAULT NULL,
                           `birthdate` varchar(45) DEFAULT NULL,
                           `sex` varchar(45) DEFAULT NULL,
                           `home_address` varchar(45) DEFAULT NULL,
                           `phone_number` varchar(45) DEFAULT NULL,
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;
