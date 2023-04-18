package com.object.csms.service;
import java.util.Base64;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.object.csms.entity.Company;
import com.object.csms.entity.Customer;
import com.object.csms.entity.User;
import com.object.csms.exceptions.NotFoundException;
import com.object.csms.repository.CompanyRepository;
import com.object.csms.repository.CustomerRepository;
import com.object.csms.repository.UserRepository;

@Service
public class UserService {

	@Autowired
	UserRepository repo;
	@Autowired
	CompanyRepository comrepo;
	@Autowired
	CustomerRepository cusrepo;
	
	public Iterable<User> listAll() {
        return this.repo.findAll();
    }

	public void saveOrUpdate(User users)  
	{  
		repo.save(users); 		
	}
	public Optional<User> getById(int id)
	{
		return repo.findById(id);
	}
	
	public User getUserById(int id) throws NotFoundException  
	{  Optional<User> u = repo.findById(id); 
		if(u.isPresent())
			return u.get();
		else
			throw new NotFoundException("User Not Found");
	}
	
	public Object checkLogin(String username,String password) throws NotFoundException
	{
		String encodePassword = Base64.getEncoder().encodeToString(password.getBytes());
		Optional<User> u = repo.checkLogin(username, encodePassword);	
		if(u.isPresent() && u.get().getUserRole()==2)
		{
			User uobj = u.get();
			Optional<Company> com = comrepo.findByUserId(uobj.getUserId());
			if(com.isPresent())
			{
				com.get().getUser().setUserPassword(null);
				return com;
			}
			else
				throw new NotFoundException("Company Not Found with username : "+ uobj.getUserUsername());
		}
		else if(u.isPresent() && u.get().getUserRole()==3)
		{
			User uobj = u.get();
			Optional<Customer> cus = cusrepo.findByUserId(uobj.getUserId());
			if(cus.isPresent())
			{
				cus.get().getUser().setUserPassword(null);
				return cus;
			}
			else
				throw new NotFoundException("Customer Not Found with username : "+ uobj.getUserUsername());
		}
		else
		{
			if(u.isPresent())
			{
				return repo.checkLogin(username, encodePassword);
			}
			else
				throw new NotFoundException("User Not Found with username : "+ username);
		}
			
			
	}
	
	public void update(User users, int id)  
	{  
		repo.save(users);  
	}  
	 
	public void delete(int id)  
	{  
		repo.deleteById(id);  
	}

	//get count of pending request of company for Admin
	public int getPendingCount() {
		// TODO Auto-generated method stub
		return repo.getPendingCount();
	} 
		
}
