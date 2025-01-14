-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: challenge_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `orders`
--

DROP TABLE IF EXISTS `orders`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `orders` (
  `id` varchar(50) DEFAULT NULL,
  `customers_name` varchar(50) DEFAULT NULL,
  `item` varchar(12) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `status` varchar(9) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `orders`
--

LOCK TABLES `orders` WRITE;
/*!40000 ALTER TABLE `orders` DISABLE KEYS */;
INSERT INTO `orders` VALUES ('3c6ba31d-b492-ad87-fcd0-0181cee00bd0','Christa Argo','Power Supply',2,'cancelled','2024-11-11 14:55:33'),('f89dd068-bcd8-c69b-7b1c-7e5dadabbda2','Jillie Bonallick','Case',1,'pending','2024-11-11 14:55:33'),('00ccbde7-69dd-0dcd-e0c1-481f73fea931','Freddy Moffatt','Keyboard',4,'completed','2024-11-11 14:55:33'),('e0aafbc1-0050-7ece-e846-65b161fab9fa','Paxon Algy','Case',1,'pending','2024-11-11 14:55:33'),('39d9c2c8-e6ea-2cc3-b052-ecb17c6dec69','Florian McCarry','CPU',3,'completed','2024-11-11 14:55:33'),('deefed76-4781-bdbc-5ccc-1825a7b83c4f','Carlita Landis','SSD',2,'completed','2024-11-11 14:55:33'),('c0bf93a7-f7fa-a610-524e-e70c0edd4e75','Thalia Dargan','Cooling Fan',1,'cancelled','2024-11-11 14:55:33'),('ea826622-ebfa-d3ce-cd8c-37ffd6e5db59','Ely Brangan','CPU',1,'cancelled','2024-11-11 14:55:33'),('5febe983-5dca-041f-a3b6-1fde18fae00f','Ophelie Wasteney','Power Supply',1,'pending','2024-11-11 14:55:33'),('e0c93bb5-153a-87e0-3cf5-4a61e4a171f9','Rasia Lodo','Cooling Fan',4,'completed','2024-11-11 14:55:33'),('fd497150-dadb-c5a6-ad94-a7a0818dca0a','Staffard Dagless','Cooling Fan',3,'cancelled','2024-11-11 14:55:33'),('1be50a75-8481-0be3-e8b1-a5a7bf88cd62','Risa Matoshin','Motherboard',1,'pending','2024-11-11 14:55:33'),('99c7efca-957b-ef6b-19bb-988bcfaf0d5a','Jamill Schutze','Mouse',2,'completed','2024-11-11 14:55:33'),('eac61a03-1f3a-e31a-0e1a-3fe861d32aa4','Hoebart Katzmann','Case',1,'pending','2024-11-11 14:55:33'),('9fc4e548-ddbe-89cb-ec52-ca4e7815a7ca','Alisha Willishire','CPU',4,'completed','2024-11-11 14:55:33'),('17ebfbfd-b4c1-bcc0-0ebb-b676edb16cae','Sergei Harriss','Keyboard',1,'cancelled','2024-11-11 14:55:33'),('e2c4a326-fb31-928b-e4ac-d8c58081fe9d','Clarinda Sunley','Cooling Fan',2,'pending','2024-11-11 14:55:33'),('500d75f3-83f9-11ea-fade-aad9d69e22c6','Russ Batho','Keyboard',1,'completed','2024-11-11 14:55:33'),('9d490987-76db-7ca0-83f1-b32cab392728','Dewey Clemenzo','Cooling Fan',4,'completed','2024-11-11 14:55:33'),('b7c85b3c-d6dc-07bb-785c-aba033b7fff9','Karilynn Napton','Keyboard',4,'completed','2024-11-11 14:55:33');
/*!40000 ALTER TABLE `orders` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-12 16:58:44
