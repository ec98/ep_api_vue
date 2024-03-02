<template>
  <div class="container">
    <div class="cstoken">
      <h1>TOKEN</h1>

      <h4>Semilla</h4>
      <input type="text" v-model="semilla" class="semilla" />

      <h4>Tiempo de Vigencia</h4>
      <input type="text" v-model="tiempo" class="tiempo" />

      <h4>Token</h4>
      <input type="text" v-model="token" disabled class="entry" />

      <button @click="generarToken()">Generar</button>
    </div>
  </div>
</template>

<script>
import { obtenerTokenFachada } from "../helpers/authToken";

export default {
  data() {
    return {
      semilla: null,
      tiempo: null,
      token: null
    };
  },
  methods: {
    async generarToken() {
      const data = {
        semilla : this.semilla,
        tiempo : this.tiempo,
      }
      this.token = await obtenerTokenFachada(data);
    }
  }
};
</script>

<style scoped>

.container{
  display: flex;
  justify-content: center;
  align-items: center;
}

.semilla, .tiempo, .entry{
  width: 300px;
  height: 100px; 
  font-size: 14px; 
  padding: 5px;
  box-sizing: border-box; 
  overflow: hidden;
  text-overflow: ellipsis; /* Agrega puntos suspensivos (...) si el texto es demasiado largo */
  white-space: nowrap;
}

</style>