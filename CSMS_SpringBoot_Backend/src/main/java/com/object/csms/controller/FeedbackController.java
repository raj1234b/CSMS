package com.object.csms.controller;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.object.csms.entity.DeliveryBoy;
import com.object.csms.entity.Feedback;
import com.object.csms.responsebean.FeedbackResponseAdmin;
import com.object.csms.service.FeedbackService;

@RestController
@CrossOrigin(origins="*")
public class FeedbackController {
	@Autowired
	FeedbackService services;
	
	@GetMapping("/getfeedback")
	public List<Feedback> getAll()
	{
		return services.getAll();
	}
	@GetMapping("/{id}/getfeedback")
	public Feedback findById(@PathVariable(name="id") int id)
	{
		return services.getfeedback(id);
	}
	@PostMapping("/feedbackregister")
	private int savefeedback (@RequestBody Feedback feedback)  
	{  
		services.saveOrUpdate(feedback);  
		return feedback.getFeedbackId();
	}
	
	@GetMapping("/{id}/getfeedbackresponse")
	public List<FeedbackResponseAdmin> getfeedback(@PathVariable(name="id")Integer id)
	{
		return services.getFeedbackByCompanyId(id);
		
	}
	
	@GetMapping("/{id}/getfeedbackcustomer")
	public List<FeedbackResponseAdmin> getfeedbackcustomer(@PathVariable(name="id")Integer id)
	{
		return services.getFeedbackByCustomerId(id);
		
	}
	
	//get count of feedback based on companyId
	@GetMapping("/{id}/getfeedbackcount")
	public int getFeedbackCount(@PathVariable(name="id")int id)
	{
		return services.getFeedbackCount(id);
	}
	
	//get count of feedback based on Admin
	@GetMapping("/getfeedbackcountadmin")
	public int getFeedbackCountAdmin()
	{
		return services.getFeedbackCountAdmin();
	}
	
}
