package com.object.csms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.DeliveryBoy;
import com.object.csms.service.DeliveryBoyService;

@RestController
@CrossOrigin(origins="*")
public class DeliveryBoyController {
	@Autowired
	DeliveryBoyService services;
	
	@GetMapping("/getalldeliveryboy")
	public Iterable<DeliveryBoy> getDelivery_Boy()
	{
		Iterable<DeliveryBoy> deli = services.listAll();
		return deli;    
	}
	
	//Get Delivery Boy with Company Id 
	@GetMapping("/{id}/getdeliverydetails")
	public List<DeliveryBoy> getDeliveryDetails(@PathVariable(name="id")int id)
	{
		List<DeliveryBoy> resp = services.getDeliveryBoyByCompanyId(id);
		return resp;
	}
	
	@PostMapping("/deliveryboyregister")
	private int saveVehicle (@RequestBody DeliveryBoy delivery)  
	{  
		services.saveOrUpdate(delivery);  
		return delivery.getDeliveryBoyId();
	}
	
	@RequestMapping("/deliveryboy/{id}")  
	private DeliveryBoy  getDelivery_Boy(@PathVariable(name = "id") int id)  
	{  
		return services.getDeliveryBoyById(id);
	}  

	@DeleteMapping("/{id}/deletedeliveryboy")  
	private void deleteDelivery_Boy(@PathVariable("id") int id)  
	{  
		services.delete(id);
	}
}
