package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="delivery_boy")
public class DeliveryBoy {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int deliveryBoyId;
	
	@Column(name="delivery_boy_name",nullable=false)
	private String deliveryBoyName;
	
	@Column(name="delivery_boy_contactno",nullable=false)
	private Long deliveryBoyContactNo;
	
	@Column(name="delivery_boy_emailid",nullable=false)
	private String deliveryBoyEmail;
	
	@Column(name="delivery_boy_age",nullable=false)
	private int deliveryBoyAge;
	
	@Column(name="delivery_boy_license",nullable=false)
	private int deliveryBoyLicense;
	
	@Column(name="company_id",nullable=false)
	private int companyId;

	public DeliveryBoy() {
		super();
		// TODO Auto-generated constructor stub
	}

	public DeliveryBoy(Integer deliveryBoyId, String deliveryBoyName, Long deliveryBoyContactNo, String deliveryBoyEmail,
			Integer deliveryBoyAge, Integer deliveryBoyLicense, Integer companyId) {
		super();
		this.deliveryBoyId = deliveryBoyId;
		this.deliveryBoyName = deliveryBoyName;
		this.deliveryBoyContactNo = deliveryBoyContactNo;
		this.deliveryBoyEmail = deliveryBoyEmail;
		this.deliveryBoyAge = deliveryBoyAge;
		this.deliveryBoyLicense = deliveryBoyLicense;
		this.companyId = companyId;
	}

	public Integer getDeliveryBoyId() {
		return deliveryBoyId;
	}

	public void setDeliveryBoyId(Integer deliveryBoyId) {
		this.deliveryBoyId = deliveryBoyId;
	}

	public String getDeliveryBoyName() {
		return deliveryBoyName;
	}

	public void setDeliveryBoyName(String deliveryBoyName) {
		this.deliveryBoyName = deliveryBoyName;
	}

	public Long getDeliveryBoyContactNo() {
		return deliveryBoyContactNo;
	}

	public void setDeliveryBoyContactNo(Long deliveryBoyContactNo) {
		this.deliveryBoyContactNo = deliveryBoyContactNo;
	}

	public String getDeliveryBoyEmail() {
		return deliveryBoyEmail;
	}

	public void setDeliveryBoyEmail(String deliveryBoyEmail) {
		this.deliveryBoyEmail = deliveryBoyEmail;
	}

	public Integer getDeliveryBoyAge() {
		return deliveryBoyAge;
	}

	public void setDeliveryBoyAge(Integer deliveryBoyAge) {
		this.deliveryBoyAge = deliveryBoyAge;
	}

	public Integer getDeliveryBoyLicense() {
		return deliveryBoyLicense;
	}

	public void setDeliveryBoyLicense(Integer deliveryBoyLicense) {
		this.deliveryBoyLicense = deliveryBoyLicense;
	}

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

	
}

