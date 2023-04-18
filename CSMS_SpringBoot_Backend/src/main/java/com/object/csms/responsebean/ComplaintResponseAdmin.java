package com.object.csms.responsebean;

public class ComplaintResponseAdmin {

	private int complaintId;
	private String companyName;
	private String customerName;
	private String ComplaintDesc;
	private String complaintStatus;
	public ComplaintResponseAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public ComplaintResponseAdmin(int complaintId, String companyName, String customerName, String complaintDesc,
			String complaintStatus) {
		super();
		this.complaintId = complaintId;
		this.companyName = companyName;
		this.customerName = customerName;
		ComplaintDesc = complaintDesc;
		this.complaintStatus = complaintStatus;
	}
	
	public ComplaintResponseAdmin(int complaintId, String complaintStatus) {
		super();
		this.complaintId = complaintId;
		this.complaintStatus = complaintStatus;
	}
	public int getComplaintId() {
		return complaintId;
	}
	public void setComplaintId(int complaintId) {
		this.complaintId = complaintId;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getComplaintDesc() {
		return ComplaintDesc;
	}
	public void setComplaintDesc(String complaintDesc) {
		ComplaintDesc = complaintDesc;
	}
	public String getComplaintStatus() {
		return complaintStatus;
	}
	public void setComplaintStatus(String complaintStatus) {
		this.complaintStatus = complaintStatus;
	}
	
}
