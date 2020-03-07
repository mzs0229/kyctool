<template>
  <div class="App">
    <div class="left">
      <div class="docTypeArea">
        <DocType></DocType>
      </div>
      <div class="conditionArea">
        <KycCondition></KycCondition>
      </div>
    </div>

    <div class="right">
      mailArea
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DocType from "../components/DocType.vue";
import KycCondition from "../components/KycCondition.vue";

export default {
  components: {
    DocType,
    KycCondition
  }
};
</script>

<style>
.left{
  
  width: 900px;
  background-color: chocolate;
}
.docTypeArea {
  float:left;
  width: 900px;
  height: 400px;
  background-color: aqua;
}
.docTypeArea li{
 
  width: 250px;
 
}
.conditionArea{
  float: left;
  background-color: blueviolet;
  
}
.right{
   float: left;
  width: 800px;
  height: 500px;
  background-color: darkgreen;
}
</style>
