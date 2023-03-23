<template>
<html>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
    <main>

        <section class="comentarios-wrap">
            <img src="https://wallpaperaccess.com/full/658113.png" class="comentarios-bg">
            <h1>Comentários - {{ this.$route.query.quarto }}</h1>
            <div class="comentarios" id="comentarios" v-html="comentarios">
            </div>
        </section>
    </main>
</html>
    
</template>

<script>
import imageQuartoSimples from "../assets/quartos/simples.png";
import imageQuartoMedio from "../assets/quartos/medio.png";
import imageQuartoLuxo from "../assets/quartos/luxo.png";

export default {
    data: function () {
        return {
            imageQuartoSimples: imageQuartoSimples,
            imageQuartoMedio: imageQuartoMedio,
            imageQuartoLuxo: imageQuartoLuxo,
            comentarios: this.getAvaliacoes(),
        }
    },
    name: 'ComentariosView',
    methods: {
        carregarComentarios() {
            let wrapDiv = '';

            let comentariosArray = JSON.parse(localStorage.getItem(this.$route.query.quarto));

            for (let i = 0; i < comentariosArray.length; i++) {
                let estrelas = '';
                for (let j = 0; j < comentariosArray[i][0]; j++) {
                    estrelas += '&#xe838;'
                }

                wrapDiv += `<div class="comentario-wrap"><div class="comentarioEstrelas">${estrelas}</div> <div class="comentario-nome">${comentariosArray[i][2]}</div> <div class="comentario">${comentariosArray[i][1]}
                    </div> <a href="#" v-on:click="deletarComentario(${i})">Deletar comentário</a></div>`;
            }

            return wrapDiv;
        },
        deletarComentario(i) {
            console.log(`Apagando comentário ${i}`);
            let comentariosArray = JSON.parse(localStorage.getItem(this.$route.query.quarto));
            if (comentariosArray.length > 1) {
                comentariosArray.splice(i, 1);
                localStorage.setItem(this.$route.query.quarto, JSON.stringify(comentariosArray));
            }
            else {
                localStorage.removeItem(this.$route.query.quarto);
            }

            this.comentarios = this.carregarComentarios();
        },

        getAvaliacoes (){
            axios.get('http://localhost:5000/avaliacoes').then (res => {
                console.log(res.data);
            })
            .catch(err => {
                console.log(err)
            })
        },

        mounted (){
            this.getAvaliacoes();
        }

    }
}
</script>

<style>
.comentarios-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    position: relative;
}

.comentarios-bg {
    opacity: 0.1;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
}

.comentarios {
    position: relative;
    min-width: 50vw;
    max-width: 50vw;
    padding: 5vh 5vw;
    border: 1px solid #333333;
    background-color: white;
}

.comentario-wrap {
    border-bottom: 1px solid #333333;
    padding: 1em;
    padding-top: 2em;
}

.comentario {
    font-size: 1.1em;
}

.comentario-nome {
    margin-left: 1em;
    font-size: 1em;
    font-weight: bold;
}

.comentarioEstrelas {
    font-family: "Material Icons";
    margin-left: 1em;
    font-size: 1em;
    color: yellow;
    font-variation-settings:
        'FILL' 0,
        'wght' 400,
        'GRAD' 0,
        'opsz' 48;
    -webkit-text-stroke: 0.5px lightgray;
}

.comentario-wrap a {
    font-size: 0.75em;
    color: lightgray;
    transition: 0.5s;
    cursor: pointer;
}

.comentario-wrap a:hover {
    font-size: 0.75em;
    color: gray;
}
</style>