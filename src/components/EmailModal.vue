<template>
  <div class="modal-card" style="width: auto">
    <header class="modal-card-head">
      <p class="modal-card-title has-text-primary has-text-weight-bold">
        Entraremos em contato vom você!
      </p>
    </header>
    <section class="modal-card-body">
      <p class="is-size-7 is-italic has-text-right">
        Verifique sua caixa de Spam!
      </p>
      <b-field
        label="Email"
        label-position="inside"
        :message="messages"
        :type="!success ? 'is-danger' : ''"
      >
        <b-input
          v-model="email"
          type="email"
          :value="email"
          placeholder="Digite seu email"
        >
        </b-input>
      </b-field>
    </section>

    <footer class="modal-card-foot">
      <button class="button" type="button" @click="$parent.close()">
        Fechar
      </button>
      <button class="button is-primary" @click="submit">Enviar</button>
    </footer>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: {
    choice: {
      type: Number,
      required: true
    }
  },
  methods: {
    ...mapActions("auth", ["registerPossibleUser"]),
    submit() {
      this.messages = [];
      this.success = true;
      this.registerPossibleUser({ choice: this.choice, email: this.email })
        .then(() => {
          this.$buefy.toast.open({
            duration: 2000,
            message: `Enviado com sucesso!`,
            position: "is-top",
            type: "is-primary"
          });
          this.$parent.close();
        })
        .catch(err => {
          if (err.response) {
            this.success = false;
            this.messages = err.response.data.email;
          }
        });
    }
  },
  data() {
    return {
      email: "",
      messages: [],
      success: true
    };
  }
};
</script>
