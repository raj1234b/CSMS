package com.object.csms.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="complaint")
public class Complaint {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer complaintId;	

	@Column(name="company_id")
	private Integer companyId;	

	@Column (name="complaint_description",nullable=false)
	private String complaintDescription;
	
	@Column(name="customer_id",nullable=false)
	private Integer customerId;

	@Column (name="complaint_status",nullable=false)
	private String complaintStatus;

	public Complaint(Integer complaintId, Integer companyId, String complaintDescription, Integer customerId,
			String complaintStatus) {
		super();
		this.complaintId = complaintId;
		this.companyId = companyId;
		this.complaintDescription = complaintDescription;
		this.customerId = customerId;
		this.complaintStatus = complaintStatus;
	}

	public Integer getComplaintId() {
		return complaintId;
	}

	public void setComplaintId(Integer complaintId) {
		this.complaintId = complaintId;
	}

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

	public String getComplaintDescription() {
		return complaintDescription;
	}

	public void setComplaintDescription(String complaintDescription) {
		this.complaintDescription = complaintDescription;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
	}

	public String getComplaintStatus() {
		return complaintStatus;
	}

	public void setComplaintStatus(String complaintStatus) {
		this.complaintStatus = complaintStatus;
	}

	public Complaint() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
