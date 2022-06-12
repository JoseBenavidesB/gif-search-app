export const getGifts = async (category)=> {


    const key = 'VoISl06VV4g8ioJiH3Jx7vjR5p1jPQuJ'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${key}&q=${category}&limit=5`;

    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map((img)=> {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url //? existe?

        }
    });
    //console.log(gifs)
    
    return gifs;


};