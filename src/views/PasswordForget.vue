<template>
  <section class="section-top section-bottom">
    <div class="container">
      <div>
        <p
          class="title is-2 has-text-centered has-text-primary is-uppercase has-text-weight-bold"
        >
          esqueci minha senha
        </p>
        <hr style="border: 1px solid #0075bb" />
      </div>
      <div class="is-flex" style="justify-content:center;margin-top:2rem">
        <div style="min-width:300px;width:300px">
          <b-field
            label="Email"
            :type="{
              'is-danger': messages.email.length > 0 || geralMessage.length > 0
            }"
            :message="messages.email"
          >
            <b-input v-model="email" placeholder="Seu Email"></b-input>
          </b-field>
        </div>
      </div>

      <div class="has-text-centered" style="margin-top:1.5rem">
        <b-button class="button is-primary" size="is-medium">Enviar</b-button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      messages: {
        password: [],
        email: [],
        non_field_errors: []
      }
    };
  },
  computed: {
    geralMessage() {
      const other_errors = this.messages.non_field_errors;
      return other_errors.length > 0 ? other_errors : this.messages.password;
    }
  }
};
</script>
