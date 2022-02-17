export const searchArtist = async (artist) => {
    return await fetch(`http://localhost:5000/api/search/artist?artist=${artist}`)
}

export const searchArtistTracks = async (url) => {
    return await fetch(`http://localhost:5000/api/search/artist/tracks`, {
        method: "POST",
        headers:{
            'Content-Type':'application/json;charset=utf-8',
        },
        body: JSON.stringify({url})
    })
}

export const searchTracks = async (track) => {
    return await fetch(`http://localhost:5000/api/search/artist?track=${track}`)
}

export const getChart = async () => {
    return await fetch('http://localhost:5000/api/search/chart')
}