

SC.initialize({
 client_id: 'fd4e76fc67798bfa742089ed619084a6'
});

let player;
let songs = [];
let currentSong = 0;

let songTitle
  , controls
  , backward
  , play
  , pause
  , forward
  , myJukebox
  , artistName
  , genre
  , trackDuration
  , release
  , playlist
  ;

 document.addEventListener("DOMContentLoaded",function(){
	  songTitle = document.querySelector(".songTitle");
	  controls = document.querySelector("#controls")
	  backward = controls.querySelector(".fa.fa-backward");
	  play = controls.querySelector(".fa.fa-play");
	  pause = controls.querySelector(".fa.fa-pause");
	  forward = controls.querySelector(".fa.fa-forward");
	  artistName = document.querySelector(".artistName");
	  genre = document.querySelector(".genre");
	  trackDuration = document.querySelector(".trackDuration");
	  release = document.querySelector(".release")
	  playlist = document.querySelector(".playlist");
	  myJukebox = new Jukebox('https://api.soundcloud.com/playlists/232207406?client_id=fd4e76fc67798bfa742089ed619084a6');
});

function Jukebox(apiKey){
	this.songs = [];
	this.currentSong = 0;

	this.loadPlaylist(apiKey);

	play.addEventListener("click", () => {
		this.play();
		this.updateText();
	});

	pause.addEventListener("click", () => {
		console.log("Paused");
		this.pause();
	});

	forward.addEventListener("click", () => {
		console.log("Playing Next");
		this.forward();
		this.updateText();
	})
	
	backward.addEventListener("click", () => {
		console.log("Playing Previous");
		this.backward();
		this.updateText();
	});
}

Jukebox.prototype.loadPlaylist = function(apiKey){
	SC.resolve(apiKey).then((data) => {
		console.log(data);
		this.songs.push(...data.tracks);
		this.updateText();
	});
}

Jukebox.prototype.play =function(){
	// console.log(this.songs, this.songs[this.currentSong]);
	if( this.songs[this.currentSong].player ) {
		this.songs[this.currentSong].player.play();
	} else {
		SC.stream(`/tracks/${this.songs[this.currentSong].id}`).then((response) => {
		  this.songs[this.currentSong].player = response;
		  response.play();
		  player.on("finish", function(){
				console.log(finish);
				currentSong += 1;
				stream();
			});
		});
	}
}

Jukebox.prototype.pause = function(){
	if( this.songs[this.currentSong].player ) {
		this.songs[this.currentSong].player.pause();
		this.songs[this.currentSong].player.seek(0);
	}
}
Jukebox.prototype.forward = function(){
	this.pause();
	this.currentSong = (this.currentSong + 1) % this.songs.length;
	this.play();
}
Jukebox.prototype.backward = function(){
	this.pause();
	this.currentSong = (this.currentSong - 1) % this.songs.length;
	if (this.currentSong == -1){
		this.currentSong = this.songs.length - 1;
	}	
	this.play();
}

Jukebox.prototype.updateText = function(){
	// console.log(this)
	songTitle.innerText = this.songs[this.currentSong].title;
	artistName.innerText = this.songs[this.currentSong].user.username;
	genre.innerText = this.songs[this.currentSong].genre;
	trackDuration.innerText = convertDuration(this.songs[this.currentSong].duration);
	release.innerText = (new Date(this.songs[this.currentSong].created_at)).toLocaleDateString();
}

// function convertDuration(duration){
// 	let seconds = parseInt(duration/ 1000);
// 	return parseInt(seconds/60) + ":" + ("0+seconds%60").slice(-2);
// }
function convertDuration(ms) {
	hours = Math.
    minutes = Math.floor((ms % 3600000) / 60000), // 1 Minutes = 60000 Milliseconds
    seconds = Math.floor(((ms % 360000) % 60000) / 1000) // 1 Second = 1000 Milliseconds
    return minutes + ":" + ("0"+seconds%60).slice(-2);
}



