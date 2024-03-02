<template>
  <div class="container">
    <h1>ESTUDIANTE</h1>

    <h5>Token</h5>
    <input type="text" v-model="token" />

    <h5>Nombre</h5>
    <input type="text" v-model="nombre" />

    <h5>Apellido</h5>
    <input type="text" v-model="apellido" />

    <h5>Cedula</h5>
    <input type="text" v-model="cedula" />

    <button @click="guardarEst()">Guardar</button>
  </div>
</template>

<script>
import { guardarEstudianteFachada } from "../helpers/clienteEstudiante";

export default {
  data() {
    return {
      cedula: null,
      nombre: null,
      apellido: null,
      token: null
    };
  },
  methods: {
    limpiar() {
      this.cedula = "";
      this.nombre = "";
      this.apellido = "";
    },
    async guardarEst() {
      const data = {
        cedula: this.cedula,
        nombre: this.nombre,
        apellido: this.apellido
      };
      try {
        await guardarEstudianteFachada(data);
        this.$emit("estudiante guardado", this.cedula);
        this.limpiar();
      } catch (error) {
        console.error("Error ", error);
      }
    }
  }
};
</script>

<style>
</style>