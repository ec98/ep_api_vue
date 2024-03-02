<template>
  <div>
    <EstudianteGuardar @insCedula="saveCed($event)" />
    <ListaEstudiante :ls="lista" />
  </div>
</template>

<script>
import ListaEstudiante from "@/components/ListaEstudiante.vue";
import EstudianteGuardar from "@/components/EstudianteGuardar.vue";

export default {
  data() {
    return {
      ls: []
    };
  },
  components: {
    ListaEstudiante,
    EstudianteGuardar
  },
  methods: {
    saveCed(cedula) {
      if (typeof cedula === "string") {
        this.ls.push(cedula);
      }
    }
  }
};
</script>

<style>
</style>