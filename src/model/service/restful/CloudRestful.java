package model.service.restful;

import java.util.Collection;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import model.dao.CloudDAO;
import model.dao.jdbc.CloudDAOjdbc;
import model.vo.CloudVO;

@Path("/cloud")
public class CloudRestful {
	private CloudDAO dao;

	public CloudRestful() {
		this.dao = new CloudDAOjdbc();
	}
	
	@GET
	@Path("/allfile/{memberId}")
	@Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
	public Collection<CloudVO> allFile(@PathParam("memberId")int memberId) {
		return dao.selectByMemberId(memberId);
	}
	@GET
	@Path("/samename/{memberId}/{fileName}")
	@Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
	public Collection<CloudVO> searchFile(@PathParam("memberId")int memberId, @PathParam("fileName")String fileName) {
		Collection<CloudVO> result = null;
		if (fileName != null && fileName.trim().length() != 0) {
			result = dao.selectByFileName(memberId, fileName);
		}
		return result;
	}
	public Collection<CloudVO> searchFile(int memberId, java.util.Date fromTime,java.util.Date toTime) {
		Collection<CloudVO> result = null;
		if (fromTime != null && toTime != null) {
			result = dao.selectByTime(memberId, fromTime, toTime);
		}
		return result;
	}
	@GET
	@Path("/sametype/{memberId}/{fileType}")
	@Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
	public Collection<CloudVO> searchFile(@PathParam("fileType")String fileType, @PathParam("memberId")int memberId) {
		Collection<CloudVO> result = null;
		if (fileType != null && fileType != null) {
			result = dao.selectByFileType(memberId, fileType);
		}
		return result;
	}

	public Collection<CloudVO> searchFile(int memberId, String fileName, java.util.Date fromTime,
			java.util.Date toTime) {
		Collection<CloudVO> result = null;
		if (fileName != null && fileName.trim().length() != 0) {
			if (fromTime != null && toTime != null) {
				result = dao.selectByFileNameAndTime(memberId, fileName, fromTime, toTime);
			}
		}
		return result;
	}
	@GET
	@Path("/file/{memberId}/{fileName}/{fileType}")
	@Produces(MediaType.APPLICATION_JSON + ";charset=UTF-8")
	public Collection<CloudVO> searchFile(@PathParam("memberId")int memberId,@PathParam("fileName")String fileName, @PathParam("fileType")String fileType) {
		Collection<CloudVO> result = null;
		if (fileName != null && fileName.trim().length() != 0) {
			if (fileType != null && fileType.trim().length() != 0) {
				result = dao.selectByFileNameAndFileType(memberId, fileName, fileType);
			}
		}
		return result;
	}
	public Collection<CloudVO> searchFile(int memberId, java.util.Date fromTime,java.util.Date toTime,
			 String fileType) {
		Collection<CloudVO> result = null;
		if (fileType != null && fileType.trim().length() != 0) {
			if (fromTime != null && toTime != null) {
				result = dao.selectByFileTypeAndTime(memberId, fromTime, toTime, fileType);
			}
		}
		return result;
	}
	
	public Collection<CloudVO> searchFile(int memberId,String fileName,java.util.Date fromTime, java.util.Date toTime,
			String fileType) {
		Collection<CloudVO> result = null;
		if (fileName != null && fileName.trim().length() != 0) {
			if (fileType != null && fileType.trim().length() != 0) {
				if (fromTime != null && toTime != null) {
					result = dao.selectByFileNameFileTypeAndTime(memberId, fileName, fromTime, toTime, fileType);
				}
			}
		}
		return result;
	}
	@POST
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean addFile(int memberId, String fileName, String fileType, String filePath, long fileSize) {
		boolean result = false;
		return result;
	}
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public boolean modifyFile(int fileId, String filePath, long fileSize) {
		boolean result = false;
		return result;
	}

	public boolean modifyFileName(int fileId, String fileName, String filePath) {
		boolean result = false;
		return result;
	}
	@DELETE
	@Path("/{fileId}")
	public boolean deleteFile(@PathParam("fileId")int fileId) {		
		int temp = dao.delete(fileId);
		if (temp == 1) {
			return true;
		} else {
			return false;
		}
	}
}
