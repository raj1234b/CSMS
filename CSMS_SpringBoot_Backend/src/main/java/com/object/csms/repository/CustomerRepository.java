package com.object.csms.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


import com.object.csms.entity.Customer;
@Repository
public interface CustomerRepository extends CrudRepository<Customer, Integer> {

	@Query("select d from Customer d where User_Id=:id")
	public Optional<Customer> findByUserId(int id);
	
	@Modifying
	//@Query(value="DELETE from Customer c where c.Customer_Id =:id")
	public void deleteById(int id);
}
