package com.object.csms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.object.csms.entity.Category;

@Repository
public interface CategoryRepository extends JpaRepository<Category, Integer>{

}
