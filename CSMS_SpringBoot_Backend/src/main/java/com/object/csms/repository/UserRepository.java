package com.object.csms.repository;

import java.util.*;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.User;
@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	@Query("select d from User d where userUsername = :username and userPassword = :password")
	public Optional<User> checkLogin(String username,String password);
	
	
	@Query("select d from User d where userStatus =:state and userRole=:role")
	public List<User> findByStatus(String state,int role);

	@Query("select count(d) from User d where d.userStatus ='false' and d.userRole=2")
	public int getPendingCount();

}
