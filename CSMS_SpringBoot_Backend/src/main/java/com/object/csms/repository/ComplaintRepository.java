package com.object.csms.repository;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.object.csms.entity.Complaint;

@Repository
public interface ComplaintRepository extends JpaRepository<Complaint, Integer>{

	List<Complaint> findByCompanyId(Integer id);

	List<Complaint> findByCustomerId(Integer id);

	
	//get count of complaint based on companyId
	@Query("SELECT COUNT(u) FROM Complaint u WHERE u.companyId=:id")
	public int getComplaintCount(int id);
	
	//get count of complaint based on Admin
	@Query("SELECT COUNT(u) FROM Complaint u")
	public int getComplaintCountAdmin();

	//public List<Complaint> getByComplaintId(int id);
}