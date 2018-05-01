<template>
  <div class="navbar">
    <div class="header">
      <span v-on:click = "$emit('openSide')">&#9776;</span>
      <div class="header-logo">
        <h1>Izanami <a href="#/task">task</a></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
  }),
};
</script>

<style lang='scss' scoped>
.navbar{
  margin-bottom: 30px;
  .header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    background-color: #333;
    width: 100%;
    z-index: 1;
    position: fixed;
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
}
</style>
