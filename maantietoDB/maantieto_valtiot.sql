-- MySQL dump 10.13  Distrib 8.0.38, for Win64 (x86_64)
--
-- Host: localhost    Database: maantieto
-- ------------------------------------------------------
-- Server version	8.0.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `valtiot`
--

DROP TABLE IF EXISTS `valtiot`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `valtiot` (
  `countryname` varchar(255) DEFAULT NULL,
  `capital` varchar(255) DEFAULT NULL,
  `population` int DEFAULT NULL,
  `continent` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `valtiot`
--

LOCK TABLES `valtiot` WRITE;
/*!40000 ALTER TABLE `valtiot` DISABLE KEYS */;
INSERT INTO `valtiot` VALUES ('Suomi','Helsinki',5616923,'Europe'),('Saksa','Berliini',83800000,'Europe'),('Kreikka','Ateena',10430000,'Europe'),('Slovakia','Bratislava',5432000,'Europe'),('Brasilia','Brasilia',215300000,'SA'),('Intia','New Delhi',1425775850,'Asia'),('Taiwan','Taipei',23503349,'Asia'),('Colombia','Bogotá',50882884,'South America'),('Iceland','Reykjavik',366425,'Europe'),('Japan','Tokyo',125836021,'Asia'),('Uruguay','Montevideo',3473727,'South America'),('Guinea-Bissau','Bissau',1967998,'Africa'),('Latvia','Riga',1901548,'Europe'),('Cyprus','Nicosia',1207361,'Europe'),('Australia','Canberra',25687041,'Oceania'),('Germany','Berlin',83240525,'Europe'),('Malaysia','Kuala Lumpur',32365998,'Asia'),('United States','Washington, D.C.',329484123,'North America'),('Ghana','Accra',31072945,'Africa'),('Nigeria','Abuja',206139587,'Africa'),('Liberia','Monrovia',5057677,'Africa'),('Eritrea','Asmara',5352000,'Africa');
/*!40000 ALTER TABLE `valtiot` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-02-04 14:14:19
