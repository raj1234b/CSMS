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
) ENGINE=InnoDB AUTO_INCREMENT=106 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (101,'Within City'),(102,'Within State'),(103,'Metro To Metro'),(104,'Rest Of India'),(105,'North East- J&K');
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
) ENGINE=InnoDB AUTO_INCREMENT=211 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category_pricing`
--

LOCK TABLES `category_pricing` WRITE;
/*!40000 ALTER TABLE `category_pricing` DISABLE KEYS */;
INSERT INTO `category_pricing` VALUES (201,40,2201,101),(202,150,2201,102),(203,88,2201,103),(204,170,2201,104),(205,190,2201,105),(206,35,2202,101),(207,110,2202,102),(208,130,2202,103),(209,155,2202,104),(210,175,2202,105);
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
  `company_contactno` bigint NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`company_id`),
  KEY `user_id_idx` (`user_id`),
  CONSTRAINT `company_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2203 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (2201,'Ekart Surface','ekart@gmail.com','Yavatmal',445001,9552333802,1001),(2202,'Ecom Express','ecomexpress@gmail.com','Nagpur',440001,7620809801,1003);
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
) ENGINE=InnoDB AUTO_INCREMENT=6002 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint`
--

LOCK TABLES `complaint` WRITE;
/*!40000 ALTER TABLE `complaint` DISABLE KEYS */;
INSERT INTO `complaint` VALUES (6001,3301,'Recived Damaged Product ','pending',2201);
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
) ENGINE=InnoDB AUTO_INCREMENT=220347 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `courier_details`
--

LOCK TABLES `courier_details` WRITE;
/*!40000 ALTER TABLE `courier_details` DISABLE KEYS */;
INSERT INTO `courier_details` VALUES (220343,3301,2201,5001,4001,201,'Darda nagar yavatmal','Ruikar Wadi Yavatmal','true','Shrivardhan Kekapure','Order Pick-up','2022-09-22 19:58:16'),(220344,3302,2202,5007,4007,207,'Yavatmal','Amravati','true','Ankit Hivarkar','Order Pick-up','2022-09-22 23:53:04'),(220345,3303,2201,5004,4004,203,'Wani','Bajoriya Nagar, Yavatmal','true','Gandhali Nival','Order out of Delivery','2022-09-23 00:00:51'),(220346,3304,2202,5009,4010,209,'Near Grampanchayat,Ghuikhed','Near Prince Public School, Gwalior','true','Gayatri Pande','Order out of Delivery','2022-09-23 00:06:41');
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
  `customer_contactno` bigint NOT NULL,
  `user_id` int NOT NULL,
  PRIMARY KEY (`customer_id`),
  KEY `user_id_idx` (`user_id`) /*!80000 INVISIBLE */,
  CONSTRAINT `customer_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3306 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customer`
--

LOCK TABLES `customer` WRITE;
/*!40000 ALTER TABLE `customer` DISABLE KEYS */;
INSERT INTO `customer` VALUES (3301,'Mayur Pawar','mayur0305@gmail.com','Amravati',444603,9552333803,1002),(3302,'Aman Tekade','aman99@gmail.com','YAVATMAL',445001,9890984737,1004),(3303,'Shrivardhan Kekapure','shrivardhan06@gmail.com','Wani',445002,7767990644,1005),(3304,'Shahaji Ghuikhedkar','shahu92@gmail.com','Ghuikhed',455660,9552333801,1006),(3305,'Devashish Barad','devashish12@gmail.com','Akola',441202,9511847137,1007);
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
) ENGINE=InnoDB AUTO_INCREMENT=5011 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `delivery_boy`
--

LOCK TABLES `delivery_boy` WRITE;
/*!40000 ALTER TABLE `delivery_boy` DISABLE KEYS */;
INSERT INTO `delivery_boy` VALUES (5001,'Jagmohan Reddy',7502406050,'jagmohan12@gmail.com',33,45015,2201),(5002,'Gajendra Verma',7770044310,'gajendra01@gmail.com',29,60125,2201),(5003,'Kishor Sehgal',7801236015,'kishor67@gmail.com',32,52543,2201),(5004,'Sachin Pande',7415464215,'sachin60@gmail.com',33,45612,2201),(5005,'Shashikant Tiware',9902324156,'Shashi24@gmail.com',27,65652,2201),(5006,'Ashwin Barad',9566142200,'ashbarad12@gmail.com',25,45123,2202),(5007,'Abhishek Goplani',8545126365,'abhishek37@gmail.com',34,78945,2202),(5008,'Hitendra Sharma',9987452263,'hitendra65@gmail.com',29,78963,2202),(5009,'Sunil Birase',7745968521,'sunil77@gmail.com',26,65874,2202),(5010,'Piyush Pise',7789463214,'piyush57@gmsil.com',23,46921,2202);
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
) ENGINE=InnoDB AUTO_INCREMENT=7002 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `feedback`
--

LOCK TABLES `feedback` WRITE;
/*!40000 ALTER TABLE `feedback` DISABLE KEYS */;
INSERT INTO `feedback` VALUES (7001,3301,'It is great value for money',2201);
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
) ENGINE=InnoDB AUTO_INCREMENT=1008 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1000,'admin','YWRtaW4=',1,'false'),(1001,'Ekart Surface','ZWthcnRzdXJmYWNl',2,'true'),(1002,'Mayur Pawar','bWF5dXI=',3,'false'),(1003,'Ecom Express','RWNvbUAxMjM=',2,'true'),(1004,'Aman Tekade','QW1hbkAxMjM=',3,'false'),(1005,'Shrivardhan Kekapure','U2hyaXZhcmRoYW5AMTIz',3,'false'),(1006,'Shahaji Ghuikhedkar','U2hhaGFqaUAxMjM=',3,'false'),(1007,'Devashish Barad','RGV2YXNoaXNoQDEyMw==',3,'false');
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
) ENGINE=InnoDB AUTO_INCREMENT=4011 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `vehicles_details`
--

LOCK TABLES `vehicles_details` WRITE;
/*!40000 ALTER TABLE `vehicles_details` DISABLE KEYS */;
INSERT INTO `vehicles_details` VALUES (4001,'MH31VD0001',2201),(4002,'MH27DA2712',2201),(4003,'MH30SG1130',2201),(4004,'MH29OP0305',2201),(4005,'MH37BQ4566',2201),(4006,'MH40FC3365',2202),(4007,'MH49AL6641',2202),(4008,'MH33PQ5452',2202),(4009,'MH34FD6542',2202),(4010,'MH32GF3165',2202);
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

-- Dump completed on 2022-09-23 22:18:41
