package com.object.csms.controller;

import java.util.*;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.*;
import com.object.csms.repository.CategoryPriceRepository;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.CustomerRepository;
import com.object.csms.repository.DeliveryBoyRepository;
import com.object.csms.repository.VehicleRepository;
import com.object.csms.requestbean.OrderApproveRequest;
import com.object.csms.responsebean.InvoiceResponse;
import com.object.csms.responsebean.OrderDetails;
import com.object.csms.service.OrdersService;

@RestController
@CrossOrigin(origins="*")
public class OrdersController {

	@Autowired
	OrdersService services;	
	
	@GetMapping("/getorder")
	public List<Orders> getOrders()
	{
		return services.getOrder();
	}
	
	@PostMapping("/orderrequest")
	public int saveOrder(@RequestBody Orders order)
	{
		 services.saveOrder(order);
		 return order.getCourierDetailsId();		 
	}	
	
	//give list of order details with companyId except delivery boy and vehicle
	@GetMapping("/{id}/companyorder")
	public List<OrderDetails> companyOrder(@PathVariable(name="id") int id)
	{
		return services.companyOrder(id);
	}
	
	//Company Allocate Delivery Boy and Vehicle to Courier Order with courierDetailId
	@PutMapping("/{id}/approveorder")
	public int approveOrder(@RequestBody OrderApproveRequest order,@PathVariable(name="id")int id)
	{
		return services.approveOrder(order,id);
	}
	
	//Company update Tracking Status with courierDetailId
	@PutMapping("/{id}/trackingstatus")
	public int trackingStatus(@RequestBody OrderApproveRequest order, @PathVariable(name="id") int id)
	{
		return services.trackingStatus(order,id);
	}
	//Order Invoice with customerId and courierDetailsId 
	@GetMapping("/{customerid}/invoice")
	public List<InvoiceResponse> invoiceGenerate(@PathVariable(name="customerid") int customerId)
	{
		return services.invoiceGenerate(customerId);
	}
	
	//get count of orders based on companyId
	@GetMapping("/{id}/getcountoforder")
	public int getCountOfOrders(@PathVariable(name="id")int id)
	{
		return services.getCountOfOrders(id);
	}
	
	//get count of orders based on Admin
	@GetMapping("/getcountoforderadmin")
	public int getCountOfOrdersAdmin()
	{
		return services.getCountOfOrdersAdmin();
	}
	
	//get count of Pending order based on companyId
	@GetMapping("/{id}/getpendingcount")
	public int getCountOfPendingOrders(@PathVariable(name="id")int id)
	{
		return services.getCountOfPendingOrders(id);
	}
}
