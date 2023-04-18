package com.object.csms.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name="courier_details")
public class Orders {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer courierDetailsId;
	
	@Column(name="customer_id")
	private Integer customerId;
	
	@Column(name="company_id")
	private Integer companyId;
	
	@Column(name="delivery_boy_id")
	private Integer deliveryBoyId;
	
	@Column(name="vehicles_details_id")
	private Integer vehiclesDetailsId;
	
	@Column(name="category_pricing_id")
	private Integer categoryPricingId;
	
	@Column(name="pickupaddress")
	private String pickupAddress;
	
	@Column(name="deliveryaddress")
	private String deliveryAddress;
	
	@Column(name="paymentstatus")
	private String paymentStatus;
	
	@Column(name="receivername")
	private String receiverName;
	
	@Column(name="trackingstatus")
	private String trackingStatus;
	
	@Column(name="requesttiming")
	@Temporal(TemporalType.TIMESTAMP)
    private  Date requestTime;

	public Orders() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Orders(Integer courierDetailsId, Integer customerId, Integer companyId, Integer deliveryBoyId, Integer vehiclesDetailsId,
			int categoryPricingId, String pickupAddress, String deliveryAddress, String paymentStatus,
			String receiverName, String trackingStatus, Date requestTime) {
		super();
		this.courierDetailsId = courierDetailsId;
		this.customerId = customerId;
		this.companyId = companyId;
		this.deliveryBoyId = deliveryBoyId;
		this.vehiclesDetailsId = vehiclesDetailsId;
		this.categoryPricingId = categoryPricingId;
		this.pickupAddress = pickupAddress;
		this.deliveryAddress = deliveryAddress;
		this.paymentStatus = paymentStatus;
		this.receiverName = receiverName;
		this.trackingStatus = trackingStatus;
		this.requestTime = requestTime;
	}

	
	public Orders(Integer courierDetailsId, Integer customerId, Integer companyId, Integer categoryPricingId, String pickupAddress,
			String deliveryAddress, String paymentStatus, String receiverName, String trackingStatus,
			Date requestTime) {
		super();
		this.courierDetailsId = courierDetailsId;
		this.customerId = customerId;
		this.companyId = companyId;
		this.categoryPricingId = categoryPricingId;
		this.pickupAddress = pickupAddress;
		this.deliveryAddress = deliveryAddress;
		this.paymentStatus = paymentStatus;
		this.receiverName = receiverName;
		this.trackingStatus = trackingStatus;
		this.requestTime = requestTime;
	}

	public Integer getCourierDetailsId() {
		return courierDetailsId;
	}

	public void setCourierDetailsId(Integer courierDetailsId) {
		this.courierDetailsId = courierDetailsId;
	}

	public Integer getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Integer customerId) {
		this.customerId = customerId;
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

	public Integer getCategoryPricingId() {
		return categoryPricingId;
	}

	public void setCategoryPricingId(Integer categoryPricingId) {
		this.categoryPricingId = categoryPricingId;
	}

	public String getPickupAddress() {
		return pickupAddress;
	}

	public void setPickupAddress(String pickupAddress) {
		this.pickupAddress = pickupAddress;
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

	public String getReceiverName() {
		return receiverName;
	}

	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}

	public String getTrackingStatus() {
		return trackingStatus;
	}

	public void setTrackingStatus(String trackingStatus) {
		this.trackingStatus = trackingStatus;
	}

	public Date getRequestTime() {
		return requestTime;
	}

	public void setRequestTime(Date requestTime) {
		this.requestTime = requestTime;
	}
	
	
}
