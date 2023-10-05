package com.evproject.demo.model;

public class ReviewModel {

	private String sNo;
	private int rating;
	private String feedBack;
	private String submittedBy;
	private String submittedTo;

	public String getFeedBack() {
		return feedBack;
	}

	public void setFeedBack(String feedBack) {
		this.feedBack = feedBack;
	}

	public String getsNo() {
		return sNo;
	}

	public void setsNo(String sNo) {
		this.sNo = sNo;
	}

	public int getRating() {
		return rating;
	}

	public void setRating(int rating) {
		this.rating = rating;
	}

	public String getSubmittedBy() {
		return submittedBy;
	}

	public void setSubmittedBy(String submittedBy) {
		this.submittedBy = submittedBy;
	}

	public String getSubmittedTo() {
		return submittedTo;
	}

	public void setSubmittedTo(String submittedTo) {
		this.submittedTo = submittedTo;
	}

}
