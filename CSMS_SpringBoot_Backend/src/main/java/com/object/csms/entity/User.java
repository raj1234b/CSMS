package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import org.springframework.beans.factory.annotation.Value;


@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer userId;
	
   
    @Column(nullable = false,name="user_password")
    private String userPassword;
     
    @Column(nullable = false,name="user_role")
    private Integer userRole;
     
    @Column(name="user_status")
    @Value("false")
    private String userStatus;
    
    @Column(nullable = false, name="user_username")
    private String userUsername;

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public User(Integer userId, String userPassword, Integer userRole, String userStatus, String userUsername) {
		super();
		this.userId = userId;
		this.userPassword = userPassword;
		this.userRole = userRole;
		this.userStatus = userStatus;
		this.userUsername = userUsername;
	}

	public Integer getUserId() {
		return userId;
	}

	public void setUserId(Integer userId) {
		this.userId = userId;
	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public Integer getUserRole() {
		return userRole;
	}

	public void setUserRole(Integer userRole) {
		this.userRole = userRole;
	}

	public String getUserStatus() {
		return userStatus;
	}

	public void setUserStatus(String userStatus) {
		this.userStatus = userStatus;
	}

	public String getUserUsername() {
		return userUsername;
	}

	public void setUserUsername(String userUsername) {
		this.userUsername = userUsername;
	}

}
