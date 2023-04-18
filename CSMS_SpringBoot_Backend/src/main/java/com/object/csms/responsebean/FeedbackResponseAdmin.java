package com.object.csms.responsebean;

public class FeedbackResponseAdmin {

	private int feedbackId;
	private String customerName;
	private String companyName;
	private String feedbackDesc;
	public FeedbackResponseAdmin() {
		super();
		// TODO Auto-generated constructor stub
	}
	public FeedbackResponseAdmin(int feedbackId, String customerName, String companyName, String feedbackDesc) {
		super();
		this.feedbackId = feedbackId;
		this.customerName = customerName;
		this.companyName = companyName;
		this.feedbackDesc = feedbackDesc;
	}
	public int getFeedbackId() {
		return feedbackId;
	}
	public void setFeedbackId(int feedbackId) {
		this.feedbackId = feedbackId;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getFeedbackDesc() {
		return feedbackDesc;
	}
	public void setFeedbackDesc(String feedbackDesc) {
		this.feedbackDesc = feedbackDesc;
	}
	
}
