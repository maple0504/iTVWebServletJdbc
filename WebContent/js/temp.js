$(function() {
	$('#videos_div1').empty();
	$.ajax({
		url : 'RESTful/video',
		type : 'get',
		// data:{'categoryID':1},
		dataType : "json",
		success : function(data) {
			$.each(data,function(i, v) {
				var vn = v.videoName.substring(0, 25);
				var vd = v.videoDescription;
				if (vd == null) {
					vd = "";
				}
				// 順序=最新-舊
				$('#videos_div1').prepend("<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
				$('#videos_div1').prepend("<div class='service'>"+ "<a href='PlayVideo.jsp?filename="+ v.videoName+ "'>"+ 
						"<img src='../img/"+ v.videoName+ ".jpg' width='200px'/></a><br>"+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
						+ v.videoName + "'>"+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
						+ v.videoName.substr(0,25)+ "</div></span></a><br>"+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
						+ vd + "</p></div></span></a><br>" + "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
						+ v.videoWatchTimes+ "views</span><br></td>"+ "</div>");
				});
				}
			})
	$('#browse_type_any').click(
		function() {
			$('div button').removeClass('active');
			$(this).addClass('active');
			$('#videos_div1').empty();
			$.ajax({
				url : 'video',
				type : 'get',
				// data:{'categoryID':1},
				dataType : "json",
				success : function(data) {
					$.each(data,function(i, v) {
						var vn = v.videoName.substring(0,25);
						var vd = v.videoDescription;
						if (vd == null) {
							vd = "";
						}
						// 順序=最新-舊
						$('#videos_div1').prepend("<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
						$('#videos_div1').prepend("<div class='service'>"+ "<a href='PlayVideo.jsp?filename="+ v.videoName + "'>"
							+ "<img src='../img/"+ v.videoName+ ".jpg' width='200px'/></a><br>"+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
							+ v.videoName+ "'>"+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
							+ v.videoName.substr(0,25)+ "</div></span></a><br>"+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
							+ vd+ "</p></div></span></a><br>"+ "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
							+ v.videoWatchTimes+ "views</span><br></td>"+ "</div>");
					});
				}
			})
		})
		$('#browse_type_MusicVideo').click(function() {
			$('div button').removeClass('active');
			$(this).addClass('active');
			$('#videos_div1').empty();
			$.ajax({
				url : 'VideoServlet',
				type : 'get',
				dataType : "json",
				success : function(data) {
					$.each(data,function(i, v) {
						// 順序=最新-舊
						if (v.videoClassName == "mv") {
							var vn = v.videoName.substring(0,25);
							var vd = v.videoDescription;
							if (vd == null) {
								vd = "";
							}
							// 順序=最新-舊
							$('#videos_div1').prepend("<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
							$('#videos_div1')
																		.prepend(
																				"<div class='service'>"
																						+ "<a href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<img src='../img/"
																						+ v.videoName
																						+ ".jpg' width='200px'/></a><br>"
																						+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
																						+ v.videoName
																								.substr(
																										0,
																										25)
																						+ "</div></span></a><br>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
																						+ vd
																						+ "</p></div></span></a><br>"
																						+ "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
																						+ v.videoWatchTimes
																						+ "views</span><br></td>"
																						+ "</div>");
															}
														});
									}
								})
					})

	$('#browse_type_News')
			.click(
					function() {
						$('div button').removeClass('active');
						$(this).addClass('active');
						$('#videos_div1').empty();
						$
								.ajax({
									url : 'VideoServlet',
									type : 'get',
									dataType : "json",
									success : function(data) {
										$
												.each(
														data,
														function(i, v) {
															if (v.videoClassName == "News") {
																var vn = v.videoName
																		.substring(
																				0,
																				25);
																var vd = v.videoDescription;
																if (vd == null) {
																	vd = "";
																}
																// 順序=最新-舊
																$(
																		'#videos_div1')
																		.prepend(
																				"<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
																$(
																		'#videos_div1')
																		.prepend(
																				"<div class='service'>"
																						+ "<a href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<img src='../img/"
																						+ v.videoName
																						+ ".jpg' width='200px'/></a><br>"
																						+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
																						+ v.videoName
																								.substr(
																										0,
																										25)
																						+ "</div></span></a><br>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
																						+ vd
																						+ "</p></div></span></a><br>"
																						+ "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
																						+ v.videoWatchTimes
																						+ "views</span><br></td>"
																						+ "</div>");
															}
														});
									}
								})
					})

	$('#browse_type_Drama')
			.click(
					function() {
						$('div button').removeClass('active');
						$(this).addClass('active');
						$('#videos_div1').empty();
						$
								.ajax({
									url : 'VideoServlet',
									type : 'get',
									dataType : "json",
									success : function(data) {
										$
												.each(
														data,
														function(i, v) {

															if (v.videoClassName == "Drama") {
																var vn = v.videoName
																		.substring(
																				0,
																				25);
																var vd = v.videoDescription;
																if (vd == null) {
																	vd = "";
																}
																// 順序=最新-舊
																$(
																		'#videos_div1')
																		.prepend(
																				"<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
																$(
																		'#videos_div1')
																		.prepend(
																				"<div class='service'>"
																						+ "<a href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<img src='../img/"
																						+ v.videoName
																						+ ".jpg' width='200px'/></a><br>"
																						+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
																						+ v.videoName
																								.substr(
																										0,
																										25)
																						+ "</div></span></a><br>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
																						+ vd
																						+ "</p></div></span></a><br>"
																						+ "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
																						+ v.videoWatchTimes
																						+ "views</span><br></td>"
																						+ "</div>");
															}
														});
									}
								})
					})

	$('#browse_type_Animation')
			.click(
					function() {
						$('div button').removeClass('active');
						$(this).addClass('active');
						$('#videos_div1').empty();
						$
								.ajax({
									url : 'VideoServlet',
									type : 'get',
									dataType : "json",
									success : function(data) {
										$
												.each(
														data,
														function(i, v) {

															if (v.videoClassName == "Animation") {
																var vn = v.videoName
																		.substring(
																				0,
																				25);
																var vd = v.videoDescription;
																if (vd == null) {
																	vd = "";
																}
																// 順序=最新-舊
																$(
																		'#videos_div1')
																		.prepend(
																				"<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
																$(
																		'#videos_div1')
																		.prepend(
																				"<div class='service'>"
																						+ "<a href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<img src='../img/"
																						+ v.videoName
																						+ ".jpg' width='200px'/></a><br>"
																						+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
																						+ v.videoName
																								.substr(
																										0,
																										25)
																						+ "</div></span></a><br>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
																						+ vd
																						+ "</p></div></span></a><br>"
																						+ "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
																						+ v.videoWatchTimes
																						+ "views</span><br></td>"
																						+ "</div>");
															}
														});
									}
								})
					})

	$('#browse_type_Daily')
			.click(
					function() {
						$('div button').removeClass('active');
						$(this).addClass('active');
						$('#videos_div1').empty();
						$
								.ajax({
									url : 'VideoServlet',
									type : 'get',
									dataType : "json",
									success : function(data) {
										$
												.each(
														data,
														function(i, v) {

															if (v.videoClassName == "Daily") {
																var vn = v.videoName
																		.substring(
																				0,
																				25);
																var vd = v.videoDescription;
																if (vd == null) {
																	vd = "";
																}
																// 順序=最新-舊
																$(
																		'#videos_div1')
																		.prepend(
																				"<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
																$(
																		'#videos_div1')
																		.prepend(
																				"<div class='service'>"
																						+ "<a href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<img src='../img/"
																						+ v.videoName
																						+ ".jpg' width='200px'/></a><br>"
																						+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
																						+ v.videoName
																								.substr(
																										0,
																										25)
																						+ "</div></span></a><br>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
																						+ vd
																						+ "</p></div></span></a><br>"
																						+ "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
																						+ v.videoWatchTimes
																						+ "views</span><br></td>"
																						+ "</div>");
															}
														});
									}
								})
					})

	$('#browse_type_Interest')
			.click(
					function() {
						$('div button').removeClass('active');
						$(this).addClass('active');
						$('#videos_div1').empty();
						$
								.ajax({
									url : 'VideoServlet',
									type : 'get',
									dataType : "json",
									success : function(data) {
										$
												.each(
														data,
														function(i, v) {

															if (v.videoClassName == "Interest") {
																var vn = v.videoName
																		.substring(
																				0,
																				25);
																var vd = v.videoDescription;
																if (vd == null) {
																	vd = "";
																}
																// 順序=最新-舊
																$(
																		'#videos_div1')
																		.prepend(
																				"<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
																$(
																		'#videos_div1')
																		.prepend(
																				"<div class='service'>"
																						+ "<a href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<img src='../img/"
																						+ v.videoName
																						+ ".jpg' width='200px'/></a><br>"
																						+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
																						+ v.videoName
																								.substr(
																										0,
																										25)
																						+ "</div></span></a><br>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
																						+ vd
																						+ "</p></div></span></a><br>"
																						+ "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
																						+ v.videoWatchTimes
																						+ "views</span><br></td>"
																						+ "</div>");
															}
														});
									}
								})
					})

	$('#browse_type_Other')
			.click(
					function() {
						$('div button').removeClass('active');
						$(this).addClass('active');
						$('#videos_div1').empty();
						$
								.ajax({
									url : 'VideoServlet',
									type : 'get',
									dataType : "json",
									success : function(data) {
										$
												.each(
														data,
														function(i, v) {
															if (v.videoClassName == "Other") {
																var vn = v.videoName
																		.substring(
																				0,
																				25);
																var vd = v.videoDescription;
																if (vd == null) {
																	vd = "";
																}
																// 順序=最新-舊
																$(
																		'#videos_div1')
																		.prepend(
																				"<td style='margin:10px 0px 0px 0px ; float:left ;  list-style-type:none;' >")
																$(
																		'#videos_div1')
																		.prepend(
																				"<div class='service'>"
																						+ "<a href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<img src='../img/"
																						+ v.videoName
																						+ ".jpg' width='200px'/></a><br>"
																						+ "<a style='text-decoration:none;color:#167ac6;font-weight: 600;font-family:sans-serif; font-size:15px' href='PlayVideo.jsp?filename="
																						+ v.videoName
																						+ "'>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'>"
																						+ v.videoName
																								.substr(
																										0,
																										25)
																						+ "</div></span></a><br>"
																						+ "<span class='font-right'><div style='width:200px; display:inline-block' class='font-right'><p>"
																						+ vd
																						+ "</p></div></span></a><br>"
																						+ "<span class='font-right' style='font-weight: 550;font-family:Microsoft JhengHei; font-size:12px;'>"
																						+ v.videoWatchTimes
																						+ "views</span><br></td>"
																						+ "</div>");
															}
														});
									}
								})
					})
})