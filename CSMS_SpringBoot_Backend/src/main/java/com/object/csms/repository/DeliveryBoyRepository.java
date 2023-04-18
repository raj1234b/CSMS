package com.object.csms.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.DeliveryBoy;
@Repository
public interface DeliveryBoyRepository extends JpaRepository<DeliveryBoy, Integer> {
	@Query("select c from DeliveryBoy c where companyId=:id")
	List<DeliveryBoy> findByCompanyId(int id);

	public void deleteByCompanyId(int id);

}
