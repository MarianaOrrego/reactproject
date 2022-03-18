const getImage = async() => {

    try {
        const apiKey = 'sOT19NdV4FB0y8FbJJapP1vTQ5b1or3v';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const { data } = await resp.json();
        const { url } = data.images.original;

        const img = document.createElement('img');
        img.src = url;

        document.body.append(img);
    } catch (error) {
        //manejo del error
        console.error(error)
    }
}

getImage();