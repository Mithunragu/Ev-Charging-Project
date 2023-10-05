package com.evproject.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.evproject.demo.dao.ReviewDao;
import com.evproject.demo.model.Response;
import com.evproject.demo.model.ReviewModel;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class ReviewController {
	@Autowired
	private ReviewDao dao;

	@PostMapping("/createfeedback")
	public ResponseEntity<Response> createfeedback(@RequestBody ReviewModel datas){
		return ResponseEntity.ok(dao.createfeedback(datas));
	}
	@PostMapping("/deletereview")
	public ResponseEntity<Response> deleteallReview(@RequestBody ReviewModel datas){
		return ResponseEntity.ok(dao.deleteallReview(datas));
	}
	@GetMapping("/getallreview")
	public ResponseEntity<Response> getallReview(){
		return ResponseEntity.ok(dao.getallReview());
	}
	
	@GetMapping("/getonesationreview")
	public ResponseEntity<Response> getonestationReview(@RequestParam String SubmittedTo ){
		return ResponseEntity.ok(dao.getonestationReview(SubmittedTo));
	}
}
