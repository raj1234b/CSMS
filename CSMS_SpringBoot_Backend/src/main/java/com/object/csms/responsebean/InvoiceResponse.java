package com.object.csms.responsebean;

import java.util.Date;

public class InvoiceResponse {

	private Integer trackingId;
	private String customerName;
	private String customerEmail;
	private Long customerContactNo;
	private String companyName;
	private String companyEmail;
	private Long companyContactNo;
	private String deliveryBoyName;
	private String deliveryBoyEmail;
	private Long deliveryBoyContactNo;
	private String vehiclesDetailsNo;
	private String categoryName;
	private Integer categoryPrice;
	private String pickupAddress;
	private String receiverName;
	private String deliveryAddress;
	private String paymentStatus;
	private String trackingStatus;
	private Date orderDateTime;
	public InvoiceResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

	public InvoiceResponse(Integer trackingId, String customerName, String customerEmail, Long customerContactNo,
			String companyName, String companyEmail, Long companyContactNo, String deliveryBoyName,
			String deliveryBoyEmail, Long deliveryBoyContactNo, String vehiclesDetailsNo, String categoryName,
			Integer categoryPrice, String pickupAddress, String receiverName, String deliveryAddress,
			String paymentStatus, String trackingStatus, Date orderDateTime) {
		super();
		this.trackingId = trackingId;
		this.customerName = customerName;
		this.customerEmail = customerEmail;
		this.customerContactNo = customerContactNo;
		this.companyName = companyName;
		this.companyEmail = companyEmail;
		this.companyContactNo = companyContactNo;
		this.deliveryBoyName = deliveryBoyName;
		this.deliveryBoyEmail = deliveryBoyEmail;
		this.deliveryBoyContactNo = deliveryBoyContactNo;
		this.vehiclesDetailsNo = vehiclesDetailsNo;
		this.categoryName = categoryName;
		this.categoryPrice = categoryPrice;
		this.pickupAddress = pickupAddress;
		this.receiverName = receiverName;
		this.deliveryAddress = deliveryAddress;
		this.paymentStatus = paymentStatus;
		this.trackingStatus = trackingStatus;
		this.orderDateTime = orderDateTime;
	}

	public Integer getTrackingId() {
		return trackingId;
	}
	public void setTrackingId(Integer trackingId) {
		this.trackingId = trackingId;
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
	public Long getCustomerContactNo() {
		return customerContactNo;
	}
	public void setCustomerContactNo(Long customerContactNo) {
		this.customerContactNo = customerContactNo;
	}
	public String getCompanyName() {
		return companyName;
	}
	public void setCompanyName(String companyName) {
		this.companyName = companyName;
	}
	public String getCompanyEmail() {
		return companyEmail;
	}
	public void setCompanyEmail(String companyEmail) {
		this.companyEmail = companyEmail;
	}
	public Long getCompanyContactNo() {
		return companyContactNo;
	}
	public void setCompanyContactNo(Long companyContactNo) {
		this.companyContactNo = companyContactNo;
	}
	public String getDeliveryBoyName() {
		return deliveryBoyName;
	}
	public void setDeliveryBoyName(String deliveryBoyName) {
		this.deliveryBoyName = deliveryBoyName;
	}
	public String getDeliveryBoyEmail() {
		return deliveryBoyEmail;
	}
	public void setDeliveryBoyEmail(String deliveryBoyEmail) {
		this.deliveryBoyEmail = deliveryBoyEmail;
	}
	public Long getDeliveryBoyContactNo() {
		return deliveryBoyContactNo;
	}
	public void setDeliveryBoyContactNo(Long deliveryBoyContactNo) {
		this.deliveryBoyContactNo = deliveryBoyContactNo;
	}
	public String getVehiclesDetailsNo() {
		return vehiclesDetailsNo;
	}
	public void setVehiclesDetailsNo(String vehiclesDetailsNo) {
		this.vehiclesDetailsNo = vehiclesDetailsNo;
	}
	public String getCategoryName() {
		return categoryName;
	}
	public void setCategoryName(String categoryName) {
		this.categoryName = categoryName;
	}
	public Integer getCategoryPrice() {
		return categoryPrice;
	}
	public void setCategoryPrice(Integer categoryPrice) {
		this.categoryPrice = categoryPrice;
	}
	public String getPickupAddress() {
		return pickupAddress;
	}
	public void setPickupAddress(String pickupAddress) {
		this.pickupAddress = pickupAddress;
	}
	public String getReceiverName() {
		return receiverName;
	}
	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}
	public String getDeliveryAddress() {
		return deliveryAddress;
	}
	public void setDeliveryAddress(String deliveryAddress) {
		this.deliveryAddress = deliveryAddress;
	}
	public String getPaymentStatus() {
		return paymentStatus;
	}
	public void setPaymentStatus(String paymentStatus) {
		this.paymentStatus = paymentStatus;
	}
	public String getTrackingStatus() {
		return trackingStatus;
	}
	public void setTrackingStatus(String trackingStatus) {
		this.trackingStatus = trackingStatus;
	}
	public Date getOrderDateTime() {
		return orderDateTime;
	}
	public void setOrderDateTime(Date orderDateTime) {
		this.orderDateTime = orderDateTime;
	}
	
}
