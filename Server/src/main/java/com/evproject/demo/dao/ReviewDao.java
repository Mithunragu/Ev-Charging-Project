package com.evproject.demo.dao;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.UUID;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Component;
import com.evproject.demo.model.Response;
import com.evproject.demo.model.ReviewModel;
import com.evproject.demo.service.ReviewService;

@Component
public class ReviewDao implements ReviewService {

	Response res = new Response();

	String url = "jdbc:mysql://127.0.0.1:3306/ev_charging";
	String user = "root";
	String pass = "two5062001";

	@Override
	public Response createfeedback(ReviewModel datas) {

		String uuid = UUID.randomUUID().toString();
		datas.setsNo(uuid);

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {

				String insertReviewQuery = "INSERT INTO ev_charging.review_table"
						+ "(s_no,rating,feed_back)VALUES" + "('" + datas.getsNo() + "',"
						+ datas.getRating() + ",'"+datas.getFeedBack()+"');";

				System.out.println(insertReviewQuery);
				st.executeUpdate(insertReviewQuery);

				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("User Feedback Given Successfully");

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

	@Override
	public Response deleteallReview(ReviewModel datas) {

		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();) {
					
				System.out.println(datas.getsNo());
				String deletereviewQuery = "DELETE FROM ev_charging.review_table "
						+ "WHERE s_no='"+datas.getsNo()+"';";

				System.out.println(deletereviewQuery);
				st.executeUpdate(deletereviewQuery);
				res.setResponseCode(200);
				res.setResponseMsg("Success");
				res.setData("User Deleted Successfully");

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

	@SuppressWarnings("unchecked")
	@Override
	public Response getallReview() {
		
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			String getallfeedback = "SELECT * FROM ev_charging.review_table;";
			try (Connection conn = DriverManager.getConnection(url, user, pass);
					Statement st = conn.createStatement();
					ResultSet rs = st.executeQuery(getallfeedback);) {

				JSONArray jsonArray = new JSONArray();
				
				while (rs.next()) {

					JSONObject jsonobject = new JSONObject();
					jsonobject.put("sNo", rs.getString("s_no"));
					jsonobject.put("rating",rs.getInt("rating"));
					jsonobject.put("feedBack", rs.getString("feed_back"));
//					jsonobject.put("sumbittedBy", rs.getString("submitted_by"));
//					jsonobject.put("submittedTo", rs.getString("submitted_to"));



					jsonArray.add(jsonobject);

					res.setResponseMsg("success");
					res.setResponseCode(200);
					res.setData("View All FeedBack Successfully");

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

	@Override
	public Response getonestationReview(String submittedTo) {
		// TODO Auto-generated method stub
		return null;
	}

//	@SuppressWarnings("unchecked")
//	@Override
//	public Response getonestationReview(String submittedTo) {
//
//		try {
//			Class.forName("com.mysql.cj.jdbc.Driver");
//			String getoneQuery ="select * from ev_charging.review_table where submitted_to ='" +submittedTo + "';";
//			try (Connection conn = DriverManager.getConnection(url, user, pass);
//					Statement st = conn.createStatement();
//					ResultSet rs = st.executeQuery(getoneQuery);) {
//
//				JSONArray jsonArray = new JSONArray();
//
//				if (rs.next()) {
//					while (rs.next()) {
//
//						JSONObject jsonobject = new JSONObject();
//
//						jsonobject.put("rating",rs.getInt("rating"));
//						jsonobject.put("feedBack", rs.getString("feed_back"));
//						jsonobject.put("sumbittedBy", rs.getString("submitted_by"));
//						
//						jsonArray.add(jsonobject);
//
//						res.setResponseMsg("success");
//						res.setResponseCode(200);
//						res.setData("View  Station review Successfully!");
//						res.setjData(jsonArray);
//					}
//				} else {
//					res.setResponseMsg("Failed");
//					res.setResponseCode(500);
//					res.setData("No such Review!");
//					res.setjData(null);
//				}
//
//			} catch (Exception e) {
//				e.printStackTrace();
//				res.setResponseMsg("error");
//				res.setResponseCode(500);
//				res.setData("Internal Server Error!");
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		
//		
//		return res;
//	}

}
