package com.object.csms.requestbean;

public class OrderApproveRequest {

	private Integer companyId;
	private Integer deliveryBoyId;
	private Integer vehiclesDetailsId;
	private String trackingStatus;
	public OrderApproveRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderApproveRequest(Integer companyId, Integer deliveryBoyId, Integer vehiclesDetailsId,
			String trackingStatus) {
		super();
		this.companyId = companyId;
		this.deliveryBoyId = deliveryBoyId;
		this.vehiclesDetailsId = vehiclesDetailsId;
		this.trackingStatus = trackingStatus;
	}
	public OrderApproveRequest(Integer companyId, Integer deliveryBoyId, Integer vehiclesDetailsId) {
		super();
		this.companyId = companyId;
		this.deliveryBoyId = deliveryBoyId;
		this.vehiclesDetailsId = vehiclesDetailsId;
	}
	
	public OrderApproveRequest(Integer companyId, String trackingStatus) {
		super();
		this.companyId = companyId;
		this.trackingStatus = trackingStatus;
	}
	public Integer getCompanyId() {
		return companyId;
	}
	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}
	public Integer getDeliveryBoyId() {
		return deliveryBoyId;
	}
	public void setDeliveryBoyId(Integer deliveryBoyId) {
		this.deliveryBoyId = deliveryBoyId;
	}
	public Integer getVehiclesDetailsId() {
		return vehiclesDetailsId;
	}
	public void setVehiclesDetailsId(Integer vehiclesDetailsId) {
		this.vehiclesDetailsId = vehiclesDetailsId;
	}
	public String getTrackingStatus() {
		return trackingStatus;
	}
	public void setTrackingStatus(String trackingStatus) {
		this.trackingStatus = trackingStatus;
	}
	
}
