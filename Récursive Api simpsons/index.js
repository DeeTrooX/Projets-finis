async function recursive(url, num, end){
    const response = await fetch(url)
    const data = await response.json()

    console.log(data[0].character);

    document.querySelector('ul').innerHTML += 
    `<div>    
        <li>${data[0].character}</li>
        <li><img src="${data[0].image}"></li>
        <li>${data[0].quote}</div>
    </div>`
    
    if (num < end) {
        num++
        recursive(`https://thesimpsonsquoteapi.glitch.me/quotes?count=${num}/`, num, end)
    }

    
}

recursive('https://thesimpsonsquoteapi.glitch.me/quotes?count=num', 1, 3)