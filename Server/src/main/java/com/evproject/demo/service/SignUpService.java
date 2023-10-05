package com.evproject.demo.service;

import org.springframework.stereotype.Service;

import com.evproject.demo.model.Response;
import com.evproject.demo.model.SignUpModel;

@Service
public interface SignUpService {

	public Response createUser(SignUpModel result);

	public Response deleteAllUser(SignUpModel result);

	public Response updateAllUser(SignUpModel result);

	public Response login(SignUpModel result);

	public Response getAllRole();

}
