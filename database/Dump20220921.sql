-- MySQL dump 10.13  Distrib 8.0.29, for Win64 (x86_64)
--
-- Host: localhost    Database: csms
-- ------------------------------------------------------
-- Server version	8.0.29

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
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL AUTO_INCREMENT,
  `category_name` varchar(100) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'Within City'),(2,'Within State'),(3,'Metro To Metro'),(4,'Rest of India'),(5,'North East, J&K');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category_pricing`
--

DROP TABLE IF EXISTS `category_pricing`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category_pricing` (
  `category_pricing_id` int NOT NULL AUTO_INCREMENT,
  `category_price` int NOT NULL,
  `company_id` int NOT NULL,
  `category_id` int NOT NULL,
  PRIMARY KEY (`category_pricing_id`),
  KEY `cat_company_id_idx` (`company_id`),
  KEY `cat_category_id_idx` (`category_id`),
  CONSTRAINT `cat_category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`),
  CONSTRAINT `cat_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=35 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_pricing`
--

LOCK TABLES `category_pricing` WRITE;
/*!40000 ALTER TABLE `category_pricing` DISABLE KEYS */;
INSERT INTO `category_pricing` VALUES (1,85,25,1),(2,140,25,2),(3,160,25,3),(4,250,25,4),(5,290,25,5),(15,70,33,1),(16,95,33,2),(17,110,33,3),(18,140,33,4),(19,240,33,5),(20,85,22,1),(21,99,22,2),(22,110,22,3),(23,135,22,4),(24,185,22,5),(25,75,1,1),(26,86,1,2),(27,110,1,3),(28,140,1,4),(29,185,1,5),(30,85,27,1),(31,99,27,2),(32,120,27,3),(33,141,27,4),(34,155,27,5);
/*!40000 ALTER TABLE `category_pricing` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `company_id` int NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL,
  `company_emailid` varchar(100) NOT NULL,
  `company_city` varchar(100) NOT NULL,
  `company_pincode` int NOT NULL,
  `company_contactno` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`company_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `company_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'redex','redex@gmail.com','pune',444110,789654321,4),(2,'redexxxx','redexxxx@gmail.com','amravati',444111,789654321,6),(22,'always','always@gmail.com','pune',455001,758942,32),(25,'Bluedart','bluedart@gmail.com','Amravati ',444603,72322446,37),(26,'delhivery','delhivery@gmail.com','pune',451001,978654,38),(27,'dotzot','dotzot@gmail.com','amravati',456123,654978,39),(28,'ecom exp','ecomexp@gmail.com','yavatmal',123456,1856874,40),(29,'fedex','fedex@gmail.com','bhandara',789456,159753,41),(30,'rapid','rapid@gmail.com','mumbai',489256,78945612,42),(31,'wow express','wow@gmail.com','goa',751492,7541392,43),(32,'wayexpress','wayexpress@gmail.com','aurangabad',789456,78945612,44),(33,'westernunion','western@gmail.com','akot',789789,78945,45);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `complaint`
--

DROP TABLE IF EXISTS `complaint`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `complaint` (
  `complaint_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `complaint_description` varchar(200) NOT NULL,
  `complaint_status` varchar(100) NOT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`complaint_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `complaint_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint`
--

LOCK TABLES `complaint` WRITE;
/*!40000 ALTER TABLE `complaint` DISABLE KEYS */;
INSERT INTO `complaint` VALUES (1,5,'delivery is late','0',NULL),(2,8,'delivery is late','',33),(3,8,'delay','',33),(4,8,'error','',22),(5,7,'delivery is late','',1),(6,5,'delivery is late','',27);
/*!40000 ALTER TABLE `complaint` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `courier_details`
--

DROP TABLE IF EXISTS `courier_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `courier_details` (
  `courier_details_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `company_id` int NOT NULL,
  `delivery_boy_id` int DEFAULT NULL,
  `vehicles_details_id` int DEFAULT NULL,
  `category_pricing_id` int NOT NULL,
  `pickupaddress` varchar(200) NOT NULL,
  `deliveryaddress` varchar(200) NOT NULL,
  `paymentstatus` varchar(100) DEFAULT NULL,
  `receivername` varchar(100) NOT NULL,
  `trackingstatus` varchar(100) DEFAULT NULL,
  `requesttiming` datetime DEFAULT NULL,
  PRIMARY KEY (`courier_details_id`),
  KEY `co_company_name_idx` (`company_id`),
  KEY `co_delivery_boy_id_idx` (`delivery_boy_id`),
  KEY `co_vehicles_details_id_idx` (`vehicles_details_id`),
  KEY `co_category_pricing_id_idx` (`category_pricing_id`) /*!80000 INVISIBLE */,
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `co_category_pricing_id` FOREIGN KEY (`category_pricing_id`) REFERENCES `category_pricing` (`category_pricing_id`),
  CONSTRAINT `co_company_name` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`),
  CONSTRAINT `co_delivery_boy_id` FOREIGN KEY (`delivery_boy_id`) REFERENCES `delivery_boy` (`delivery_boy_id`),
  CONSTRAINT `co_vehicles_details_id` FOREIGN KEY (`vehicles_details_id`) REFERENCES `vehicles_details` (`vehicles_details_id`),
  CONSTRAINT `courier_details_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=220363 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier_details`
--

LOCK TABLES `courier_details` WRITE;
/*!40000 ALTER TABLE `courier_details` DISABLE KEYS */;
INSERT INTO `courier_details` VALUES (220343,7,25,14,15,3,'amravati','pune','true','rohit','Order Pick-up',NULL),(220344,7,25,14,15,3,'yavatmal','amravati','true','yash','approved',NULL),(220348,7,33,12,14,5,'yavatmal','akola','false','yash',NULL,'2022-09-18 19:24:47'),(220350,7,33,10,9,5,'Pune','Pune','false','rohit',NULL,'2022-09-19 03:27:47'),(220351,7,22,9,10,5,'amravtai','akot','false','akshayy',NULL,'2022-09-19 03:33:19'),(220352,7,25,17,15,5,'Pune','Pune','false','rohit','Order out of Delivery','2022-09-19 03:55:52'),(220354,7,33,12,12,16,'Akola','Amravati','true','Yash',NULL,'2022-09-19 10:36:34'),(220355,7,33,14,13,17,'Akola','Amravati','true','Yash',NULL,'2022-09-19 10:37:17'),(220356,7,33,14,14,17,'Akola','Amravati','false','Yash',NULL,'2022-09-19 10:37:41'),(220357,7,22,15,15,19,'Akola','Amravati','false','Yash',NULL,'2022-09-19 10:41:03'),(220358,7,22,11,9,19,'Akola','Amravati','false','Yash',NULL,'2022-09-19 10:41:56'),(220359,7,33,10,10,3,'amravati','akola','false','yash',NULL,'2022-09-19 10:45:20'),(220360,8,25,11,13,2,'Jalgaon','Nashik','false','Naresh','Order Pick-up','2022-09-19 22:28:52'),(220361,7,1,NULL,NULL,27,'jaipur','delhi','false','Patil sir','ORDER RECEIVED','2022-09-20 12:10:22'),(220362,5,27,19,25,32,'Amravati','Yavatmal','false','Rajesh','Order Pick-up','2022-09-21 01:32:54');
/*!40000 ALTER TABLE `courier_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customer`
--

DROP TABLE IF EXISTS `customer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customer` (
  `customer_id` int NOT NULL AUTO_INCREMENT,
  `customer_name` varchar(100) NOT NULL,
  `customer_emailid` varchar(100) NOT NULL,
  `customer_city` varchar(100) NOT NULL,
  `customer_pincode` int NOT NULL,
  `customer_contactno` int NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`customer_id`),
  KEY `user_id_idx` (`user_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `customer_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (3,'amann','amann@gmail.com','ytl',321654,321654,12),(4,'amann1','amann@gmail.com','ytl',321654,321654,13),(5,'shri','shri@gmail.com','ytl',789654,321654,16),(6,'uuu','uuu@gmail.com','uuu',798654,7986541,36),(7,'mayur','mayurpawar0305@gmail.com','Amravati',444603,95520307,46),(8,'Ajay','ajay@gmail.com','Jalgaon',741852,789456123,48);
/*!40000 ALTER TABLE `customer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `delivery_boy`
--

DROP TABLE IF EXISTS `delivery_boy`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `delivery_boy` (
  `delivery_boy_id` int NOT NULL AUTO_INCREMENT,
  `delivery_boy_name` varchar(100) NOT NULL,
  `delivery_boy_contactno` bigint NOT NULL,
  `delivery_boy_emailid` varchar(100) NOT NULL,
  `delivery_boy_age` int NOT NULL,
  `delivery_boy_license` int NOT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`delivery_boy_id`),
  KEY `company_id_idx` (`company_id`),
  CONSTRAINT `del_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_boy`
--

LOCK TABLES `delivery_boy` WRITE;
/*!40000 ALTER TABLE `delivery_boy` DISABLE KEYS */;
INSERT INTO `delivery_boy` VALUES (7,'aman',65478921,'aman@gmail.com',36,789465,1),(8,'shrivardhan',321645,'shrivardhan@gmail.com',42,785123,1),(9,'shahaji',7541266,'shahaji@gmail.com',42,751266,1),(10,'aman',789654213,'aman@gmail.com',24,74256,25),(11,'shrivardhan',798654,'shrivardhan@gmail.com',34,7845,25),(12,'shahaji',57645638,'shahaji@gmail.com',43,8768,25),(14,'amit',79854,'amit@gmail.com',24,78451,25),(15,'amit',789465,'amit@gmail.com',26,7541,30),(16,'devashish',884122,'devashish@gmail.com',34,8521,30),(17,'yogesh',7894612,'yogesh@gmail.com',36,79942,25),(18,'Ajinkya Kalbhor',789456123,'ajinkya@gmail.com',34,789456,1),(19,'Devashish Barad',78945126,'devashish@gmail.com',25,159357,27);
/*!40000 ALTER TABLE `delivery_boy` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `feedback`
--

DROP TABLE IF EXISTS `feedback`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `feedback` (
  `feedback_id` int NOT NULL AUTO_INCREMENT,
  `customer_id` int NOT NULL,
  `feedback_description` varchar(200) NOT NULL,
  `company_id` int DEFAULT NULL,
  PRIMARY KEY (`feedback_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (1,5,'service is good',NULL),(2,8,'service is good',33),(3,8,'good service',33),(4,8,'good service',22),(5,8,'good',22),(6,7,'service is good',1),(7,5,'delivery boy was fast',27);
/*!40000 ALTER TABLE `feedback` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_username` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_role` int NOT NULL,
  `user_status` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=49 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'admin','admin',1,'false'),(4,'redex','redex123',2,'true'),(6,'redex1','redex1234',2,'false'),(12,'amann','amann',3,'false'),(13,'amann1','amann1',3,'false'),(16,'shri','shri',3,'false'),(32,'always','always',2,'true'),(36,'uuu','uuu',3,'false'),(37,'Bluedart','bluedart',2,'true'),(38,'delhivery','delhivery',2,'false'),(39,'dotzot','dotzot',2,'true'),(40,'ecom exp','ecomexp',2,'false'),(41,'fedex','fedex',2,'false'),(42,'rapid','rapid',2,'false'),(43,'wow express','wow',2,'false'),(44,'wayexpress','wayexpress',2,'false'),(45,'westernunion','western',2,'true'),(46,'mayur','mayur',3,'false'),(48,'Ajay','ajay',3,'false');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `vehicles_details`
--

DROP TABLE IF EXISTS `vehicles_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `vehicles_details` (
  `vehicles_details_id` int NOT NULL AUTO_INCREMENT,
  `vehicles_details_no` varchar(45) NOT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`vehicles_details_id`),
  KEY `company_id_idx` (`company_id`),
  CONSTRAINT `company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles_details`
--

LOCK TABLES `vehicles_details` WRITE;
/*!40000 ALTER TABLE `vehicles_details` DISABLE KEYS */;
INSERT INTO `vehicles_details` VALUES (9,'MH29DV0612',1),(10,'MH29AA0081',1),(11,'MH27CH5566',1),(12,'MH27F9846',1),(13,'MH31H2335',25),(14,'MH12RT6789',25),(15,'MH29RF3578',25),(17,'MH31HS2335',25),(21,'MH27CH5566',30),(22,'MH34BC1234',30),(23,'MH29AA0081',30),(24,'MH29BC7415',1),(25,'MH27AK1212',27);
/*!40000 ALTER TABLE `vehicles_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-09-21  1:43:06
