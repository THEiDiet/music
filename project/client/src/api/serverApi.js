
export const searchArtist = async (artist)=>{
    return await fetch(`http://localhost:5000/api/search/artist?artist=${artist}`)
}
export const searchTracks = async (track)=>{
    return await fetch(`http://localhost:5000/api/search/artist?track=${track}`)
}