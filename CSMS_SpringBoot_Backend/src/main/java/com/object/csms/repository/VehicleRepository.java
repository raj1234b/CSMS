package com.object.csms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.VehicleDetails;
@Repository
public interface VehicleRepository extends JpaRepository<VehicleDetails, Integer> {

	@Query("select d from VehicleDetails d where companyId=:id")
	List<VehicleDetails> findByCompanyId(int id);

	public void deleteById(int id);

	public void deleteByCompanyId(int id);
}
