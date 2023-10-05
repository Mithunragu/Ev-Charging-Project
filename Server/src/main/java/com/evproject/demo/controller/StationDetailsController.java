package com.evproject.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import com.evproject.demo.dao.StationDetailsDao;
import com.evproject.demo.model.Response;
import com.evproject.demo.model.SignUpModel;
import com.evproject.demo.model.StationDetailsModel;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class StationDetailsController {

	@Autowired
	private StationDetailsDao dao;

	@PostMapping("/insertevdetails")
	public ResponseEntity<Response> createStationDetails(@RequestBody StationDetailsModel result) {
		return ResponseEntity.ok(dao.createStationDetails(result));
	}

	@PostMapping("/deleteevdetails")
	public ResponseEntity<Response> deleteEvDetails(@RequestBody StationDetailsModel result) {
		return ResponseEntity.ok(dao.deleteEvDetails(result));
	}

	@PutMapping("/updateevdetails/{sNo}")
	public ResponseEntity<Response> updateEvDetails(@PathVariable String sNo,@RequestBody StationDetailsModel result) {
		return ResponseEntity.ok(dao.updateEvDetails(sNo,result));
	}
	
	@PostMapping("/getstation-details")
	public ResponseEntity<Response> getStationDetails(@RequestBody StationDetailsModel result) {
		return ResponseEntity.ok(dao.getStationDetails(result));
	}

	@GetMapping("/getstation-details-specific")
	public ResponseEntity<Response> getSpecificStationDetails(@RequestParam String location,@RequestParam String area) {
		return ResponseEntity.ok(dao.getSpecificStationDetails(location,area));
	}
	
	@GetMapping("/getallstation")
	public ResponseEntity<Response> getAllStation() {
		return ResponseEntity.ok(dao.getAllStation());
	}
	@GetMapping("/getstationname/{sNo}")
	public ResponseEntity<Response> getStationName(@PathVariable String sNo) {
		return ResponseEntity.ok(dao.getStationName(sNo));
	}
}
