<template>
  <div class="header">
    <span v-on:click = "$emit('openSide')">&#9776;</span>
    <div class="header-logo">
      <h1>Izanami <a href="#/task">task</a></h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    visible: false,
  }),
};
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  flex-direction: row;
  background-color: #333;
  justify-content: space-between;
  padding: 5px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  span{
    margin: 1em;
    font-size:20px;
    cursor:pointer;
    color: rgb(255, 255, 255);
  }
  .header-logo{
    margin-right: 1em;
    h1{
      color: white;
      font-size: 20px;
    }
    a{
      text-decoration: none;
      color: #AAA;
    }
    padding: 5px;
  }
}
</style>
