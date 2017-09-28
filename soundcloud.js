

let songs = [];
let currentSong = 0;

SC.initialize({
 client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

SC.resolve("https://api.soundcloud.com/playlists/232207406?client_id=fd4e76fc67798bfa742089ed619084a6").then(function(data){
	console.log(data);
	songs.push(...data.tracks);
	console.log(songs);
});


let myJukebox
  , songTitle
  , controls
  , backward
  , play
  , pause
  , forward
  , albumCover
  ;

 document.addEventListener("DOMContentLoaded",function(){
	  myJukebox = document.querySelector("#myJukebox");
	  songTitle = myJukebox.querySelector(".songTitle");
	  albumCover = myJukebox.querySelector(".albumCover");
	  controls = myJukebox.querySelector("#controls")
	  backward = controls.querySelector(".fa.fa-backward");
	  play = controls.querySelector(".fa.fa-play");
	  pause = controls.querySelector(".fa.fa-pause");
	  forward = controls.querySelector(".fa.fa-forward");
	  play.addEventListener("click", function(){
	  	stream();
	  	console.log("Playing")
	  	title();
	  	console.log()
  	});
	  pause.addEventListener("click", function(){
	  	songs[currentSong].player.pause();
	  	console.log("Not Playing");
	});
	  forward.addEventListener("click", function(){
	  	songs[currentSong].player.pause();
	  	songs[currentSong].player.seek(0);
	  	currentSong = (currentSong + 1) % songs.length;
	  	stream();
	  	title();
	  	console.log("playing Next")
	  });
	  backward.addEventListener("click", function(){
	  	songs[currentSong].player.pause();
	  	songs[currentSong].player.seek(0);
	  	currentSong = (currentSong - 1) % songs.length;
	  	if (currentSong == -1){
	  		currentSong = songs.length - 1;
	  	}
	  	stream();
	  	title();
	  	console.log("Playing Previous")
	  });
});


//functions
function stream(){
	if( songs[currentSong].player ) {
		songs[currentSong].player.play();
	} else {
		SC.stream(`/tracks/${songs[currentSong].id}`).then(function(response){
			// console.log("playing")
			songs[currentSong].player = response;
			response.play();
			player.on("finish", function(){
				console.log(finish);
				currentSong += 1;
				stream();
			});
		});
	}
}

function title(){
	songTitle.innerText = songs[currentSong].title;
}






