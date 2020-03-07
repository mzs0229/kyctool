<template>
  <div class="App">
    <div class="left">
      <div class="docTypeArea">
        <DocType></DocType>
      </div>
      <div class="conditionArea">
        <!-- <p class="title">Approve Condition</p> -->
        <KycCondition></KycCondition>
      </div>
    </div>

    <div class="right">
      <MailGenerator></MailGenerator>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import DocType from "../components/DocType.vue";
import KycCondition from "../components/KycCondition.vue";
import MailGenerator from "../components/MailGenerator.vue";



export default {
  components: {
    DocType,
    KycCondition,
    MailGenerator
  }
};
</script>

<style>
.left{
  width: 900px;
}
.docTypeArea{
  float:left;
 width: 100%;
  height: 300px;
  background-color: darkgrey;
}
.conditionArea{
 width: 100%;
 height: 800px;
 background-color: darkorange;
}

.right{
  float: right;
  width: 800px;
  height: 500px;
  background-color: lawngreen;
}
</style>
