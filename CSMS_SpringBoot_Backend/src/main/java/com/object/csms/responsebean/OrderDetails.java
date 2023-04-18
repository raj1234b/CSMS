package com.object.csms.responsebean;

import com.object.csms.entity.*;

public class OrderDetails {

	private Company company;
	private Customer customer;
	private DeliveryBoy deliveryBoy;
	private VehicleDetails vehicleDetails;
	private CategoryPrice categoryPrice;
	private Orders order;
	
	public OrderDetails() {
		super();
		// TODO Auto-generated constructor stub
	}
	public OrderDetails(Company company, Customer customer, DeliveryBoy deliveryBoy, VehicleDetails vehicleDetails,
			CategoryPrice categoryPrice) {
		super();
		this.company = company;
		this.customer = customer;
		this.deliveryBoy = deliveryBoy;
		this.vehicleDetails = vehicleDetails;
		this.categoryPrice = categoryPrice;
	}
	
	
	public OrderDetails(Customer customer, DeliveryBoy deliveryBoy, VehicleDetails vehicleDetails,
			CategoryPrice categoryPrice, Orders order) {
		super();
		this.customer = customer;
		this.deliveryBoy = deliveryBoy;
		this.vehicleDetails = vehicleDetails;
		this.categoryPrice = categoryPrice;
		this.order = order;
	}
	public OrderDetails(Orders order, Customer customer, CategoryPrice categoryPrice) {
		super();
		this.order = order;
		this.customer = customer;
		this.categoryPrice = categoryPrice;
	}
	public Company getCompany() {
		return company;
	}
	public void setCompany(Company company) {
		this.company = company;
	}
	public Customer getCustomer() {
		return customer;
	}
	public void setCustomer(Customer customer) {
		this.customer = customer;
	}
	public DeliveryBoy getDeliveryBoy() {
		return deliveryBoy;
	}
	public void setDeliveryBoy(DeliveryBoy deliveryBoy) {
		this.deliveryBoy = deliveryBoy;
	}
	public VehicleDetails getVehicleDetails() {
		return vehicleDetails;
	}
	public void setVehicleDetails(VehicleDetails vehicleDetails) {
		this.vehicleDetails = vehicleDetails;
	}
	public CategoryPrice getCategoryPrice() {
		return categoryPrice;
	}
	public void setCategoryPrice(CategoryPrice categoryPrice) {
		this.categoryPrice = categoryPrice;
	}
	public Orders getOrder() {
		return order;
	}
	public void setOrder(Orders order) {
		this.order = order;
	}
	
}
