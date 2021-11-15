function getRandomInt(min, max){
    return Math.floor(Math.random() * (max - min)) + min;
}
console.log()
document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1,151)
    fetchApi(random)  
})

const fetchApi = async(API) => {
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${API}`)
        const stats = await respuesta.json()
        console.log(stats)
        pintarTemplate(stats)

    } catch (error) {
        console.log(error)
    }
}

const pintarTemplate = (pokemon) => {
    const template = document.getElementById()
}