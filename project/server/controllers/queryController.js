import fetch from "node-fetch";

class QueryController {
    async getTracks(req, res) {
        const track = req.query.track
        const response = await fetch(`https://api.deezer.com/search?q=track:"${track}"`)
        const body = await response.json()
        return res.json(body)
    }

    async getArtist(req, res) {
        const artist = req.query.artist
        const response = await fetch(`https://api.deezer.com/artist/${artist}`)
        const body = await response.json()
        return res.json(body)
    }

    async getArtistTracks(req, res) {
        try {
            const {url} = req.body
            const response = await fetch(url)
            const body = await response.json()
            return res.json(body)
        } catch (e) {
            console.log(e.message)
        }
    }

    async getChart(req, res) {
        try {
            const response = await fetch('https://api.deezer.com/chart')
            const body = await response.json()
            console.log(body)
            return res.json(body)
        } catch (e) {
            console.log(e.message)
        }
    }
}

export default new QueryController()