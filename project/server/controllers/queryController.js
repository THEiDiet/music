import fetch from "node-fetch";

class QueryController {
    async getTracks(req, res) {
        const track= req.query.track
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
}
export  default new QueryController()