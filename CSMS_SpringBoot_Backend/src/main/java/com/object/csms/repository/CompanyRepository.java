package com.object.csms.repository;
import java.util.List;
import java.util.Optional;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import com.object.csms.entity.Company;
@Repository
public interface CompanyRepository extends CrudRepository<Company, Integer> {

	@Query("select d from Company d where User_Id=:id")
	public Optional<Company> findByUserId(int id);
	
	@Modifying
	public void deleteById(int id);
	
	@Query("select d from Company d where User_Id=:id")	
	public Company findByUserIdd(int id);	
	
	@Query(value="Select c from Company c join  c.user u where u.userStatus = 'false'")
	public List<Company> findPendingCompany();
	
	@Query(value="Select c from Company c join  c.user u where u.userStatus = 'true'")
	public List<Company> findApprovedCompany();
	
	
	
}
