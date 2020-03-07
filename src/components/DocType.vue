<template>
  <div class="docType">
    <div>
      <p>Doctype</p>
      <ul v-for="(item, index) in kycList" v-bind:key="index">
        <li>
          <input type="checkbox" v-model="checkedValues" :value="index" />{{
            item.name
          }}
        </li>
      </ul>
      <div>
        <button @click="selectAll">select all</button>
        <button @click="clearAll">clear all</button>
      </div>
      <p>{{ checkedValues }}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import KycCondition from '@/components/KycCondition.vue'

export default {
  name: "DocType",
  data() {
    return {
      kycList: [],
      checkedValues: []
    };
  },
  components:{
    KycCondition
  },

  created() {
    axios.get("./kyc/kycDoc.json").then(res => {
      console.log(res.data.docType.name);
      this.kycList = res.data.docType;
    });
  },
  methods: {
    clearAll: function() {
      this.checkedValues = [];
    },
    selectAll: function() {
      var _this = this;
      if (_this.checkedValues.length < _this.kycList.length) {
        this.checkedValues = [];
        _this.kycList.forEach(function(item, index) {
          _this.checkedValues.push(index);
        });
      }
    }   
  }
  // watch:{
  //   checkedValues:function(new_v,old_v){
  //     this.answer = this.checkedValues;
  //   }
  // }
};
</script>

<style>
li {
  list-style: none;
}
</style>
