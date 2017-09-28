

// function Song(title, artist, duration){
// 	this.title = title;
// 	this.artist = artist;
// 	this.duration = duration;
// 	this.isPlaying = false;
// }
// Song.prototype.play = function(){
// 	this.isPlaying = true;
// };
// Song.prototype.stop = function(){
// 	this.isPlaying = false;
// };

// function Playlist() {

// }

// Playlist.prototype.add = function() {

// };

// Playlist.prototype.play = function() {

// };

// Playlist.prototype.stop = function(){


// function Jukebox(){
//   this.songs = [
//   {id: 1342343, title: "My fav song"}
//   ];
//   this.currentSong = 0;	
// }

// Jukebox.prototype = {
//   play: function(){
//     SC.stream(`/tracks/${this.songs[this.currentSong]}`).then(function(response){
//       this.songs[this.currentSong].player = response;
//       response.play();
//     });
//   }
// }

// currentSong.then(function(player){
	  // 	player.play();
	  // 	player.on("finish", function(){
	  // 		console.log( "Done" );
	  // 		currentSong += 1;
	  // 		playNext();
	  // 	});
	  // });

// Jukebox.prototype.addSong = function(name, file){
// 	this.songs.push(new Song(name, file));
// 	return this;
// };
// Jukebox.prototype.play = function(){
// 	SC.stream(`/tracks/${this.songs[this.currentSong]}`).then(function(response){
// 		this.songs[this.currentSong].player = response;
// 		response.play();
// 	});
// }


// SC.initialize({
//  client_id: 'fd4e76fc67798bfa742089ed619084a6'
// });

//Jukebox.prototype = {
	// play: function(){
	// 	SC.stream(`/tracks/${this.songs[this.currentSong]}`).then(function(response){
	// 		this.songs[this.currentSong].player = response;
	// 		response.play();
	// 	});
	// },


//addSong1: function(name, id){
	// 	this.songs.push(new Song1(name, id));
	// 	return this;
	// }


//function Song1( name, id ){
// 	this.name = name;
// 	this.id = id;
// 	return this;
// }
// const jukebox1 = new Jukebox();
// jukebox.addSong1("Way Back Home","267710282");

// SC.resolve("https://soundcloud.com/user-576448461/way-back-home-alphalete-remix").then(function(data){
//   console.log(data);
// });
// SC.stream( '/tracks/267710282' ).then(function(player){
// 	console.log(player);
// 	player.play();
// });



// function Jukebox(){
//   this.playlist = [
//     {id: 1232143, title: "Something"},
//     {id: 1343125, title: "Another song"}
//   ];
//   this.currentSong = 0;
// }
// Jukebox.prototype.play = function(){
//   let song = this.playlist[this.currentSong];
//   if( song.player ) {
//     song.player.play();
//   } else {
//     SC.stream(`/tracks/${song.id}`).then(function(player){
//       song.player = player;
//       player.play();
//     });
//   }
// }

//stream() = false;

// function Jukebox(){
// 	this.songs = [];
// 	this.currentSong = 0;
// }

// Jukebox.prototype = {
// 	play: function(){
// 		let Song = this.songs[this.currentSong];
// 		if( Song.player ){
// 			Song.player.play();
// 		} else {
// 		SC.stream(`/tracks/${this.songs[this.currentSong]}`).then(function(response){
// 			this.songs[this.currentSong].player = response;
// 			response.play();
// 		});
// 		}
// 	},
// 	addSong: function(name, id){
// 		this.songs.push(new Song(name, id));
// 		return this;
// 	},
// }

// function Song( name, id ){
// 	this.name = name;
// 	this.id = id;
// 	return this;
// }
// const jukebox = new Jukebox();
// jukebox.addSong("Way Back Home","267710282");


// let currentSong = 0
//   , myJukebox
//   , player
//   , elCurrentSong
//   , controls
//   , backward
//   , play
//   , pause
//   , forward
//   ;

//  document.addEventListener("DOMContentLoaded",function(){
// 	  myJukebox = document.querySelector("#myJukebox");
// 	  player = myJukebox.querySelector("audio");
// 	  elCurrentSong = myJukebox.querySelector(".currentSong");
// 	  controls = myJukebox.querySelector("#controls")
// 	  backward = controls.querySelector(".fa.fa-backward");
// 	  play = controls.querySelector(".fa.fa-play");
// 	  pause = controls.querySelector(".fa.fa-pause");
// 	  forward = controls.querySelector(".fa.fa-forward");
// 	  play.addEventListener("click", function(){
// 	  	SC.stream( '/tracks/267710282' )
// 	  	player.play();
// 	  }); 
// 	  pause.addEventListener("click", function(){
// 	  	player.pause();
// 	  });
// 	  forward.addEventListener("click", function(){
// 	  	currentSong = (currentSong + 1) % jukebox.songs.length;
// 	  	SC.stream( '/tracks/267710282' );
// 	  	elCurrentSong.innerText = jukebox.songs[currentSong].name;
// 	  	player.play();
// 	  });
// 	  backward.addEventListener("click", function(){
// 	  	currentSong = (currentSong - 1) % jukebox.songs.length;
// 	  	if (currentSong == -1){
// 	  		currentSong = jukebox.songs.length - 1;
// 	  	}
// 	  	SC.stream( '/tracks/267710282' )
// 	  	elCurrentSong.innerText = jukebox.songs[currentSong].name;
// 	  	player.play();
// 	  });
// });

// // SC.resolve("https://soundcloud.com/user-576448461/way-back-home-alphalete-remix").then(function(data){
// //   console.log(data);
// // });
// SC.stream( '/tracks/267710282' ).then(function(player){
// 	console.log(player);
// 	player.play();
// });










