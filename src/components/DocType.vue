<template>
  <div class="docType">
    <div>
      <p>Doctype</p>
    </div>
    <ul v-for="(item, index) in kycList" v-bind:key="index">
      <li>
        <input type="checkbox" />
        {{index}}++{{ item.name}}
      </li>
    </ul>
    
      <!-- {{ item.approveCondition }} -->

    <p>Approve Condition</p>
    <ul v-for="(item, index) in approve" v-bind:key="index">
      <li><input type="checkbox" />{{ item.condition}}</li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

export default {
  name: "DocType",
  data() {
    return {
      kycList: [],
      approve: []
    };
  },

  created(){
    axios.get('./kyc/kycData.json').then((res)=>{
      console.log(res.data.docType.name);
      this.kycList = res.data.docType;
      this.approve = res.data.docType;
     
    })
  }
  
};
</script>

<style></style>
