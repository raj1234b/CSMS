package com.object.csms.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;
@Entity
@Table(name="customer")
public class Customer {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer customerId;
	
	@Column(name="customer_name")
	private String customerName;
	
	@Column(name="customer_emailid")
	private String customerEmail;
	
	@Column(name="customer_city")
	private String customerCity;
	
	@Column(name="customer_pincode")
	private Integer customerPincode;
	
	@Column(name="customer_contactno")
	private Long customerContactNo;	
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="user_Id", referencedColumnName = "userId")
	private User user;
	
	public Customer() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Customer(Integer customerId, String customerName, String customerEmail, String customerCity, Integer customerPincode,
			Long customerContactNo, User user) {
		super();
		this.customerId = customerId;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerCity = customerCity;
		this.customerPincode = customerPincode;
		this.customerContactNo = customerContactNo;
		this.user = user;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getCustomerName() {
		return customerName;
	}

	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustomerCity() {
		return customerCity;
	}

	public void setCustomerCity(String customerCity) {
		this.customerCity = customerCity;
	}

	public Integer getCustomerPincode() {
		return customerPincode;
	}

	public void setCustomerPincode(Integer customerPincode) {
		this.customerPincode = customerPincode;
	}

	public Long getCustomerContactNo() {
		return customerContactNo;
	}

	public void setCustomerContactNo(Long customerContactNo) {
		this.customerContactNo = customerContactNo;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}
	
}
