<template>
  <div id="mySidebar" class="sidebar">
  <a href="#" class="closebtn" v-on:click = "$emit('closeSide')">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
</template>

<script>
export default {
  name: 'Sidebar',
  data: () => ({
  }),
};
</script>

<style lang='scss' scoped>
.sidebar{
    height: 100%; /* 100% Full-height */
    width: 250px; /* 0 width - change this with JavaScript */
    position: fixed; /* Stay in place */
    z-index: 1; /* Stay on top */
    top: 0; /* Stay at the top */
    left: 0;
    background-color: #333; /* Black*/
    overflow-x: hidden; /* Disable horizontal scroll */
    padding-top: 60px; /* Place content 60px from the top */
    a{
      padding: 8px 8px 8px 32px;
      text-decoration: none;
      font-size: 25px;
      color: #818181;
      display: block;
      transition: 0.3s;
      &:hover {
        color : #f1f1f1;
      }
    }
    .closebtn{
      position: absolute;
      top: 0;
      right: 25px;
      font-size: 36px;
      margin-left: 50px;
    }
}
</style>
