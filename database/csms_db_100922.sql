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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_pricing`
--

LOCK TABLES `category_pricing` WRITE;
/*!40000 ALTER TABLE `category_pricing` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'redex','redex@gmail.com','pune',444110,789654321,4),(2,'redexxxx','redexxxx@gmail.com','amravati',444111,789654321,6),(3,'eco','eco@gmail.com','akola',445001,132654789,7),(4,'CDAC','mayurpawar0305@gmail.com','Amravati',444603,789654321,8),(5,'code','code@gmail.com','akola',789456,78954,9),(6,'aman','aman@gmail.com','yavatmal',445001,546321,10),(7,'sha','sha@gmail.com','guikhed',546321,897654213,17),(8,'reg','reg@gmail.com','amt',654321,645897,18),(9,'reg1','reg1@gmail.com','amt1',654321,645897,19);
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
  `complaint_status` varchar(45) NOT NULL,
  PRIMARY KEY (`complaint_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `complaint_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint`
--

LOCK TABLES `complaint` WRITE;
/*!40000 ALTER TABLE `complaint` DISABLE KEYS */;
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
  `delivery_boy_id` int NOT NULL,
  `vehicles_details_id` int NOT NULL,
  `category_pricing_id` int NOT NULL,
  `courier_pickup` varchar(200) NOT NULL,
  `courier_delivery` varchar(200) NOT NULL,
  `courier_status` varchar(100) NOT NULL,
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier_details`
--

LOCK TABLES `courier_details` WRITE;
/*!40000 ALTER TABLE `courier_details` DISABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (3,'amann','amann@gmail.com','ytl',321654,321654,12),(4,'amann1','amann@gmail.com','ytl',321654,321654,13),(5,'shri','shri@gmail.com','ytl',789654,321654,16);
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
  `delivery_boy_contactno` int NOT NULL,
  `delivery_boy_emailid` varchar(100) NOT NULL,
  `delivery_boy_age` int NOT NULL,
  `delivery_boy_license` int NOT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`delivery_boy_id`),
  KEY `company_id_idx` (`company_id`),
  CONSTRAINT `del_company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_boy`
--

LOCK TABLES `delivery_boy` WRITE;
/*!40000 ALTER TABLE `delivery_boy` DISABLE KEYS */;
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
  PRIMARY KEY (`feedback_id`),
  KEY `customer_id` (`customer_id`),
  CONSTRAINT `feedback_ibfk_1` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
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
  `user_status` varchar(20) DEFAULT 'false',
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'adminn','mayur0305',1,'false'),(3,'admin','admin',1,'false'),(4,'redex','redex123',2,NULL),(5,'redexx','redex1234',2,NULL),(6,'redex1','redex1234',2,NULL),(7,'eco','eco',2,NULL),(8,'CDAC','mayur',2,NULL),(9,'code','code',2,NULL),(10,'aman','aman',2,NULL),(12,'amann','amann',3,'false'),(13,'amann1','amann1',3,'false'),(16,'shri','shri',3,NULL),(17,'sha','sha',2,NULL),(18,'reg','reg',2,NULL),(19,'reg1','reg1',2,NULL);
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
  `vehicles_details_no` int NOT NULL,
  `company_id` int NOT NULL,
  PRIMARY KEY (`vehicles_details_id`),
  KEY `company_id_idx` (`company_id`),
  CONSTRAINT `company_id` FOREIGN KEY (`company_id`) REFERENCES `company` (`company_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles_details`
--

LOCK TABLES `vehicles_details` WRITE;
/*!40000 ALTER TABLE `vehicles_details` DISABLE KEYS */;
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

-- Dump completed on 2022-09-10 16:32:26
