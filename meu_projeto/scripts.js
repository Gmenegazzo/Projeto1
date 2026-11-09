let nome = document.querySelector(".nome")
let personagem = document.querySelector(".personagem")

function escolherPersonagem(nomePersonagem, imagemPersonagem, cor) {

    nome.innerHTML = nomePersonagem
    personagem.src = imagemPersonagem
    nome.style.color = cor
}
function lerFoto(foto) {

    let leitor = new FileReader()
    leitor.readAsDataURL(foto.files[0])
    leitor.onload = async function () {

        let desenho = await puter.ai.txt2img("Tranforme a pessoa desta foto em um personagem de videogame: contorno preto gross,cores vivcas,meio corpo,mantendo o rosto parecido. Funfo totalmente transparente: sem cenario, sem chao e sem sombra",
            {
                model: "gpt-image-2.6-flare",
                provider: "openai",
                input_image: leitor.result,
                quality: "meduim",
                providerOptions: { beckgroud: "transparent" }
            })
        escolherPersonagem("Você", desenho, "#2c04be")
    }
}