package com.object.csms.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table(name="category_pricing")
public class CategoryPrice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer categoryPricingId;
	
	@Column(name="category_price",nullable=false)
	private Integer categoryPrice;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name="category_Id", referencedColumnName = "categoryId",nullable=false)
	private Category category;
	
	@Column (name="company_id",nullable=false)
	private Integer companyId;

	public CategoryPrice() {
		super();
		// TODO Auto-generated constructor stub
	}

	public CategoryPrice(Integer categoryPricingId, Integer categoryPrice, Category category, Integer companyId) 
	{
		super();
		this.categoryPricingId = categoryPricingId;
		this.categoryPrice = categoryPrice;
		this.category = category;
		this.companyId = companyId;
	}
	

	public CategoryPrice(Integer categoryPrice, Category category, Integer companyId) {
		super();
		this.categoryPrice = categoryPrice;
		this.category = category;
		this.companyId = companyId;
	}

	public Integer getCategoryPricingId() {
		return categoryPricingId;
	}

	public void setCategoryPricingId(Integer categoryPricingId) {
		this.categoryPricingId = categoryPricingId;
	}

	public Integer getCategoryPrice() {
		return categoryPrice;
	}

	public void setCategoryPrice(Integer categoryPrice) {
		this.categoryPrice = categoryPrice;
	}

	public Category getCategory() {
		return category;
	}

	public void setCategory(Category category) {
		this.category = category;
	}

	public Integer getCompanyId() {
		return companyId;
	}

	public void setCompanyId(Integer companyId) {
		this.companyId = companyId;
	}

	
}
