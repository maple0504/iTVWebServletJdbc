package model.service.restful;

import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import model.dao.VideoCommentsDAO;
import model.dao.jdbc.VideoCommentsDAOjdbc;
import model.vo.VideoCommentsVO;

@Path("/videoComment")
public class VideoCommentsRestful {
	private VideoCommentsDAO dao;
	
	public VideoCommentsRestful(){
		this.dao = new VideoCommentsDAOjdbc();
	}
	
	@GET
	@Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
	public List<VideoCommentsVO> selectAllComments(){
		return dao.selectAll();
	}
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean insertVideoComments(int memberId , int videoId , String commentContent){
		VideoCommentsVO bean = new VideoCommentsVO();
		bean.setMemberId(memberId);
		bean.setVideoId(videoId);
		bean.setCommentContent(commentContent);
		boolean result = dao.insert(bean);
		if(result == true){
			return true;
		}
		return false;
	}
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean updateVideoComments(String commentsContent , java.sql.Timestamp commentTime , int commentId){
		VideoCommentsVO bean = new VideoCommentsVO();
		bean.setCommentContent(commentsContent);
		bean.setCommentTime(commentTime);
		bean.setCommentId(commentId);
		boolean result = dao.update(bean);
		if(result == true){
			return true;
		}
		return false;
	}
	@DELETE
	@Path("/{commentId}")
	public boolean deleteVideoComments(@PathParam("commentId")int commentId){
		return dao.delete(commentId);
	}
	
	
	public static void main(String[] args){
		VideoCommentsRestful service = new VideoCommentsRestful();
//		boolean bool = service.insertVideoComments(1, 4, "安安");
//		boolean bool = service.updateVideoComments("修改安安", java.sql.Timestamp.valueOf("1911-01-01 10:10:10.000"), 17);
		boolean bool = service.deleteVideoComments(17);
		
		System.out.println(bool);
		
	}
	
	
	
}
