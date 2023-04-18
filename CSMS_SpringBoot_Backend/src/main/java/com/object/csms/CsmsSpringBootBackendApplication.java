package com.object.csms;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@ComponentScan(basePackages = "com.object.csms.*")
@EnableTransactionManagement
public class CsmsSpringBootBackendApplication {

	
	
	public static void main(String[] args) {
		SpringApplication.run(CsmsSpringBootBackendApplication.class, args);


	}

}
