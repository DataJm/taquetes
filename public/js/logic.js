console.group("senior jaker")
console.log("\n ------------------ ola khe ase, jakiando o khe ase ----------------------\n\n")
console.groupEnd()

let currentTaco = {}
let tacodata = []
let indice = 0
let ting = 0
let tstr = 0

const tacotaco = async ()=>{
    const data = await d3.csv("public/data/data.csv")
    data.forEach(d => {
        tacodata.push(d)
    });
    fillTaco()
}

const fillTaco = ()=>{
    currentTaco = tacodata[indice]
    d3.select("#tacoImg").attr("src",`public/imgs/test/${currentTaco.src}`)
    d3.select("#tacoName").text(currentTaco.name)
    d3.select("#tacoLink").attr("href",currentTaco.url)
}

const moveTaco =()=>{
    indice += 1
    if(indice >= tacodata.length){
        let answer
        if(ting>4 & tstr>7){
            answer = "Hojas de cuaderno, hojas de lechuga, de harina, de maíz... no importa. Si se puede doblar o enrollar, es un taco."
        }else if(ting>4 & tstr==7){
            answer = "El relleno puede ser de lo que sea, pero un taco es tortilla o masa que se dobla... así lo dijo Jesús."
        }else if(ting>4 & tstr<7){
            answer = "Eres un purista de la tortilla."
        }else if(ting==4 & tstr>7){
            answer = "La tortilla o lo que sea que envuelta la carnita es lo de menos...para ti el relleno es primordial."
        }else if(ting==4 & tstr==7){
            answer = "Tienes la definición exacta del Taco. Sabes dónde está la raya. Ni muy muy ni tan tan."
        }else if(ting==4 & tstr<7){
            answer = "Eres un purista de la tortilla. Y con los ingredientes sabes exacto lo que te gusta"
        }else if(ting<4 & tstr>7){
            answer = "Te gusta ir a lo seguro, si, quizá puedes variar con la tortilla... pero el relleno que ni te lo toquen."
        }else if(ting<4 & tstr==7){
            answer = "Tienes gustos muy exactos, precisos, finos...tanto en ingredientes, como en estructura"
        }else if(ting<4 & tstr<7){
            answer = "Uh lala señor francés, le pido una disculpa si mi encuesta lo ofendio. Para usted un taco es un taco. Y san se acabó"
        }

        d3
        .select("#finalTitle")
        .text("RESULTADO")

        d3
        .select(".cuerpo")
        .html("")
        .append("h1")
        .text(answer)

    }else{
        fillTaco()
    }
}

d3.select("#yesBtn").on("click", ()=>{
    ting += +currentTaco.Ingredientes
    tstr += +currentTaco.Estructura
    moveTaco()
})

d3.select("#noBtn").on("click", ()=>{
    moveTaco()
})

tacotaco()