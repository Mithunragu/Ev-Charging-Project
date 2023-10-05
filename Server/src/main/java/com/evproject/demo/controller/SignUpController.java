package com.evproject.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.evproject.demo.dao.SignUpDao;
import com.evproject.demo.model.Response;
import com.evproject.demo.model.SignUpModel;

@CrossOrigin("*")
@RestController
@RequestMapping("/auth")
public class SignUpController {

	@Autowired
	private SignUpDao dao;

	@PostMapping("/create")
	public ResponseEntity<Response> createUser(@RequestBody SignUpModel result) {
		return ResponseEntity.ok(dao.createUser(result));
	}

	@PostMapping("/deleteall")
	public ResponseEntity<Response> deleteAllUser(@RequestBody SignUpModel result) {
		return ResponseEntity.ok(dao.deleteAllUser(result));
	}

	@PutMapping("/updateall")
	public ResponseEntity<Response> updateAllUser(@RequestBody SignUpModel result) {
		return ResponseEntity.ok(dao.updateAllUser(result));
	}

	@PostMapping("/login")
	public ResponseEntity<Response> login(@RequestBody SignUpModel result) {
		return ResponseEntity.ok(dao.login(result));
	}
	
	@GetMapping("/getall")
	public ResponseEntity<Response> getAllRole() {
		return ResponseEntity.ok(dao.getAllRole());
	}
}
