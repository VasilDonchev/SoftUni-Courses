function songs(arr) {
  class Songs {
    constructor(typeList, name, time) {
      this.playlist = typeList;
      this.name = name;
      this.time = time;
    }
  }
  let songs = [];
  let numberOfSongs = arr.shift();
  let typeSong = arr.pop();

  for (let i = 0; i < numberOfSongs; i++) {
    let [type, name, time] = arr[i].split("_");
    let song = new Songs(type, name, time);
    songs.push(song);
  }
  if (typeSong === "all") {
    songs.forEach((x) => console.log(x.name));
  } else {
    //   let filtered = x.filter((x) => x.type === typeSong);
    //   filtered.forEach((x) => console.log(x.name));
    songs
      .filter((x) => x.playlist === typeSong)
      .forEach((x) => console.log(x.name));
  }
}
//songs([2, "like_Replay_3:15", "ban_Photoshop_3:48", "all"]);
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    );
songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );