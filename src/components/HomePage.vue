<template>
  <div class="home">
    <b-container class="bv-example-row">
      <b-row>
        <b-col
          ><img class="imglista" src="../assets/img/lista0.png" alt=""
        /></b-col>
        <b-col>
          <h1>{{ titulo }}</h1>
          <h3>{{ subtitulo }}</h3>
          <p class="ptitle">
            Crie e gerencie sua lista de compras de supermercados, após,
            compartilhe para seus aplicativos ou envie para seus amigos.
          </p>
        </b-col>
      </b-row>
    </b-container>

    <div>
      <b-card title="" sub-title="">
        <b-card-text>
          Você pode se cadastrar e manter armazenadas as suas listas ou apenas
          criar a lista e compartilhar com suas redes sociais.
        </b-card-text>

        <b-card-text>Para isso selecione um dos links abaixo:</b-card-text>

        <router-link to="/usuario" class="card-link botao"
          >Criar usuário</router-link
        >
        <router-link to="/entrar" class="card-link botao">Entrar</router-link>
        <router-link to="/lista" class="card-link botao"
          >Gerar uma lista</router-link
        >
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  computed: {
    titulo() {
      return this.$store.state.titulo;
    },
    subtitulo() {
      return this.$store.state.subtitulo;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.imagem {
  background-repeat: no-repeat;
  background-image: url("../assets/img/lista0.png");
  background-attachment: fixed;
  width: 350px;
}
.imglista {
  width: 100%;
  padding: 20px;
}
.botao {
  background-color: #ccd6ec;
  padding: 7px 15px;
  border-radius: 10px;
  box-shadow: 2px 3px 8px 1px #000;
}
</style>
