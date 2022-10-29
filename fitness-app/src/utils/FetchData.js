export const exerciseOptions = {


    method: 'GET',

    headers: {
        'X-RapidAPI-Key': '7c14d81ff5msh67f573714905931p17483bjsn02e734037b1f',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }

};



export const YoutubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '7c76842f31mshe519a38bd4c186bp19b884jsnff94ced70de3',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};



export const featchData = async (url, options) => {

    const response = await fetch(url, options)
    const data = await response.json();

    return data;

}