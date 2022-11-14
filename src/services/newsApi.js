const options = {
    method: 'GET',
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': '419bd5942fmshff5dd7dcf34cd06p1dd32djsne642e068e809',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
};

const url = `https://bing-news-search1.p.rapidapi.com/news/`

export const fetchNewsApi = async (location) => {
    const res = await fetch(`${url}search?q=${location}%20Weather&freshness=Day&textFormat=Raw&safeSearch=Off`, options)
    const data = await res.json()
    return data
}


