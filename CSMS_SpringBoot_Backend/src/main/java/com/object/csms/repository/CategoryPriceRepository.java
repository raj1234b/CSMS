package com.object.csms.repository;

import java.util.*;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.CategoryPrice;

@Repository
public interface CategoryPriceRepository extends JpaRepository<CategoryPrice, Integer>{

	public List<CategoryPrice> getByCompanyId(int id);

	public void deleteByCompanyId(int id);

}
