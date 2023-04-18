package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="vehicles_details")
public class VehicleDetails {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer vehiclesDetailsId;
	
	@Column(name="vehicles_details_no",nullable=false)
	private String vehiclesDetailsNo;
	
	@Column(name="company_id",nullable=false)
	private Integer companyId;

	public VehicleDetails() {
		super();
		// TODO Auto-generated constructor stub
	}

	public VehicleDetails(Integer vehicleDetailsId, String vehiclesDetailsNo, Integer companyId) {
		super();
		this.vehiclesDetailsId = vehicleDetailsId;
		this.vehiclesDetailsNo = vehiclesDetailsNo;
		this.companyId = companyId;
	}

	public Integer getVehicleDetailsId() {
		return vehiclesDetailsId;
	}

	public void setVehicleDetailsId(Integer vehicleDetailsId) {
		this.vehiclesDetailsId = vehicleDetailsId;
	}

	public String getVehiclesDetailsNo() {
		return vehiclesDetailsNo;
	}

	public void setVehiclesDetailsNo(String vehiclesDetailsNo) {
		this.vehiclesDetailsNo = vehiclesDetailsNo;
	}

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

	
}
