package com.object.csms.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.object.csms.entity.Complaint;
import com.object.csms.entity.Feedback;
import com.object.csms.responsebean.ComplaintResponseAdmin;
import com.object.csms.service.ComplaintService;

@RestController
@CrossOrigin(origins="*")
public class ComplaintController {
	
	@Autowired
	ComplaintService services;
	
	@GetMapping("/getcomplaint")
	public List<Complaint> getAll(){
		return services.getAll();
	}
	
	@GetMapping("/{id}/getcomplaint")
	public List<Complaint> getByComplaintId(@PathVariable(name="id") int id)
	{
		return services.getByComplaintId(id);
	}

	@PutMapping("/updatecomplaint/{id}")
	public Complaint updateComplaint(@RequestBody Complaint update,@PathVariable(name="id") int id )
	{
		update.setComplaintId(id);
		services.updateComplaintStatus(update);
		return update;
	}

	@PostMapping("/complaintregister")
	private int saveComplaint (@RequestBody Complaint complaint)  
	{  
		services.saveOrUpdate(complaint);  
		return complaint.getComplaintId();
	}
	
	@GetMapping("/{id}/getcomplaintresponse")
	public List<ComplaintResponseAdmin> getcomplaint(@PathVariable(name="id")Integer id)
	{
		return  services.getComplaintByCompanyId(id);
		
	}
	@PutMapping("/{id}/complaintstatus")
	public int complaintStatus(@RequestBody ComplaintResponseAdmin complaint,@PathVariable(name="id") int id)
	{
		return services.complaintStatus(complaint,id);
	}
	
	@GetMapping("/{id}/getcomplaintcustomer")
	public List<ComplaintResponseAdmin> getcomplaintcustomer(@PathVariable(name="id")Integer id)
	{
		return  services.getComplaintByCustomerId(id);
		
	}
	
	//get count of complaint based on companyId
	@GetMapping("/{id}/getcomplaintcount")
	public int getComplaintCount(@PathVariable(name="id")int id)
	{
		return services.getComplaintCount(id);
	}
	//get count of complaint based on Admin
	@GetMapping("/getcomplaintcountadmin")
	public int getComplaintCountAdmin()
	{
		return services.getComplaintCountAdmin();
	}
}

