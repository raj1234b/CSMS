package com.object.csms.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.object.csms.entity.CategoryPrice;
import com.object.csms.entity.Company;
import com.object.csms.entity.Customer;
import com.object.csms.entity.DeliveryBoy;
import com.object.csms.entity.Feedback;
import com.object.csms.repository.CategoryPriceRepository;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.CustomerRepository;
import com.object.csms.repository.FeedbackRepository;
import com.object.csms.responsebean.FeedbackResponseAdmin;

@Service
public class FeedbackService {
	@Autowired
	FeedbackRepository repo;
	@Autowired
	CustomerRepository crepo;
	@Autowired
	CompanyRepository comrepo;
	public List<Feedback> getAll()
	{
		return repo.findAll();
	}
	//public List<Feedback> getByCustomerId(int id)
	//{
	//	return repo.getByCustomerId(id);
	//}
	public Feedback getfeedback(int id)
	{
		return repo.findById(id).get();
	}	
	public void saveOrUpdate(Feedback savefeedback)  
	{  
		repo.save(savefeedback); 		
	}
	public List<FeedbackResponseAdmin> getFeedbackByCompanyId(Integer id) {
		// TODO Auto-generated method stub
		List<Feedback> f = repo.findByCompanyId(id);
		List<FeedbackResponseAdmin> resp =new ArrayList<>();
		for(Feedback list : f)
		{
			Customer cus = crepo.findById(list.getCustomerId()).get();
			Company com = comrepo.findById(list.getCompanyId()).get();
			resp.add(new FeedbackResponseAdmin(list.getFeedbackId(), cus.getCustomerName(), com.getCompanyName(), list.getFeedbackDiscription()));
		}
		return resp;
		
	}
	public List<FeedbackResponseAdmin> getFeedbackByCustomerId(Integer id) {
		// TODO Auto-generated method stub
		List<Feedback> f= repo.findByCustomerId(id);
		List<FeedbackResponseAdmin> resp =new ArrayList<>();
		for(Feedback list : f)
		{
			Customer cus = crepo.findById(list.getCustomerId()).get();
			Company com = comrepo.findById(list.getCompanyId()).get();
			resp.add(new FeedbackResponseAdmin(list.getFeedbackId(), cus.getCustomerName(), com.getCompanyName(), list.getFeedbackDiscription()));
		}
		return resp;
	}
	//get count of feedback based on companyId
	public int getFeedbackCount(int id) {
		// TODO Auto-generated method stub
		return repo.getFeedbackCount(id);
	}
	//get count of feedback based on Admin
	public int getFeedbackCountAdmin() {
		// TODO Auto-generated method stub
		return repo.getFeedbackCountAdmin();
	}
	

}
