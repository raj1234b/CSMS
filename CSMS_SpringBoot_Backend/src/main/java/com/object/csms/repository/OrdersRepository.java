package com.object.csms.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Orders;
@Repository
public interface OrdersRepository extends JpaRepository<Orders, Integer> {

	public List<Orders> findByCompanyId(int id);

	@Query("SELECT d FROM Orders d where customerId =:id")
	public List<Orders> findForInvoice(int id);

	//Query to select count of orders based on companyID
	@Query("SELECT COUNT(u) FROM Orders u WHERE u.companyId=:id")
	public int getCountOfOrders(int id);
	
	//Query to select count of orders based on companyID
	@Query("SELECT COUNT(u) FROM Orders u WHERE u.trackingStatus IS NOT NULL")
	public int getCountOfOrdersAdmin();

	//Query to select count of Pending orders based on companyID
	@Query("SELECT COUNT(u) FROM Orders u WHERE u.companyId=:id and u.trackingStatus IS NULL")
	public int getCountOfPendingOrders(int id);
	
}
