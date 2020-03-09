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
  position:fixed;
  left:10px;
  top:100px;
  width: 1000px;
  height: 100%;
  overflow-y: scroll;
}
.right{
  position: fixed;
  left:1020px;
  top:100px;
  width: 850px;
  height: 100%;
  overflow-y: scroll;
  background-color:lightblue;

}
.docTypeArea{
  width:100%;
  height: 300px;
  background-color: aqua;
}
.conditionArea{
  width: 100%;
  height: 100%;
  background-color: coral;
}
/* .App{
  overflow-y: scroll;
}
.left{
  position: fixed;
  left:10px;
  top:100px;
  width: 950px;
  height: 100%;
 
}
.docTypeArea{
  float:left;
  width: 100%;
  height: 300px;
  background-color: darkgrey;
}
.conditionArea{
 width: 100%;
 height: 100%;

 background-color: darkorange;
}

.right{
  position: fixed;
  left: 970px;
  top:100px;
  width: 900px;
  height: 100%;
  background-color: lawngreen;
} */
</style>
