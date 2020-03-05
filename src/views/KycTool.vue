<template>
  <div class="App">
    <div class="docTypeArea left">
       <DocType></DocType>
    </div>
   
    <div class="conditionArea right">conditionArea</div>
    <div class="mailArea bottom">mailArea</div>
  </div>
</template>



<script>
// @ is an alias to /src
import DocType from '../components/DocType.vue'


export default {
 
  components: {
    DocType
  }
}
</script>

<style>
/* .left{
    width: 250px;
    float: left;
    height: 500px;
    background-color: brown;
}
.right{
    width: 750px;
    float: left;
    height: 500px;
    background-color: green;
   
}
.bottom{
    float: left;
    background-color: gray;
    width: 1000px;
    height: 300px;

} */

</style>
