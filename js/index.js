var sbfpPlaylists = null;
var sbfpLpsPlaylists = [];
var sbfpOneOffsPlaylist = null;
var sbfpExtrasPlaylist = [];
var sbfpMachinimaPlaylist = null;
var sbfpNewestUploadsPlaylist = null;

var lpsID = 0;
var oneOffsID = 0;
var extrasID = 0;
var machinimaID = 0;

var lpsGridImageNum = 12;
var oneOffsGridImageNum = 12;
var extrasGridImageNum = 12;
var machinimaGridImageNum = 12;

// Ideally, each content section should have a total of 50 videos each after webpage is loaded
var totalLps = null;
var totalOneOffs = null;
//var totalExtras = null;
var totalMachinima = null;

var isForNextFiftyLps = false;
var isForNextFiftyOneOffs = false;
var isForNextFiftyExtras = false;
var isForNextFiftyMachinima = false;

var lpsNextPageToken = null;
var oneOffsNextPageToken = null;
var machinimaNextPageToken = null;

var lpsToggled = false;
var oneOffsToggled = false;
var extrasToggled = false;
var machinimaToggled = false;
var linksToggled = false;

/* Some videos belong in the Extras section, not LPs section.
 *  Function will remove those videos in sbfpLpsPlaylists and puts
 *  them in sbfpExtrasPlaylist.
 */
function filterLpsPlaylists() {
	//console.log("============= Filtering LPs playlists to create extras playlist  =============");
	
	for (i=0; i<sbfpPlaylists["items"].length; i++) {
		var playlistTitle = sbfpPlaylists["items"][i]["snippet"]["title"];
		
		//Use this until I can find a way to read filterKeyWords.txt once the website is published
		if (playlistTitle.toUpperCase().includes("DEMON'S SOULS") || playlistTitle.toUpperCase().includes("SHITTY GAMES DONE SLOW") ||
		    playlistTitle.toUpperCase().includes("ENGRISH FINAL FIGHT") || playlistTitle.toUpperCase().includes("SUPER BEST FRIENDS STREAM! HEAVY RAIN") ||
		    playlistTitle.toUpperCase().includes("WRONCHI ANIMATION") || playlistTitle.toUpperCase().includes("SHITSTORM") ||
		    playlistTitle.toUpperCase().includes("NEW SUPER TROLL BROS") || playlistTitle.toUpperCase().includes("SUPER BEST IRON FRIENDS") ||
		    playlistTitle.toUpperCase().includes("PSVR LAUNCH STREAM") || playlistTitle.toUpperCase().includes("OLD SCHOOL") || 
		    playlistTitle.toUpperCase().includes("OLDSCHOOL") || playlistTitle.toUpperCase().includes("BEST OF") || 
		    playlistTitle.toUpperCase().includes("PAT STREAMS AT") || playlistTitle.toUpperCase().includes("FIGHTERPEDIA") || 
		    playlistTitle.toUpperCase().includes("MACHINIMA TRAILERS") || playlistTitle.toUpperCase().includes("FRIDAY NIGHT FISTICUFFS") || 
		    playlistTitle.toUpperCase().includes("SATURDAY MORNING SCRUBLORDS") || playlistTitle.toUpperCase().includes("SCRUBLORDS") ||
		    playlistTitle.toUpperCase().includes("SBFP RANDOM") || playlistTitle.toUpperCase().includes("TOP TEN") || 
		    playlistTitle.toUpperCase().includes("THE BOXART CRITIQUE") || playlistTitle.toUpperCase().includes("PODCAST TRAILERS") ||
		    playlistTitle.toUpperCase().includes("BEST FRIENDS IN JAPAN") || playlistTitle.toUpperCase().includes("MATT'S BOMB-ASS VIDEOS") ||
		    playlistTitle.toUpperCase().includes("PROMOS") || playlistTitle.toUpperCase().includes("E3") ||
		    playlistTitle.toUpperCase().includes("ARTS AND CRAFTS") || playlistTitle.toUpperCase().includes("FUNTIME ADVENTURE") ||
		    playlistTitle.toUpperCase().includes("STAR WARS WEEK") || playlistTitle.toUpperCase().includes("MYSTERY BOX") ||
		    playlistTitle.toUpperCase().includes("MECHAWEEK") || playlistTitle.toUpperCase().includes("JURASSIC WEEK") ||
		    playlistTitle.toUpperCase().includes("CRYME TYME") || playlistTitle.toUpperCase().includes("CREEPY ANIME BULLSHIT") ||
		    playlistTitle.toUpperCase().includes("TERMINATOR WEEK") || playlistTitle.toUpperCase().includes("RUSTLEMANIA") ||
		    playlistTitle.toUpperCase().includes("FRIENDCAST MAILBAG") || playlistTitle.toUpperCase().includes("BEST FRIEND VS") ||
		    playlistTitle.toUpperCase().includes("PAT STARES AT") || playlistTitle.toUpperCase().includes("GODZILLA WEEK") ||
		    playlistTitle.toUpperCase().includes("AMAZING SUPERFRIENDS") || playlistTitle.toUpperCase().includes("TURTLE WEEK") ||
		    playlistTitle.toUpperCase().includes("HUNTIN' AND KILLIN'") || playlistTitle.toUpperCase().includes("BOND-A-THON") ||
		    playlistTitle.toUpperCase().includes("FANS ARE THE GREATEST") || playlistTitle.toUpperCase().includes("TOP 10S") ||
		    playlistTitle.toUpperCase().includes("BEAT EM' UPS") || playlistTitle.toUpperCase().includes("TOP 10S") ||
		    playlistTitle.toUpperCase().includes("SPINDASH") || playlistTitle.toUpperCase().includes("STRIDER WEEK") ||
		    playlistTitle.toUpperCase().includes("BEST FRIENDS BRAWL") || playlistTitle.toUpperCase().includes("MINI TWO BEST FRIENDS") ||
		    playlistTitle.toUpperCase().includes("BLOOPERS") || playlistTitle.toUpperCase().includes("ONE-SHOTS") ||
		    playlistTitle.toUpperCase().includes("METROID OTHER M") || playlistTitle.toUpperCase().includes("VS CONS") ||
		    playlistTitle.toUpperCase().includes("HALLOWEEN") || playlistTitle.toUpperCase().includes("BESTFRIENDSVANIA") ||
		    playlistTitle.toUpperCase().includes("BOXING: THE FIGHTING") || playlistTitle.toUpperCase().includes("BESTFRIENDSVANIA") ||
		    playlistTitle.toUpperCase().includes("BEST FRIENDS DRIFT") || playlistTitle.toUpperCase().includes("RARE REPLAY")) {
			
			sbfpExtrasPlaylist.push(sbfpPlaylists["items"][i]);
			//totalExtras++;
		} else if (playlistTitle.toUpperCase().includes("FAVORITES") || playlistTitle.toUpperCase().includes("LIKED VIDEOS") ||
		           playlistTitle.toUpperCase().includes("MACHINIMA EPISODES")) {
			
			continue;
		} else {
			//console.log(playlistTitle);
			sbfpLpsPlaylists.push(sbfpPlaylists["items"][i]);
			totalLps++;
		}
	}
	
	lpsNextPageToken = sbfpPlaylists["nextPageToken"];
	sbfpPlaylists = null;

	lpsContent();
	extrasContent();	
}

function lpsContent() {
	//console.log("============= Creating LPs content =============");
	
	for (i=0; i<sbfpLpsPlaylists.length; i++) {
		var playlistID = sbfpLpsPlaylists[i]["id"].replace(/['"]+/g, '');
		var playlistURL = "https://www.youtube.com/embed/?listType=playlist&list="+playlistID+"&index=0";
		var playlistImgURL = sbfpLpsPlaylists[i]["snippet"]["thumbnails"]["high"]["url"];
		var playlistTitle = sbfpLpsPlaylists[i]["snippet"]["title"];

		if (i >= 12 && isForNextFiftyLps == false) {
			$(".lps-grid-images").append('<div class="lps-grid-image-box" id="lp-'+lpsID+'" style="display:none;">'); 
			$("#lp-"+lpsID).append('<a class="gallery-video-link" id="lp-video-link-'+lpsID+'" href="'+playlistURL+'"><img class="lps-grid-image" src="'+playlistImgURL+'" alt="'+playlistTitle+'" /></a>');
		} else if (i >= 4 && isForNextFiftyLps == true) {
			$(".lps-grid-images").append('<div class="lps-grid-image-box" id="lp-'+lpsID+'" style="display:none;">'); 
			$("#lp-"+lpsID).append('<a class="gallery-video-link" id="lp-video-link-'+lpsID+'" href="'+playlistURL+'"><img class="lps-grid-image" src="'+playlistImgURL+'" alt="'+playlistTitle+'" /></a>');
		} else {
			$(".lps-grid-images").append('<div class="lps-grid-image-box" id="lp-'+lpsID+'">'); 
			$("#lp-"+lpsID).append('<a class="gallery-video-link" id="lp-video-link-'+lpsID+'" href="'+playlistURL+'"><img class="lps-grid-image" src="'+playlistImgURL+'" alt="'+playlistTitle+'" /></a>');
		}
		
		lpsID++;	
	}
	
	sbfpLpsPlaylists = [];	
}
function oneOffsContent() {
	//console.log("============= Creating one-offs content =============");
	
	for (i=0; i<sbfpOneOffsPlaylist["items"].length; i++) {
		var videoID = sbfpOneOffsPlaylist["items"][i]["snippet"]["resourceId"]["videoId"].replace(/['"]+/g, '');
		var videoURL = "https://www.youtube.com/embed/"+videoID;
		var videoImgURL = sbfpOneOffsPlaylist["items"][i]["snippet"]["thumbnails"]["high"]["url"];
		var videoTitle = sbfpOneOffsPlaylist["items"][i]["snippet"]["title"];

		if (i >= 12 && isForNextFiftyOneOffs == false) {
			$(".one-offs-grid-images").append('<div class="one-offs-grid-image-box" id="one-off-'+oneOffsID+'" style="display:none;">'); 
			$("#one-off-"+oneOffsID).append('<a class="gallery-video-link" id="one-off-video-link-'+oneOffsID+'" href="'+videoURL+'"><img class="one-offs-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		} else if (i >= 4 && isForNextFiftyOneOffs == true) {
			$(".one-offs-grid-images").append('<div class="one-offs-grid-image-box" id="one-off-'+oneOffsID+'" style="display:none;">'); 
			$("#one-off-"+oneOffsID).append('<a class="gallery-video-link" id="one-off-video-link-'+oneOffsID+'" href="'+videoURL+'"><img class="one-offs-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		} else {
			$(".one-offs-grid-images").append('<div class="one-offs-grid-image-box" id="one-off-'+oneOffsID+'">'); 
			$("#one-off-"+oneOffsID).append('<a class="gallery-video-link" id="one-off-video-link-'+oneOffsID+'" href="'+videoURL+'"><img class="one-offs-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		}			
		
		totalOneOffs++;
		oneOffsID++;
	}	
	
	oneOffsNextPageToken = sbfpOneOffsPlaylist["nextPageToken"];
}
function extrasContent() {
	//console.log("============= Creating extras content =============");
	
	for (i=0; i<sbfpExtrasPlaylist.length; i++) {
		var playlistID = sbfpExtrasPlaylist[i]["id"].replace(/['"]+/g, '');
		var playlistURL = "https://www.youtube.com/embed/?listType=playlist&list="+playlistID+"&index=0";
		var playlistImgURL = sbfpExtrasPlaylist[i]["snippet"]["thumbnails"]["high"]["url"];
		var playlistTitle = sbfpExtrasPlaylist[i]["snippet"]["title"];
		
		//console.log("Adding content to .sbfp-extras");
		
		if (i >= 12 && isForNextFiftyExtras == false){
			$(".extras-grid-images").append('<div class="extras-grid-image-box" id="extra-'+extrasID+'" style="display:none;">'); 
			$("#extra-"+extrasID).append('<a class="gallery-video-link" id="extra-video-link-'+extrasID+'" href="'+playlistURL+'"><img class="extras-grid-image" src='+playlistImgURL+' alt='+playlistTitle+' /></a>');
		} else if (isForNextFiftyExtras == true) {
			$(".extras-grid-images").append('<div class="extras-grid-image-box" id="extra-'+extrasID+'" style="display:none;">'); 
			$("#extra-"+extrasID).append('<a class="gallery-video-link" id="extra-video-link-'+extrasID+'" href="'+playlistURL+'"><img class="extras-grid-image" src='+playlistImgURL+' alt='+playlistTitle+' /></a>');
		} else {
			$(".extras-grid-images").append('<div class="extras-grid-image-box" id="extra-'+extrasID+'">'); 
			$("#extra-"+extrasID).append('<a class="gallery-video-link" id="extra-video-link-'+extrasID+'" href="'+playlistURL+'"><img class="extras-grid-image" src='+playlistImgURL+' alt='+playlistTitle+' /></a>');
		}

		extrasID++;
	}

	sbfpExtrasPlaylist = [];	
}
function machinimaContent() {
	//console.log("============= Creating machinima content =============");

	for (i=0; i<sbfpMachinimaPlaylist["items"].length; i++) {
		var videoID = sbfpMachinimaPlaylist["items"][i]["snippet"]["resourceId"]["videoId"].replace(/['"]+/g, '');
		var videoURL = "https://www.youtube.com/embed/"+videoID;
		var videoImgURL = sbfpMachinimaPlaylist["items"][i]["snippet"]["thumbnails"]["high"]["url"];
		var videoTitle = sbfpMachinimaPlaylist["items"][i]["snippet"]["title"];

		//console.log("Adding content to .sbfp-machinima");

		if (i >= 12 && isForNextFiftyMachinima == false) {
			$(".machinima-grid-images").append('<div class="machinima-grid-image-box" id="machinima-'+machinimaID+'" style="display:none;">'); 
			$("#machinima-"+machinimaID).append('<a class="gallery-video-link" id="machinima-video-link-'+machinimaID+'" href="'+videoURL+'"><img class="machinima-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		} else if (i >= 4 && isForNextFiftyMachinima == true) {
			$(".machinima-grid-images").append('<div class="machinima-grid-image-box" id="machinima-'+machinimaID+'" style="display:none;">'); 
			$("#machinima-"+machinimaID).append('<a class="gallery-video-link" id="machinima-video-link-'+machinimaID+'" href="'+videoURL+'"><img class="machinima-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		} else {
			$(".machinima-grid-images").append('<div class="machinima-grid-image-box" id="machinima-'+machinimaID+'">'); 
			$("#machinima-"+machinimaID).append('<a class="gallery-video-link" id="machinima-video-link-'+machinimaID+'" href="'+videoURL+'"><img class="machinima-grid-image" src='+videoImgURL+' alt='+videoTitle+' /></a>');
		}
		
		totalMachinima++;
		machinimaID++;	
	}

	machinimaNextPageToken = sbfpMachinimaPlaylist["nextPageToken"];
}
function newestUploadsContent() {
	console.log("============= Creating newest uploads content =============");

	for (i=0; i<sbfpNewestUploadsPlaylist["items"].length; i++) {
		var videoID = sbfpNewestUploadsPlaylist["items"][i]["snippet"]["resourceId"]["videoId"].replace(/['"]+/g, '');
		var videoURL = "https://www.youtube.com/embed/"+videoID;
		var videoImgURL = sbfpNewestUploadsPlaylist["items"][i]["snippet"]["thumbnails"]["high"]["url"];
		var videoTitle = sbfpNewestUploadsPlaylist["items"][i]["snippet"]["title"];

		console.log(videoTitle);
		//console.log("Adding content to .sbfp-newest-uploaded");

		$(".amazingcarousel-item:nth-child("+(i+1)+") .amazingcarousel-item-container .amazingcarousel-image a").attr("href", videoURL);
		$(".amazingcarousel-item:nth-child("+(i+1)+") .amazingcarousel-item-container .amazingcarousel-image a img").attr("src", videoImgURL);
		$(".amazingcarousel-item:nth-child("+(i+1)+") .amazingcarousel-item-container .amazingcarousel-title .carousel-video-text").text(videoTitle);
	}
}

function lpsPlaylists(url) {
	//console.log("============= Creating list of LP playlists  =============");
	// Playlists File Creation
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		/*if (xhr.readyState == 1) {
			console.log("Server connection established");	
		} else if (xhr.readyState == 2) {
			console.log("Request received");
		} else if (xhr.readyState == 3) {
			console.log("Processing request");
		} else*/if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				//console.log("Request processed");
				try {
					sbfpPlaylists = JSON.parse(xhr.responseText);
					
					filterLpsPlaylists();
				//	console.log("Response received is JSON");

				} catch(err) {
				//	console.log("Response received is not JSON");
				}
			} else if (xhr.status == 404) {
				//console.log("Request could not be processed");
			}
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
}
function oneOffsPlaylist(url) {
	//console.log("============= Creating list of one-offs  =============");
	// Playlists File Creation
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		/*if (xhr.readyState == 1) {
			console.log("Server connection established");	
		} else if (xhr.readyState == 2) {
			console.log("Request received");
		} else if (xhr.readyState == 3) {
			console.log("Processing request");
		} else*/ if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				//console.log("Request processed");
				try {
					sbfpOneOffsPlaylist = JSON.parse(xhr.responseText);
						
					oneOffsContent();
				//	console.log("Response received is JSON");

				} catch(err) {
				//	console.log("Response received is not JSON");
				}
			} else if (xhr.status == 404) {
				//console.log("Request could not be processed");
			}
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
}
function machinimaPlaylist(url) {
	//console.log("============= Creating list of machinima videos  =============");
	// Playlists File Creation
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		/*if (xhr.readyState == 1) {
			console.log("Server connection established");	
		} else if (xhr.readyState == 2) {
			console.log("Request received");
		} else if (xhr.readyState == 3) {
			console.log("Processing request");
		} else*/ if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				//console.log("Request processed");
				try {
					sbfpMachinimaPlaylist = JSON.parse(xhr.responseText);
					
					machinimaContent();
				//	console.log("Response received is JSON");

				} catch(err) {
				//	console.log("Response received is not JSON");
				}
			} else if (xhr.status == 404) {
				//console.log("Request could not be processed");
			}
		}
	}

	xhr.open('GET', url, true);
	xhr.send();
}
function newestUploadsPlaylist(url) {
	console.log("============= Creating list of newest uploaded videos  =============");
	// Playlists File Creation
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function() {
		/*if (xhr.readyState == 1) {
			console.log("Server connection established");	
		} else if (xhr.readyState == 2) {
			console.log("Request received");
		} else if (xhr.readyState == 3) {
			console.log("Processing request");
		} else*/ if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				console.log("Request processed");
				try {
					var newestUploads = JSON.parse(xhr.responseText);
					var newestUploadsID = newestUploads["items"][0]["contentDetails"]["relatedPlaylists"]["uploads"];
					
					var xhr2 = new XMLHttpRequest();

					xhr2.onreadystatechange = function() {
						if (xhr2.readyState == 4 && xhr.status == 200) {
							try {
								sbfpNewestUploadsPlaylist = JSON.parse(xhr2.responseText);
								newestUploadsContent();
								console.log("Response received is JSON");
							} catch(err) {
								console.log("Response received is not JSON");
							}
						}
					}

					xhr2.open('GET', "https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId="+newestUploadsID+"&maxResults=10&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&", true);
					xhr2.send();
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
$(window).bind('createNewestUploadsPlaylist', newestUploadsPlaylist("https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=UC84X0epDRFdTrybxEX8ZWkA&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&"));

$(document).ready(function() {	
	// Before website is fully ready
	$(window).trigger('createLpsPlaylist');
	$(window).trigger('createOneOffsPlaylist');
	$(window).trigger('createMachinimaPlaylist');
	$(window).trigger('createNewestUploadsPlaylist');

	// Activate overflow-y for content
	function nextFiftyLps() {
		//console.log("============= Creating another list of LP playlists  =============");
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
						sbfpPlaylists = JSON.parse(xhr.responseText);
	
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
	
		xhr.open('GET',
			 "https://www.googleapis.com/youtube/v3/playlists?channelId=UC84X0epDRFdTrybxEX8ZWkA&part=snippet&maxResults=50&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&pageToken="+lpsNextPageToken, true);
		xhr.send();
	}
	function nextFiftyOneOffs() {
		console.log("============= Creating another list of one-offs  =============");
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
	
		xhr.open('GET',
			 "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PL57hJfweW_2vsamTeyFNRE7JgfQGK7uHh&part=snippet&maxResults=50&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&pageToken="+oneOffsNextPageToken, true);
		xhr.send();
	}
	function nextFiftyMachinima() {
		console.log("============= Creating another list of machinima =============");
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
	
		xhr.open('GET',
			 "https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLxROszFPI_5NwVfGgvcQKS01REhSn-D26&part=snippet&maxResults=50&key=AIzaSyAZFp6zixMQ0bbf0o0Sj7c0fH6xAEkumIw&pageToken="+machinimaNextPageToken, true);
		xhr.send();
	}

	jQuery(function($) {
		$(".sbfp-lps").bind("scroll", function() {
			if ($(this).scrollTop() + $(this).innerHeight() + 1 >= $(this)[0].scrollHeight) {
				console.log("End of scroll");	
				for (i=0; i<4; i++) {
					$(".lps-grid-image-box:nth-child("+lpsGridImageNum+")").css("display", "inline");
					lpsGridImageNum++;
					if (lpsGridImageNum > totalLps) {
						isForNextFiftyLps = true;
						isForNextFiftyExtras = true;
						nextFiftyLps();
						break;
					}
				}
			}
		});
		$(".sbfp-one-offs").bind("scroll", function() {
			if ($(this).scrollTop() + $(this).innerHeight() + 1 >= $(this)[0].scrollHeight) {
				console.log("End of one-offs content reached");
				for (i=0; i<4; i++) {
					$(".one-offs-grid-image-box:nth-child("+oneOffsGridImageNum+")").css("display", "inline");
					++oneOffsGridImageNum;
					if (oneOffsGridImageNum > totalOneOffs) {
						isForNextFiftyOneOffs = true;
						nextFiftyOneOffs();
						break;
					}
				}
			}
		});
		$(".sbfp-extras").bind("scroll", function() {
			if ($(this).scrollTop() + $(this).innerHeight() + 1 >= $(this)[0].scrollHeight) {
				console.log("End of scroll");	
				for (i=0; i<4; i++) {
					$(".extras-grid-image-box:nth-child("+extrasGridImageNum+")").css("display", "inline");
					extrasGridImageNum++;
					/*if (extrasGridImageNum > totalExtras) {
						isForNextFiftyExtras = true;
						nextFiftyLps();
						break;
					}*/
				}
			}
		});
		$(".sbfp-machinima").bind("scroll", function() {
			if ($(this).scrollTop() + $(this).innerHeight() + 1 >= $(this)[0].scrollHeight) {
				console.log("End of one-offs content reached");
				for (i=0; i<4; i++) {
					$(".machinima-grid-image-box:nth-child("+machinimaGridImageNum+")").css("display", "inline");
					++machinimaGridImageNum;
					if (machinimaGridImageNum > totalMachinima) {
						isForNextFiftyMachinima = true;
						nextFiftyMachinima();
						break;
					}
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
