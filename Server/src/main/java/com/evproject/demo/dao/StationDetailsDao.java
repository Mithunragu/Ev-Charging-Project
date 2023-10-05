package com.evproject.demo.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Calendar;
import java.util.UUID;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RequestBody;

import com.evproject.demo.model.Response;
import com.evproject.demo.model.SignUpModel;
import com.evproject.demo.model.StationDetailsModel;
import com.evproject.demo.service.StationDetailsService;

@Component
public class StationDetailsDao implements StationDetailsService {

	Response res = new Response();

	String url = "jdbc:mysql://127.0.0.1:3306/ev_charging";
	String user = "root";
	String pass = "two5062001";

	@Override
	public Response createStationDetails(StationDetailsModel result) {

		String uuid = UUID.randomUUID().toString();
		result.setsNo(uuid);
		result.setCreatedBy(uuid);
		result.setUpdatedBy(uuid);

		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setCreatedDate(date);
		result.setUpdatedDate(date);
		result.setEvStatus(1);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String insertEvQuery = "INSERT INTO ev_charging.station_details"
						+ "(s_no,station_name,contact_details,price,location,area,map,ev_status,rating,created_by,created_date,updated_by,updated_date)"
						+ "VALUES('" + result.getsNo() + "','" + result.getStationName() + "',"
						+ result.getContactDetails() + "," + result.getPrice() + ",'" + result.getLocation() + "','"
						+ result.getArea() + "','" + result.getMap() + "'," + result.getEvStatus() + ","
						+ result.getRating() + ",'" + result.getCreatedBy() + "','" + result.getCreatedDate() + "','"
						+ result.getUpdatedBy() + "','" + result.getUpdatedDate() + "');";

				System.out.println(insertEvQuery);
				st.executeUpdate(insertEvQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("StationOwner Uploaded successfully!");
			} catch (Exception e) {
				e.printStackTrace();

				res.setResponseCode(500);
				res.setResponseMsg("Error");
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return res;
	}

//====================================================================================
	@Override
	public Response deleteEvDetails(StationDetailsModel result) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String deleteEvQuery = "DELETE FROM `ev_charging`.`station_details`\r\n" + "WHERE  contact_details= '" + result.getContactDetails()
				
						+ "' ;";

				System.out.println(deleteEvQuery);
				st.executeUpdate(deleteEvQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("StationDetails Deleted Successfully");

			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseCode(500);
				res.setResponseMsg("Error");
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}

	// ========================================================================================
	@Override
	public Response updateEvDetails(String sNo,StationDetailsModel result) {

		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setUpdatedDate(date);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String updateEvQuery = "UPDATE ev_charging.station_details" + " SET contact_details ="
						+ result.getContactDetails() + " ,price =" + result.getPrice() + " ,ev_status ="
						+ result.getEvStatus() + " ,updated_date ='" + result.getUpdatedDate() + "' WHERE s_no ='"
						+ sNo + "' ;";

				System.out.println(updateEvQuery);
				st.executeUpdate(updateEvQuery);

				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Updated EvDetails Successfully");

			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseCode(500);
				res.setResponseMsg("Error");
				res.setData("Internal Server Error!");
			}

		} catch (Exception e) {
			e.printStackTrace();
		}

		return res;
	}
//==========================================================================================//

	@SuppressWarnings("unchecked")
	@Override
	public Response getStationDetails(@RequestBody StationDetailsModel result) {

		// to get data according to the location

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getstationQuery = "select * from ev_charging.station_details where location ='" +result.getLocation() + "'; ";
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getstationQuery);) {
					System.out.println(result.getLocation());
				JSONArray jsonArray = new JSONArray();

				if (rs.next()) {
					while (rs.next()) {

						JSONObject jsonobject = new JSONObject();
						
						jsonobject.put("sNo", rs.getString("s_no"));
						jsonobject.put("stationName", rs.getString("station_name"));
						jsonobject.put("area", rs.getString("area"));
						jsonobject.put("contactDetails", rs.getLong("contact_details"));
						jsonobject.put("price", rs.getInt("price"));
						jsonobject.put("rating", rs.getInt("rating"));
//						jsonobject.put("map", rs.getString("map"));
						jsonobject.put("evStatus", rs.getInt("ev_status"));


						jsonArray.add(jsonobject);

						res.setResponseMsg("success");
						res.setResponseCode(200);
						res.setData("View Your Location Details Successfully!");
						res.setjData(jsonArray);
					}
				} else {
					res.setResponseMsg("error");
					System.out.println("error");
					res.setResponseCode(500);
					res.setData("No such location!");
					res.setjData(null);
				}

			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseMsg("error");
				res.setResponseCode(500);
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return res;
	}

//==========================================================================
	@SuppressWarnings("unchecked")
	@Override
	public Response getSpecificStationDetails(String location, String area) {

		// to get data according to the area

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getstationQuery = "select * from ev_charging.station_details where location='" + location
					+ "' AND area ='" + area + "'; ";
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getstationQuery);) {

				JSONArray jsonArray = new JSONArray();

				if (rs.next()) {

					JSONObject jsonobject = new JSONObject();

					jsonobject.put("stationName", rs.getString("station_name"));
					jsonobject.put("price", rs.getInt("price"));
					jsonobject.put("contactDetails", rs.getLong("contact_details"));
					jsonobject.put("rating", rs.getInt("rating"));
					jsonobject.put("area", rs.getString("area"));
					jsonobject.put("map", rs.getString("map"));

					jsonArray.add(jsonobject);

					res.setResponseMsg("success");
					res.setResponseCode(200);
					res.setData("View EV Station Area Details!");
					res.setjData(jsonArray);

				} else {

					res.setResponseMsg("Failed");
					res.setResponseCode(500);
					res.setData("No Area Such Found");
					res.setjData(null);
				}

			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseMsg("error");
				res.setResponseCode(500);
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}

		return res;
	}
	//==========================================================================

	@SuppressWarnings("unchecked")
	@Override
	public Response getAllStation() {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getallQuery = "SELECT * FROM ev_charging.station_details;";
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getallQuery);) {

				JSONArray jsonArray = new JSONArray();
				
				while (rs.next()) {

					JSONObject jsonobject = new JSONObject();

					jsonobject.put("stationName", rs.getString("station_name"));
					jsonobject.put("price", rs.getInt("price"));
					jsonobject.put("contactDetails", rs.getLong("contact_details"));
					jsonobject.put("rating", rs.getInt("rating"));
					jsonobject.put("location", rs.getString("location"));
					jsonobject.put("area", rs.getString("area"));
					jsonobject.put("map", rs.getString("map"));
					jsonobject.put("evStatus", rs.getInt("ev_status"));
					

					jsonArray.add(jsonobject);

					res.setResponseMsg("success");
					res.setResponseCode(200);
					res.setData("View All Station Details Successfully");
					res.setjData(jsonArray);
				}
			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseMsg("error");
				res.setResponseCode(500);
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return res;
	}
	//===================================================================//
	@SuppressWarnings("unchecked")
	@Override
	public Response getStationName(String sNo) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getstationQuery = "SELECT * FROM ev_charging.station_details WHERE s_no='"+sNo+"' ;";
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getstationQuery);) {
					
				
				JSONArray jsonArray = new JSONArray();
				
				while (rs.next()) {

					JSONObject jsonobject = new JSONObject();
					
					jsonobject.put("stationName", rs.getString("station_name"));
					jsonobject.put("price", rs.getInt("price"));
					jsonobject.put("contactDetails", rs.getLong("contact_details"));
					jsonobject.put("rating", rs.getInt("rating"));
					jsonobject.put("location", rs.getString("location"));
					jsonobject.put("area", rs.getString("area"));
					jsonobject.put("map", rs.getString("map"));
					jsonobject.put("evStatus", rs.getInt("ev_status"));

					jsonArray.add(jsonobject);
					res.setResponseMsg("success");
					res.setResponseCode(200);
					res.setData("View All Station Details Successfully");
					res.setjData(jsonArray);
				}
			} catch (Exception e) {
				e.printStackTrace();
				res.setResponseMsg("error");
				res.setResponseCode(500);
				res.setData("Internal Server Error!");
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		
		return res;
	}
	
	
	
	
}
