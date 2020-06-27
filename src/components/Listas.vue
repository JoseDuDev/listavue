<template>
  <div class="home">
    <div>
      <b-card
        title="Listas"
        sub-title="Selecione para editar, ou criar novas listas."
      >
        <b-card-text>
          Você pode se cadastrar e manter armazenadas as suas listas ou apenas
          criar a lista e compartilhar com suas redes sociais.
        </b-card-text>

        <b-card-text>Para isso selecione um dos links abaixo:</b-card-text>

        <router-link to="/lista" class="card-link">Criar lista</router-link>
      </b-card>
    </div>
  </div>
</template>

<script>
export default {
  name: "Listas",
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

<style scoped></style>
