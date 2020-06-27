<template>
  <div>
    <b-form-group id="input-group-2" label="Seu Nome:" label-for="input-2">
      <b-form-input
        id="input-2"
        v-model="form.name"
        required
        placeholder="Digite seu nome"
      ></b-form-input>
    </b-form-group>

    <b-form @submit="onSubmit" @reset="onReset" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Seu E-mail:"
        label-for="input-1"
        description="Será seu ID de acesso."
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          required
          placeholder="Digite seu e-mail"
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
        <label>Redigite sua senha</label>
        <b-form-input
          id="repass"
          v-model="form.repass"
          type="password"
          required
          placeholder="Redigite sua senha"
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

      <b-button type="submit" variant="primary">Criar</b-button>&nbsp;&nbsp;
      <b-button type="reset" variant="secondary">Entrar</b-button>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        name: "",
        pass: "",
        repass: ""
      },
      show: true,
      erro: false
    };
  },
  methods: {
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.$router.push({
        name: "Entrar"
      });
    },
    async onSubmit(evt) {
      if (this.form.pass === this.form.repass) {
        this.$store.state.aguardandoServidor = true;
        evt.preventDefault();
        const dados = {
          nome: this.form.name,
          email: this.form.email,
          senha: this.form.pass
        };
        let body = {
          ...dados
        };
        console.log(body);
        await this.$axios_NODE({
          url: "/api/usuario",
          method: "post",
          data: JSON.stringify(body)
        })
          .then(() => {
            this.$store.dispatch(
              { type: "act_usuario_atual", usuario: body },
              true
            );
            this.$router.push({
              name: "Listas",
              params: { usuario: this.$store.state.usuario }
            });
          })
          .catch(err => {
            this.erro = true;
            this.msgErro = err.message;
          })
          .finally(() => {
            this.$store.state.aguardandoServidor = false;
          });
      } else alert("A senha precisa ser igual a redigitação da senha");
    }
  }
};
</script>
