<template>
  <div class="container">
    <div class="tableEst">
      <tr>
        <th>Id</th>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Cedula</th>
      </tr>
      <tr v-for="estudiante in ls" :key="estudiante.id">
        <td>{{ estudiante.id }}</td>
        <td>{{ estudiante.nombre }}</td>
        <td>{{ estudiante.apellido }}</td>
        <td>{{ estudiante.cedula }}</td>
      </tr>
    </div>
  </div>
</template>

<script>
import { guardarEstudianteFachada } from "@/helpers/clienteEstudiante";

export default {
  data() {
    return {
      ls: null
    };
  },
  methods: {
    async consultarEstu() {
      this.ls = await guardarEstudianteFachada();
      console.log(this.ls);
    }
  }
};
</script>

<style>
</style>