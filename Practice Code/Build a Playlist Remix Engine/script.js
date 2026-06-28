const playlists = [
  [
    {
      trackId: "trk101",
      artist: "Velvet Comet",
      title: "Crimson Afterglow",
      votes: 5,
      bpm: 122,
    },
    {
      trackId: "trk102",
      artist: "Neon Harbor",
      title: "Static Horizon",
      votes: 2,
      bpm: 108,
    },
    {
      trackId: "trk103",
      artist: "Lunar Arcade",
      title: "Midnight Frequency",
      votes: 4,
      bpm: 128,
    },
  ],
  [
    {
      trackId: "trk201",
      artist: "Solar Echo",
      title: "Glass Skyline",
      votes: 3,
      bpm: 115,
    },
    {
      trackId: "trk202",
      artist: "Velvet Comet",
      title: "Satellite Hearts",
      votes: 6,
      bpm: 124,
    },
  ],
];

function flattenPlaylists(playlists) {
  if (!Array.isArray(playlists)) {
    return [];
  }

  let result = [];

  for (let i = 0; i < playlists.length; i++) {
    for (let j = 0; j < playlists[i].length; j++) {
      result.push({
        trackId: playlists[i][j].trackId,
        artist: playlists[i][j].artist,
        title: playlists[i][j].title,
        votes: playlists[i][j].votes,
        bpm: playlists[i][j].bpm,
        source: [i, j],
      });
    }
  }

  return result;
}

function scoreTracks(tracks) {
  if (!Array.isArray(tracks)) {
    return [];
  }

  const result = [];

  for (let i = 0; i < tracks.length; i++) {
    let votes = tracks[i].votes;
    let bpm = tracks[i].bpm;
    let score = votes * 10 - Math.abs(bpm - 120);
    result.push({
      ...tracks[i],
      score,
    });
  }

  return result;
}

function dedupeTracks(tracks) {
  if (!Array.isArray(tracks)) {
    return [];
  }

  let result = [];
  let found = [];

  for (let i = 0; i < tracks.length; i++) {
    if (found.includes(tracks[i].trackId)) {
      continue;
    }
    found.push(tracks[i].trackId);
    result.push({ ...tracks[i] });
  }

  return result;
}

function enforceArtistQuota(tracks, maxPerArtist) {
  if (!Array.isArray(tracks)) {
    return [];
  }

  const result = [];
  const artistCount = {};

  for (let i = 0; i < tracks.length; i++) {
    let artist = tracks[i].artist;

    if (!artistCount[artist]) {
      artistCount[artist] = 0;
    }

    if (artistCount[artist] < maxPerArtist) {
      result.push(tracks[i]);
      artistCount[artist]++;
    }
  }

  return result;
}

function buildSchedule(tracks) {
  if (!Array.isArray(tracks)) {
    return [];
  }

  let result = [];

  for (let i = 0; i < tracks.length; i++) {
    result.push({
      slot: i + 1,
      trackId: tracks[i].trackId,
    });
  }

  return result;
}

function remixPlaylist(playlists, maxPerArtist){
  const flattened = flattenPlaylists(playlists);
  const scored = scoreTracks(flattened);
  const dedupe = dedupeTracks(scored);
  const filtered = enforceArtistQuota(dedupe, maxPerArtist);

  return buildSchedule(filtered);
}


// console.log(flattenPlaylists("hello"));

// const flattenList = flattenPlaylists(playlists);
// console.log(flattenList);

// const scoreTrackList = scoreTracks(flattenList);
// console.log(scoreTrackList);

// const deduplicateList = dedupeTracks(scoreTrackList);
// console.log(deduplicateList);

// const artistList = enforceArtistQuota(deduplicateList, 1);
// console.log(artistList);

// const scheduledList = buildSchedule(artistList);
// console.log(scheduledList);

console.log(remixPlaylist(playlists, 2));