const options = {
    method: 'GET',
    headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Key': process.env.REACT_APP_NEWS_API_KEY,
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
    }
};

const url = `https://bing-news-search1.p.rapidapi.com/news/`

export const fetchNewsApi = async (location) => {
    const res = await fetch(`${url}search?q=${location}%20Weather&freshness=Day&textFormat=Raw&safeSearch=Off`, options)
    const data = await res.json()
    return data
}


