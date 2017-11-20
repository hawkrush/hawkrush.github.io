var sbfpLpsPlaylists = null;
var sbfpOneOffsPlaylist = null;
var sbfpExtrasPlaylist = null;
var sbfpMachinimaPlaylist = null;

//var lpsPlaylistsJSON = null;

var lpsGridImageNum = 12;
var oneOffsGridImageNum = 12;
var extrasGridImageNum = 12;
var machinimaGridImageNum = 12;

var lpsToggled = false;
var oneOffsToggled = false;
var extrasToggled = false;
var machinimaToggled = false;
var linksToggled = false;

function filterLpsPlaylists() {
	console.log("============= Filtering LPs playlists to create extras playlist  =============");
	var arr = [];
	for (i=0; i<sbfpLpsPlaylists["items"].length; i++) {
		var playlistTitle = sbfpLpsPlaylists["items"][i]["snippet"]["title"];
		//alert(playlistTitle);
		if (playlistTitle.toUpperCase().includes("SHITSTORM")) {
			arr.push(sbfpLpsPlaylists["items"][i]);
			sbfpLpsPlaylists["items"].splice(i, 1);
		}
		//console.log("Hi");
	}
	sbfpExtrasPlaylist = JSON.stringify(arr);
	lpsContent();
	
}
function lpsContent() {
	console.log("============= Creating LPs content =============");
	for (i=0; i<sbfpLpsPlaylists["items"].length; i++) {
		var playlistID = sbfpLpsPlaylists["items"][i]["id"].replace(/['"]+/g, '');
		var playlistURL = "https://www.youtube.com/embed/?listType=playlist&list="+playlistID+"&index=0";
		var playlistImgURL = sbfpLpsPlaylists["items"][i]["snippet"]["thumbnails"]["high"]["url"];
		var playlistTitle = sbfpLpsPlaylists["items"][i]["snippet"]["title"];

		console.log("Adding content to .sbfp-lps");

		if (i >= lpsGridImageNum) {
			$(".lps-grid-images").append('<div class="lps-grid-image-box" id="lp-'+i+'" style="display:none;">'); 
			$("#lp-"+i).append('<a class="gallery-video-link" id="lp-video-link-'+i+'" href="'+playlistURL+'"><img class="lps-grid-image" src='+playlistImgURL+' alt='+playlistTitle+' /></a>');
		} else {
			$(".lps-grid-images").append('<div class="lps-grid-image-box" id="lp-'+i+'">'); 
			$("#lp-"+i).append('<a class="gallery-video-link" id="lp-video-link-'+i+'" href="'+playlistURL+'"><img class="lps-grid-image" src='+playlistImgURL+' alt='+playlistTitle+' /></a>');
		}	
	}	
}
function oneOffsContent() {
	console.log("============= Creating one-offs content =============");
	
	for (i=0; i<sbfpOneOffsPlaylist["items"].length; i++) {
		var videoID = sbfpOneOffsPlaylist["items"][i]["snippet"]["resourceId"]["videoId"].replace(/['"]+/g, '');
		var videoURL = "https://www.youtube.com/embed/"+videoID;
		var videoImgURL = sbfpOneOffsPlaylist["items"][i]["snippet"]["thumbnails"]["high"]["url"];
		var videoTitle = sbfpOneOffsPlaylist["items"][i]["snippet"]["title"];

		console.log("Adding content to .sbfp-one-offs");

		if (i >= oneOffsGridImageNum) {
			$(".one-offs-grid-images").append('<div class="one-offs-grid-image-box" id="one-off-'+i+'" style="display:none;">'); 
			$("#one-off-"+i).append('<a class="gallery-video-link" id="one-off-video-link-'+i+'" href="'+videoURL+'"><img class="one-offs-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		} else {
			$(".one-offs-grid-images").append('<div class="one-offs-grid-image-box" id="one-off-'+i+'">'); 
			$("#one-off-"+i).append('<a class="gallery-video-link" id="one-off-video-link-'+i+'" href="'+videoURL+'"><img class="one-offs-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		}	
	}	
}
function extrasContent() {
	console.log("============= Creating extras content =============");
	
	for (i=0; i<sbfpExtrasPlaylist["items"].length; i++) {
		var videoID = sbfpOneOffsPlaylist["items"][i]["snippet"]["resourceId"]["videoId"].replace(/['"]+/g, '');
		var videoURL = "https://www.youtube.com/embed/"+videoID;
		var videoImgURL = sbfpOneOffsPlaylist["items"][i]["snippet"]["thumbnails"]["high"]["url"];
		var videoTitle = sbfpOneOffsPlaylist["items"][i]["snippet"]["title"];

		console.log("Adding content to .sbfp-one-offs");

		if (i >= oneOffsGridImageNum) {
			$(".one-offs-grid-images").append('<div class="one-offs-grid-image-box" id="one-off-'+i+'" style="display:none;">'); 
			$("#one-off-"+i).append('<a class="gallery-video-link" id="one-off-video-link-'+i+'" href="'+videoURL+'"><img class="one-offs-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		} else {
			$(".one-offs-grid-images").append('<div class="one-offs-grid-image-box" id="one-off-'+i+'">'); 
			$("#one-off-"+i).append('<a class="gallery-video-link" id="one-off-video-link-'+i+'" href="'+videoURL+'"><img class="one-offs-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		}	
	}	
}
function machinimaContent() {
	console.log("============= Creating machinima content =============");

	for (i=0; i<sbfpMachinimaPlaylist["items"].length; i++) {
		var videoID = sbfpMachinimaPlaylist["items"][i]["snippet"]["resourceId"]["videoId"].replace(/['"]+/g, '');
		var videoURL = "https://www.youtube.com/embed/"+videoID;
		var videoImgURL = sbfpMachinimaPlaylist["items"][i]["snippet"]["thumbnails"]["high"]["url"];
		var videoTitle = sbfpMachinimaPlaylist["items"][i]["snippet"]["title"];

		console.log("Adding content to .sbfp-machinima");

		if (i >= machinimaGridImageNum) {
			$(".machinima-grid-images").append('<div class="machinima-grid-image-box" id="machinima-'+i+'" style="display:none;">'); 
			$("#machinima-"+i).append('<a class="gallery-video-link" id="machinima-video-link-'+i+'" href="'+videoURL+'"><img class="machinima-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		} else {
			$(".machinima-grid-images").append('<div class="machinima-grid-image-box" id="machinima-'+i+'">'); 
			$("#machinima-"+i).append('<a class="gallery-video-link" id="machinima-video-link-'+i+'" href="'+videoURL+'"><img class="machinima-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		}	
	}
}

function lpsPlaylists(url) {
	console.log("============= Creating list of LP playlists  =============");
	// Playlists File Creation
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 1) {
			console.log("Server connection established");	
		} else if (xhr.readyState == 2) {
			console.log("Request received");
		} else if (xhr.readyState == 3) {
			console.log("Processing request");
		} else if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				console.log("Request processed");
				try {
					//lpsPlaylistsJSON = xhr.responseText;
					sbfpLpsPlaylists = JSON.parse(xhr.responseText);
					//console.log(JSON.stringify(sbfpPlaylists["items"].length));//[0]["snippet"]);

					/*$.each(sbfpPlaylists["items"], function(i, item) {
									console.log(sbfpPlaylists[i]);
					//console.log(item["snippet"]);
								});*/
					/*
								for (i=0; i<sbfpPlaylists["items"].length; i++) {
									console.log(JSON.stringify(sbfpPlaylists["items"][i]["id"]));
								}*/
					filterLpsPlaylists();
					console.log("Response received is JSON");

				} catch(err) {
					console.log("Response received is not JSON");
				}
			} else if (xhr.status == 404) {
				console.log("Request could not be processed");
			}
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
}
function oneOffsPlaylist(url) {
	console.log("============= Creating list of one-offs  =============");
	// Playlists File Creation
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 1) {
			console.log("Server connection established");	
		} else if (xhr.readyState == 2) {
			console.log("Request received");
		} else if (xhr.readyState == 3) {
			console.log("Processing request");
		} else if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				console.log("Request processed");
				try {
					sbfpOneOffsPlaylist = JSON.parse(xhr.responseText);
					//sbfpOneOffsPlaylist.items.reverse();
					//console.log(JSON.stringify(sbfpPlaylists["items"].length));//[0]["snippet"]);

					/*$.each(sbfpPlaylists["items"], function(i, item) {
									console.log(sbfpPlaylists[i]);
					//console.log(item["snippet"]);
								});*/
					/*
								for (i=0; i<sbfpPlaylists["items"].length; i++) {
									console.log(JSON.stringify(sbfpPlaylists["items"][i]["id"]));
								}*/
					oneOffsContent();
					console.log("Response received is JSON");

				} catch(err) {
					console.log("Response received is not JSON");
				}
			} else if (xhr.status == 404) {
				console.log("Request could not be processed");
			}
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
}
/*
function extrasPlaylist() {
}*/
function machinimaPlaylist(url) {
	console.log("============= Creating list of machinima videos  =============");
	// Playlists File Creation
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		if (xhr.readyState == 1) {
			console.log("Server connection established");	
		} else if (xhr.readyState == 2) {
			console.log("Request received");
		} else if (xhr.readyState == 3) {
			console.log("Processing request");
		} else if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				console.log("Request processed");
				try {
					sbfpMachinimaPlaylist = JSON.parse(xhr.responseText);
					//console.log(JSON.stringify(sbfpPlaylists["items"].length));//[0]["snippet"]);

					/*$.each(sbfpPlaylists["items"], function(i, item) {
									console.log(sbfpPlaylists[i]);
					//console.log(item["snippet"]);
								});*/
					/*
								for (i=0; i<sbfpPlaylists["items"].length; i++) {
									console.log(JSON.stringify(sbfpPlaylists["items"][i]["id"]));
								}*/
					machinimaContent();
					console.log("Response received is JSON");

				} catch(err) {
					console.log("Response received is not JSON");
				}
			} else if (xhr.status == 404) {
				console.log("Request could not be processed");
			}
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
}

$(window).bind('createLpsPlaylist', lpsPlaylists("https://www.googleapis.com/youtube/v3/playlists?channelId=UC84X0epDRFdTrybxEX8ZWkA&part=snippet&maxResults=50&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&"));
$(window).bind('createOneOffsPlaylist', oneOffsPlaylist("https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL57hJfweW_2vsamTeyFNRE7JgfQGK7uHh&part=snippet&maxResults=50&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&"));
$(window).bind('createMachinimaPlaylist', machinimaPlaylist("https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLxROszFPI_5NwVfGgvcQKS01REhSn-D26&part=snippet&maxResults=50&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&"));

$(document).ready(function() {	
	// Before website is fully ready
	$(window).trigger('createLpsPlaylist');
	$(window).trigger('createOneOffsPlaylist');
	$(window).trigger('createMachinimaPlaylist');

	// Activate overflow-y for content
	function nextFiftyLps(url) {
		console.log("============= Creating list of LP playlists  =============");
		// Playlists File Creation
		var xhr = new XMLHttpRequest();

		xhr.onreadystatechange = function() {
			if (xhr.readyState == 1) {
				console.log("Server connection established");	
			} else if (xhr.readyState == 2) {
				console.log("Request received");
			} else if (xhr.readyState == 3) {
				console.log("Processing request");
			} else if (xhr.readyState == 4) {
				if (xhr.status == 200) {
					console.log("Request processed");
					try {
						//lpsPlaylistsJSON = xhr.responseText;
						sbfpLpsPlaylists = JSON.parse(xhr.responseText);
						//console.log(JSON.stringify(sbfpPlaylists["items"].length));//[0]["snippet"]);
	
						/*$.each(sbfpPlaylists["items"], function(i, item) {
										console.log(sbfpPlaylists[i]);
						//console.log(item["snippet"]);
									});*/
						/*
									for (i=0; i<sbfpPlaylists["items"].length; i++) {
										console.log(JSON.stringify(sbfpPlaylists["items"][i]["id"]));
									}*/
						$(window).trigger('filterLpsPlaylists');
						console.log("Response received is JSON");
	
					} catch(err) {
						console.log("Response received is not JSON");
					}
				} else if (xhr.status == 404) {
					console.log("Request could not be processed");
				}
			}
		}
	
		xhr.open('GET',
			 "https://www.googleapis.com/youtube/v3/playlists?channelId=UC84X0epDRFdTrybxEX8ZWkA&part=snippet&maxResults=25&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&", true);
		xhr.send();
	}

	jQuery(function($) {
		$(".sbfp-lps").bind("scroll", function() {
			if ($(this).scrollTop() + $(this).innerHeight() + 1 >= $(this)[0].scrollHeight) {
				console.log("End of LPs content reached");
				//if 
				for (i=0; i<4; i++) {
					$(".lps-grid-image-box:nth-child("+lpsGridImageNum+")").css("display", "inline");
					++lpsGridImageNum;
				}
			}
		});
		$(".sbfp-one-offs").bind("scroll", function() {
			if ($(this).scrollTop() + $(this).innerHeight() + 1 >= $(this)[0].scrollHeight) {
				console.log("End of one-offs content reached");
				for (i=0; i<4; i++) {
					$(".one-offs-grid-image-box:nth-child("+oneOffsGridImageNum+")").css("display", "inline");
					++oneOffsGridImageNum;
				}
			}
		});
		$(".sbfp-machinima").bind("scroll", function() {
			if ($(this).scrollTop() + $(this).innerHeight() + 1 >= $(this)[0].scrollHeight) {
				console.log("End of one-offs content reached");
				for (i=0; i<4; i++) {
					$(".machinima-grid-image-box:nth-child("+machinimaGridImageNum+")").css("display", "inline");
					++machinimaGridImageNum;
				}
			}
		});
		// Do for the other 
	});

	// Toggling website content			
	function toggleLetsPlays() {
		if (oneOffsToggled == true) {
			toggleOneOffs();
		} else if (extrasToggled == true) {
			toggleExtras();
		} else if (machinimaToggled == true) {
			toggleMachinima();
		} else if (linksToggled == true) {
			toggleLinks();
		}

		if ($(".sbfp-lps").css("display") == "none" && 
		    $(".sbfp-navbar-primary").css("border-bottom") == "0px solid rgb(26, 26, 26)" && 
		    lpsToggled == false) {
			lpsToggled = true;
			$(".sbfp-navbar-primary").css("border-bottom", "2px solid rgb(26, 26, 26)");
			$("#lps").toggleClass("active");
			$("#lps").css("color", "#ff9900");
			$(".sbfp-newest-uploaded").css("z-index", "-1");

			$(".sbfp-lps").slideDown("slow");
		} else {
			lpsToggled = false;
			$(".sbfp-navbar-primary").css("border-bottom", "0px solid rgb(26, 26, 26)");
			$("#lps").removeClass("active");
			$("#lps").css("color", "#e5e5e5");
			$(".sbfp-newest-uploaded").css("z-index", "0");

			var elem = $(".sbfp-lps:visible").length ? $(".sbfp-lps:visible") : $(".sbfp-lps:first");
			$(".sbfp-lps").slideUp("fast");
		}
	}	
	function toggleOneOffs() {
		if (lpsToggled == true) {
			toggleLetsPlays();
		} else if (extrasToggled == true) {
			toggleExtras();
		} else if (machinimaToggled == true) {
			toggleMachinima();
		} else if (linksToggled == true) {
			toggleLinks();
		}

		if ($(".sbfp-one-offs").css("display") == "none" && 
		    $(".sbfp-navbar-primary").css("border-bottom") == "0px solid rgb(26, 26, 26)" && 
		    oneOffsToggled == false) {
			oneOffsToggled = true;
			$(".sbfp-navbar-primary").css("border-bottom", "2px solid rgb(26, 26, 26)");				
			$("#one-offs").toggleClass("active");
			$("#one-offs").css("color", "#ff9900");
			$(".sbfp-newest-uploaded").css("z-index", "-1");

			$(".sbfp-one-offs").slideDown("slow");
		} else {
			oneOffsToggled = false;
			$(".sbfp-navbar-primary").css("border-bottom", "0px solid rgb(26, 26, 26)");
			$("#one-offs").removeClass("active");
			$("#one-offs").css("color", "#e5e5e5");
			$(".sbfp-newest-uploaded").css("z-index", "0");

			var elem = $(".sbfp-one-offs:visible").length ? $(".sbfp-one-offs:visible") : $(".sbfp-one-offs:first");
			$(".sbfp-one-offs").slideUp("fast");
		}

	}
	function toggleExtras() {
		if (lpsToggled == true) {
			toggleLetsPlays();
		} else if (oneOffsToggled == true) {
			toggleOneOffs();
		} else if (machinimaToggled == true) {
			toggleMachinima();
		} else if (linksToggled == true) {
			toggleLinks();
		}

		if ($(".sbfp-extras").css("display") == "none" && 
		    $(".sbfp-navbar-primary").css("border-bottom") == "0px solid rgb(26, 26, 26)" && 
		    extrasToggled == false) {
			extrasToggled = true;
			$(".sbfp-navbar-primary").css("border-bottom", "2px solid rgb(26, 26, 26)");
			$("#extras").toggleClass("active");
			$("#extras").css("color", "#ff9900");
			$(".sbfp-newest-uploaded").css("z-index", "-1");

			$(".sbfp-extras").slideDown("slow");
		} else {
			extrasToggled = false;
			$(".sbfp-navbar-primary").css("border-bottom", "0px solid rgb(26, 26, 26)");
			$("#extras").removeClass("active");
			$("#extras").css("color", "#e5e5e5");
			$(".sbfp-newest-uploaded").css("z-index", "0");

			var elem = $(".sbfp-extras:visible").length ? $(".sbfp-extras:visible") : $(".sbfp-extras:first");
			$(".sbfp-extras").slideUp("fast");
		}	
	}
	function toggleMachinima() {
		if (lpsToggled == true) {
			toggleLetsPlays();
		} else if (oneOffsToggled == true) {
			toggleOneOffs();
		} else if (extrasToggled == true) {
			toggleExtras();
		} else if (linksToggled == true) {
			toggleLinks();
		}

		if ($(".sbfp-machinima").css("display") == "none" && 
		    $(".sbfp-navbar-primary").css("border-bottom") == "0px solid rgb(26, 26, 26)" && 
		    machinimaToggled == false) {
			machinimaToggled = true;
			$(".sbfp-navbar-primary").css("border-bottom", "2px solid rgb(26, 26, 26)");
			$("#machinima").toggleClass("active");
			$("#machinima").css("color", "#ff9900");
			$(".sbfp-newest-uploaded").css("z-index", "-1");

			$(".sbfp-machinima").slideDown("slow");
		} else {
			machinimaToggled = false;
			$(".sbfp-navbar-primary").css("border-bottom", "0px solid rgb(26, 26, 26)");
			$("#machinima").removeClass("active");
			$("#machinima").css("color", "#e5e5e5");
			$(".sbfp-newest-uploaded").css("z-index", "0");

			var elem = $(".sbfp-machinima:visible").length ? $(".sbfp-machinima:visible") : $(".sbfp-machinima:first");
			$(".sbfp-machinima").slideUp("fast");
		}	
	}
	function toggleLinks() {
		if (lpsToggled == true) {
			toggleLetsPlays();
		} else if (oneOffsToggled == true) {
			toggleOneOffs();
		} else if (extrasToggled == true) {
			toggleExtras();
		} else if (machinimaToggled == true) {
			toggleMachinima();
		}

		if ($(".sbfp-links").css("display") == "none" &&
		    $(".sbfp-navbar-primary").css("border-bottom") == "0px solid rgb(26, 26, 26)" && 
		    linksToggled == false) {
			linksToggled = true;
			$(".sbfp-navbar-primary").css("border-bottom", "2px solid rgb(26, 26, 26)");
			$("#links").toggleClass("active");
			$("#links").css("color", "#ff9900");
			$(".sbfp-newest-uploaded").css("z-index", "-1");

			$(".sbfp-links").slideDown("slow");
		} else {
			linksToggled = false;
			$(".sbfp-navbar-primary").css("border-bottom", "0px solid rgb(26, 26, 26)");
			$("#links").removeClass("active");
			$("#links").css("color", "#e5e5e5");
			$(".sbfp-newest-uploaded").css("z-index", "0");

			var elem = $(".sbfp-links:visible").length ? $(".sbfp-links:visible") : $(".sbfp-links:first");
			$(".sbfp-links").slideUp("fast");
		}
	}

	//Navigation links clicked
	$("#lps").click(function() {
		toggleLetsPlays();
	});
	$("#one-offs").click(function() {
		toggleOneOffs();
	});
	$("#extras").click(function() {
		toggleExtras();
	});
	$("#machinima").click(function() {
		toggleMachinima();
	});
	$("#links").click(function() {
		toggleLinks();	
	});
	$("#navbar-button").click(function() {
		if (lpsToggled == true) {
			toggleLetsPlays();
		} else if (oneOffsToggled == true) {
			toggleOneOffs();
		} else if (extrasToggled == true) {
			toggleExtras();
		} else if (machinimaToggled == true) {
			toggleMachinima();
		} else if (linksToggled == true) {
			toggleLinks();
		}
	});	
});
