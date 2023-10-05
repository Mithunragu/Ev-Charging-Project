package com.evproject.demo.service;

import org.springframework.web.bind.annotation.RequestBody;

import com.evproject.demo.model.Response;
import com.evproject.demo.model.SignUpModel;
import com.evproject.demo.model.StationDetailsModel;

public interface StationDetailsService {

	public Response createStationDetails(StationDetailsModel result);

	public Response deleteEvDetails(StationDetailsModel result);

	public Response updateEvDetails(String sNo,StationDetailsModel result);

	public Response getStationDetails(@RequestBody StationDetailsModel result);

	public Response getSpecificStationDetails(String location,String area);

	public Response getAllStation();

	public Response getStationName(String sNo);

}
