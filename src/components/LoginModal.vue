<template>
  <section>
    <b-modal :active.sync="sentinel" has-modal-card>
      <form action>
        <div class="modal-card has-background-tertiary" style="width: auto">
          <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
          </header>
          <section class="modal-card-body">
            <b-field label="Email">
              <b-input type="email" :value="email" placeholder="Your email" required></b-input>
            </b-field>

            <b-field label="Password">
              <b-input
                type="password"
                :value="password"
                password-reveal
                placeholder="Your password"
                required
              ></b-input>
            </b-field>

            <b-checkbox>Remember me</b-checkbox>
          </section>
          <footer class="modal-card-foot">
            <button class="button" type="button" @click="$emit('close')">Close</button>
            <button class="button is-primary">Login</button>
          </footer>
        </div>
      </form>
    </b-modal>
    <!-- <button
      class="button is-primary is-medium"
      @click="isComponentModalActive = true"
    >Launch component modal</button>-->
  </section>
</template>

<script>
export default {
  props: {
    isOpen: { default: false, type: Boolean }
  },
  data() {
    return {
      email: "evan@you.com",
      password: "testing"
    };
  },
  computed: {
    sentinel: {
      get() {
        return this.isOpen;
      },
      set(value) {
        if (!value) {
          this.$emit("close");
        }
      }
    }
  },
};
</script>


