<template>
  <div class="entrys">
    <router-link to="/guardar">Guardar</router-link>
    <router-link to="/token">Token</router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
div a {
  color: hsl(212, 58%, 17%);
  margin: 0px 10px;
  font-weight: bold;
  border: solid;
  padding: 10px 10px;
  border-radius: 10px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background: aqua;
}

.router-link-active {
  background: rgb(125, 193, 216);
}
.entrys{
  display: flex;
  
}
</style>