package com.evproject.demo.dao;

import java.sql.Connection;
import java.sql.Date;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.Calendar;
import java.util.UUID;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;
import com.evproject.demo.model.Response;
import com.evproject.demo.model.SignUpModel;
import com.evproject.demo.service.SignUpService;

@Component
public class SignUpDao implements SignUpService {

	Response res = new Response();

	String url = "jdbc:mysql://127.0.0.1:3306/ev_charging";
	String user = "root";
	String pass = "two5062001";

	@Override
	public Response createUser(SignUpModel result) {

		String uuid = UUID.randomUUID().toString();
		result.setRegId(uuid);
		result.setCreatedBy(uuid);
		result.setUpdatedBy(uuid);

		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setCreatedDate(date);
		result.setUpdatedDate(date);
		result.setIsActive(1);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String insertQuery = "INSERT INTO ev_charging.reg_details"
						+ "(reg_id,user_name,age,email,phone_number,location,dob,password,is_role,is_active,created_by,created_date,updated_by,updated_date)"
						+ "VALUES('" + result.getRegId() + "','" + result.getUserName() + "'," + result.getAge() + ",'"
						+ result.getEmail() + "'," + result.getPhoneNumber() + ",'" + result.getLocation() + "','"
						+ result.getDob() + "','" + result.getPassword() + "','" + result.getIsRole() + "',"
						+ result.getIsActive() + ",'" + result.getCreatedBy() + "','" + result.getCreatedDate() + "','"
						+ result.getUpdatedBy() + "','" + result.getUpdatedDate() + "');";

//				Pattern email = Pattern.compile("^[A-Za-z0-9._%+-]+@gmail.com$");
//				Matcher emailMatch = email.matcher(result.getEmail());
//
//				boolean em = emailMatch.find();
//				System.out.println(em);
//
//				Pattern phoneNumber = Pattern.compile("[6789]{1}[0-9]{9}");
//				Matcher phoneMatch = phoneNumber.matcher("" + result.getPhoneNumber() + "");
//
//				boolean ph = phoneMatch.find();
//				System.out.println(ph);
//
//				if (!em) {
//					res.setResponseMsg("Invalid email");
//				} else if (!ph) {
//					res.setResponseMsg("Invalid number");
//				} else if (em && ph) {

					st.executeUpdate(insertQuery);
					res.setResponseCode(200);
					res.setResponseMsg("Success");
					res.setData("User created successfully!");
//				}

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

	// ======================================================================================//
	@Override
	public Response deleteAllUser(SignUpModel result) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String deleteQuery = "DELETE FROM ev_charging.reg_details" + " WHERE email='" + result.getEmail() + "';";

				System.out.println(deleteQuery);
				st.executeUpdate(deleteQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("User Deleted Successfully	");

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

	// ==========================================================//
	@Override
	public Response updateAllUser(SignUpModel result) {

		Date date = new Date(Calendar.getInstance().getTime().getTime());
		result.setUpdatedDate(date);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String updateQuery = "UPDATE ev_charging.reg_details" + " SET user_name ='" + result.getUserName()
						+ "',age =" + result.getAge() + " ,email ='" + result.getEmail() + "' ,phone_number ="
						+ result.getPhoneNumber() + ",location ='" + result.getLocation() + "',dob ='" + result.getDob()
						+ "',password ='" + result.getPassword() + "' ,updated_date ='" + result.getUpdatedDate() + "' "
						+ " WHERE reg_id ='" + result.getRegId() + "' ;";

				System.out.println(updateQuery);
				st.executeUpdate(updateQuery);

				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("Updated Successfully");

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
//==========================================================//

	@Override
	public Response login(SignUpModel result) {
		


		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String loginQuery = "SELECT * FROM ev_charging.reg_details WHERE email='" +result.getEmail() + "' and password='"
					+ result.getPassword() + "';";

			try (Connection conn = DriverManager.getConnection(url, user, pass);
					PreparedStatement st = conn.prepareStatement(loginQuery);
					ResultSet rs = st.executeQuery(loginQuery);) {

				if (rs.next()) {
					if (rs.getString("is_role").equalsIgnoreCase("owner")) {
						res.setData("Logged as Owner");
					} else if (rs.getString("is_role").equalsIgnoreCase("Customer")) {
						res.setData("Logged as Customer");
					} else if (rs.getString("is_role").equalsIgnoreCase("Admin")) {
						res.setData("Logged as Admin");
					}
				} else {
					res.setData("User Does Not Exist!");
				}
				res.setResponseCode(200);
				res.setResponseMsg("Success");

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
	// =================================================================================================//

	@SuppressWarnings("unchecked")
	@Override
	public Response getAllRole() {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getallcustomerQuery = "SELECT * FROM ev_charging.reg_details;";
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getallcustomerQuery);) {

				JSONArray jsonArray = new JSONArray();

				if (rs.next()) {

					while (rs.next()) {

						JSONObject jsonobject = new JSONObject();

						jsonobject.put("regId", rs.getString("reg_id"));
						jsonobject.put("userName", rs.getString("user_name"));
						jsonobject.put("age", rs.getInt("age"));
						jsonobject.put("email", rs.getString("email"));
						jsonobject.put("phoneNumber", rs.getLong("phone_number"));
						jsonobject.put("location", rs.getString("location"));
				    	jsonobject.put("dob", rs.getDate("dob"));
				    	jsonobject.put("isRole", rs.getString("is_role"));
    					jsonobject.put("isActive", rs.getInt("is_active"));


						jsonArray.add(jsonobject);

						res.setResponseMsg("success");
						res.setResponseCode(200);
						res.setData("View All  Details Successfully!");
						res.setjData(jsonArray);
					}

				} else {

					res.setResponseMsg("Failed");
					res.setResponseCode(500);
					res.setData("Your Role Not Found");
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

}
