<template>
  <section class="section is-medium">
    <div class>
      <div class="container">
        <b-tag type="is-tertiary" size="is-large">Novo Usuário</b-tag>
        <div
          class="column is-full has-background-tertiary is-paddingless"
          style="max-height:0.2em;height:0.2em;width:100%;margin-top:0.3rem;margin-bottom:2rem"
        ></div>
        <div class="columns is-multiline">
          <div class="column is-7">
            <div class="columns is-multiline">
              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">Nome:</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">E-mail:</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">Senha:</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">Confirmação de Senha:</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">Apelido:</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column">
            <div class="columns is-multiline">
              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">País:</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>

              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">Estado</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>

              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">Cidade:</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>

              <div class="column is-full">
                <b-field>
                  <div style="align-items:center;display:flex;padding-right:1rem">
                    <p class="has-text-weight-bold is-label">Localidade:</p>
                  </div>
                  <b-input size="is-medium" expanded custom-class="input-color"></b-input>
                </b-field>
              </div>
            </div>
          </div>
          <div class="column is-7">
            <b-field>
              <div style="align-items:center;display:flex;padding-right:1rem">
                <p class="has-text-weight-bold is-label">Localidade:</p>
              </div>
              <b-input size="is-medium" expanded custom-class="input-color"></b-input>
            </b-field>
          </div>
          <div class="column is-full">
            <div style="align-items:center;display:flex;">
              <p class="has-text-weight-bold is-label" style="margin-right:1rem">Sexo:</p>
              <b-radio v-model="radio" name="name" native-value="Flint">Masculino</b-radio>
              <b-radio v-model="radio" name="name" native-value="Silver">Feminino</b-radio>
            </div>
          </div>
          <div class="column is-full">
            <div style="align-items:center;display:flex;">
              <p class="has-text-weight-bold is-label is-hidden-mobile" style="margin-right:1rem"></p>
              <b-checkbox name="Basico">Deseja receber notícias e previsões do Dica SURF por e-mail?</b-checkbox>
            </div>
          </div>
          <div class="column is-full">
            <div style="align-items:center;display:flex;">
              <p class="has-text-weight-bold is-label is-hidden-mobile" style="margin-right:1rem"></p>
              <b-checkbox name="Basico">Concordo com as <span class="has-text-primary">regras de uso do Dica SURF</span></b-checkbox>
            </div>
          </div>
          <div class="column has-text-right" style="margin-bottom:2rem">
              <b-button size="is-medium" type="is-primary">Enviar</b-button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.is-label {
  width: 100px;
  max-width: 100px;
  text-align: right;
}
</style>
<style lang="scss">
.input-color.input {
  background-color: grey;
}
</style>