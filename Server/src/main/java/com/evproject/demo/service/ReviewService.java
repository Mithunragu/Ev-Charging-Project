package com.evproject.demo.service;

import com.evproject.demo.model.Response;
import com.evproject.demo.model.ReviewModel;

public interface ReviewService  {

	public Response createfeedback(ReviewModel datas);

	public Response deleteallReview(ReviewModel datas);

	public Response getallReview();

	public Response getonestationReview(String submittedTo);

}
