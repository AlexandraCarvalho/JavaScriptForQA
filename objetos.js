//objeto em javascript
//var album = {
//       title: 'Black Album',
//        relesed: 1991,
//        showInfo: function(){
//                console.log(`Titulo do album: ${this.title}, lançado em: ${this.relesed}`);
//}

var album = new Object();

album.title = 'Black Album';
album.relesed = 1991;
album.showInfo = function(){
        console.log(`Titulo do album: ${this.title}, lançado em: ${this.relesed}`);
}


//acessando uma propriedade, no caso showInfo()
album.showInfo();
console.log(album.title);
console.log(album.relesed);

album.tracks = ['Enter Sandman', 'The Unforgiven', 'Nothing Else Metters', 'The Struggle Within']

album.showTracks = function(){
        this.tracks.forEach(function(value, key){
                console.log(value)
        })
}

//chamando o método
album.showTracks();