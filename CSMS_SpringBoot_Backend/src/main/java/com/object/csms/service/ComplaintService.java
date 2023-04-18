package com.object.csms.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.Company;
import com.object.csms.entity.Complaint;
import com.object.csms.entity.Customer;
import com.object.csms.entity.Feedback;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.ComplaintRepository;
import com.object.csms.repository.CustomerRepository;
import com.object.csms.responsebean.ComplaintResponseAdmin;
import com.object.csms.responsebean.FeedbackResponseAdmin;

@Service 
public class ComplaintService {
	@Autowired
	ComplaintRepository repo;
	@Autowired
	CustomerRepository crepo;
	@Autowired
	CompanyRepository comrepo;
	
	public List<Complaint> getAll()
	{
		return repo.findAll();
	}
	
	public Complaint getComplaint(int id)
	{
		return repo.findById(id).get();
	}

	public List<Complaint> getByComplaintId(int id) {
		// TODO Auto-generated method stub
		return null;
	}

	public void updateComplaintStatus(Complaint update) {
		// TODO Auto-generated method stub
		 repo.save(update);
	}	
	public void saveOrUpdate(Complaint savecomplaint)  
	{  
		repo.save(savecomplaint); 		
	}

	public List<ComplaintResponseAdmin> getComplaintByCompanyId(Integer id) {
		List<Complaint> f = repo.findByCompanyId(id);
		List<ComplaintResponseAdmin> resp =new ArrayList<>();
		for(Complaint list : f)
		{
			Customer cus = crepo.findById(list.getCustomerId()).get();
			Company com = comrepo.findById(list.getCompanyId()).get();
			resp.add(new ComplaintResponseAdmin(list.getComplaintId(),com.getCompanyName(),cus.getCustomerName(),list.getComplaintDescription(),list.getComplaintStatus()));
		}
		return resp;		
	}

	

	public List<ComplaintResponseAdmin> getComplaintByCustomerId(Integer id) {
		// TODO Auto-generated method stub
		List<Complaint> complaint= repo.findByCustomerId(id);
		List<ComplaintResponseAdmin> resp =new ArrayList<>();
		for(Complaint list : complaint)
		{
			Customer cus = crepo.findById(list.getCustomerId()).get();
			Company com = comrepo.findById(list.getCompanyId()).get();
			resp.add(new ComplaintResponseAdmin(list.getComplaintId(),com.getCompanyName(),cus.getCustomerName(),list.getComplaintDescription(),list.getComplaintStatus()));
		}
		return resp;
	}

	//get count of complaint based on companyId
	public int getComplaintCount(int id) {
		// TODO Auto-generated method stub
		return repo.getComplaintCount(id);
	}
	//get count of complaint based on Admin
	public int getComplaintCountAdmin() {
		// TODO Auto-generated method stub
		return repo.getComplaintCountAdmin();
	}

	public int complaintStatus(ComplaintResponseAdmin complaint, int id) {
		Complaint com = repo.findById(id).get();
		com.setComplaintStatus(complaint.getComplaintStatus());
		repo.save(com);
		return id;
	}
}
