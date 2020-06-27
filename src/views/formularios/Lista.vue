<template>
  <div>
    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Nome da lista:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.nome"
          type="text"
          required
          placeholder="Digite o nome: ex.: lista do mês"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Sua senha:" label-for="input-1">
        <b-form-input
          id="pass"
          v-model="form.pass"
          type="password"
          required
          placeholder="Digite sua senha"
        ></b-form-input>
      </b-form-group>

      <div class="col-8 align-self-center text-left">
        <el-alert
          title="Ocorreu um erro"
          v-if="erro"
          :description="'Descrição: ' + msgErro + ''"
          type="error"
          show-icon
        ></el-alert>
      </div>

      <b-button type="submit" variant="primary">Entrar</b-button>&nbsp;&nbsp;
      <b-button type="reset" variant="danger">Voltar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        pass: ""
      },
      show: true,
      erro: false
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.pass = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    },
    async onSubmit(evt) {
      this.$store.state.aguardandoServidor = true;
      evt.preventDefault();
      const dados = {
        email: this.form.email,
        senha: this.form.pass
      };
      let body = {
        ...dados
      };
      console.log(body);
      await this.$axios_NODE({
        url: "/api/usuario/login",
        method: "post",
        data: JSON.stringify(body)
      })
        .then(() => {
          this.$store.dispatch(
            { type: "act_usuario_atual", usuario: body },
            true
          );
          setTimeout(() => {
            if (this.$store.state.usuario) {
              this.$router.push({
                name: "Listas"
              });
            }
          }, 1000);
        })
        .catch(err => {
          this.erro = true;
          this.msgErro = err.message;
        })
        .finally(() => {
          this.$store.state.aguardandoServidor = false;
        });
    }
  }
};
</script>
