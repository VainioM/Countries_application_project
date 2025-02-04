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
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `ID` int DEFAULT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `UserName` varchar(255) DEFAULT NULL,
  `Hash` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (NULL,'qwertygmail.com','Testperson1','asdfghjkl'),(NULL,'qwertyfgfdgmail.com','Testperson2','asdfghjklgfds'),(NULL,'qwertyfgeeeeefdgmail.com','Testperson3','asdfghjklgfeeds'),(NULL,'asd','asd','qwe'),(NULL,'testing@gmail.com','asd','qwe'),(NULL,'testing@gmail.com','Person_1','qwerty'),(NULL,'testing@gmail.com','Person_1','$2b$10$wtOXogC1sW7Fyd2wxSLCYuqXS17ZwHzQ6f0/CIKHapHQm94U6fY1W'),(NULL,'testing@gmail.com','Person_1','$2b$10$DlKUjTakHbL1DHb2FtJ1oekMK9OigxDIGJL4E9FF9YvYWhxUqnsoa'),(NULL,'testing@gmail.com','Person_1','$2b$10$bUFq6ULSb1oJtabVxeQX.OTRuv1FZ08iQFgdnb3Bb3htLptKOYrSi'),(NULL,'testing@gmail.com','Person_1','$2b$10$2xtPAEr.udBeZ.Wx3iyiW.wJ059DjgBKg1fRe6fOoGqzhTbNv9Vya'),(NULL,'testing@gmail.com','Person_1','$2b$11$MeCoLD0isEVuORQEBcpJdu81CWIsnK4BbdDZ3fO0a3d.Isd8PuhHe'),(NULL,'testing@gmail.com','Person_1','$2b$12$KztLZgCq7Hu.//IFMXRtceDOt.C/rntqhaHxPs/Evt3bXMNLEjTfC'),(NULL,'testing@gmail.com','Person_1','$2b$10$H5/aCSIC4qINXS8jHHRJSOdGxbbnhyU716O7AmCaEos/HVkS/G2Zi'),(NULL,'testing@gmail.com','Person_1','$2b$10$DNicU.3KpSr.5VqKnlYyMexhODrNsKliTiOXzdBhQjMCWBVbNzSiW'),(NULL,'testing@gmail.com','Person_1','$2b$10$9360txXtsPtO6w7k.gt1f.t/eegXHf5grRm9X7QFGU6CNGJmnZhCm'),(NULL,'testing@gmail.com','Person_1','$2b$10$8rhychvEKmwkthKZE2DumOzDod/jJ23Q.mTbJ0JFfpHbVTdx08vL6'),(NULL,'testing@gmail.com','Person_1','$2b$10$eeYZsO1fPrHpWYsS8viOO.JJB7rj/UflXhxxuhdOrHUECMD3HEapS'),(NULL,'testing@gmail.com','Person_1','$2b$10$vt2dxZ4McIDI15l9YggUM.livmp/Aa4WOym.nmkvXPp.GNrvJ.Q9.'),(NULL,'testing@gmail.com','Person_1','$2b$13$EHtUaZW0OInKTtCptWY/I.qPw3cnQcusFg5fOxxxwTG.LGAWzmhPy'),(NULL,'testing@gmail.com','Person_1','$2b$13$jFrR.t0p2DxJN2SnrRHf...cu93dFVU1eaTXgCYlSLsHGpS1.ROgK'),(NULL,'testing@gmail.com','loginperson','$2b$13$UKzYQByjg3i22sE1ze3kBuAGOG6fUxaAuNMISpbeAur.dKjwEcyiu'),(NULL,'testing@gmail.com','login','$2b$13$UOgsl80BGn2OApiTwJGSmewaZhnpSJj/zQEOwRLkVLPbpyRnt5tu6'),(NULL,'testing@gmail.com','lollero','$2b$13$TB0lV009g/06bEtnkGDfveilrcH2XI6I2NQtiqKYBd26V83RvvRaO');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
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
