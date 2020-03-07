<template>
  <div class="docType">
    <div>
      <p class="title">Doctype</p>
      <div class="docs">
        <ul v-for="(item, index) in kycList" :key="index">
          <li>
            <input type="checkbox" v-model="checkedDocs" :value="index" :id="'doc'+index"/><label :for="'doc'+index">{{item.name}}</label>
          </li>
        </ul>
      </div>
      <div class="btn">
        <div class="btnp1">
          <button @click="personal">Personal</button>
          <button @click="company">Company</button>
          <button @click="credit">Credit</button>
        </div>
        <div class="btnp2">
          <button @click="selectAll">select all</button>
          <button @click="clearAll">clear all</button>
          <button @click="clickButton(checkedDocs)">confirm</button>
        </div>
      </div>
      <!-- {{checkedDocs}} -->
    </div>
  </div>
</template>

<script>
import axios from "axios";
import KycCondition from "../components/KycCondition";
import Bus from "./bus.js";

export default {
  name: "DocType",
  data() {
    return {
      kycList: [],
      checkedDocs: [0,1,2]
    };
  },
  components: {
    KycCondition
  },
  props: {},

  created() {
    axios.get("./kyc/kycDocJP.json").then(res => {
      // console.log(res.data.docType.name);
      this.kycList = res.data.docType;
    });
  },
  methods: {
    personal() {
      this.checkedDocs = [0, 1, 2];
    },
    company() {
      this.checkedDocs = [3, 4];
    },
    credit() {
      this.checkedDocs = [5, 6];
    },
    clearAll: function() {
      this.checkedDocs = [];
    },
    selectAll() {
      var _this = this;
      if (_this.checkedDocs.length < _this.kycList.length) {
        this.checkedDocs = [];
        _this.kycList.forEach(function(item, index) {
          _this.checkedDocs.push(index);
        });
      }
    },
    clickButton(val) {
      Bus.$emit("emitevent", val);
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
button {
  width: 100px;
  height: 30px;
  border-radius: 15px;
  margin-left: 10px;
  margin-top: 10px;
}
.title {
  float: left;
  margin-left: 50px;
  width: 100px;
}
.docs {
  float: left;
  width: 300px;
}
.btn{
  float: left;
  width:300px
}
.btnp1 {
  float: left;
  width: 150px;
}
.btnp2{
  float: left;
  width: 150px;
}
button:hover{
				color: white;
        background: deepskyblue;
			}

</style>
