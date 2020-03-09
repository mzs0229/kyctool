<template>
  <div class="kycCondition">
    <!-- {{cValue}}++++ -->
    <div>
      <div v-if="cValue == ''">No Docs selected!</div>
      <div><button @click="creatMail(conVal)">Create Mail</button></div>
    </div>
    <div>
      <div class="condition" v-if="cValue.includes(0) > 0">
        <div>
          <p>ID approve condition</p>
        </div>
        <ul v-for="(item, index) in idConditionList" :key="index">
          <li>
            <input
              type="checkbox"
              v-model="checkedIDAdd"
              :value="item.mailContent"
              :id="'id' + index"
            /><label :for="'id' + index">{{ item.appCondition }}</label>
          </li>
        </ul>
        {{ checkedIDAdd }}
      </div>
      <div class="condition" v-if="cValue.includes(1) > 0">
        <div>
          <p>Selfie approve condition</p>
        </div>
        <ul v-for="(item, index) in selfieConditionList" v-bind:key="index">
          <li>
            <input
              type="checkbox"
              v-model="checkedSelfieAdd"
              :value="index"
              :id="'selfie' + index"
            />
            <label :for="'selfie' + index"
              >{{ index + 1 }}:{{ item.appCondition }}</label
            >
          </li>
        </ul>
        {{ checkedSelfieAdd }}
      </div>
      <div class="condition" v-if="cValue.includes(2) > 0">
        <div>
          <p>Address approve condition</p>
        </div>
        <ul v-for="(item, index) in addressConditionList" v-bind:key="index">
          <li>
            <input
              type="checkbox"
              v-model="checkedAddAdd"
              :value="index" :id="'add' + index"
            /><label :for="'add' + index"
              >{{ index + 1 }}:{{ item.appCondition }}</label
            >
          </li>
        </ul>
        {{ checkedAddAdd }}
      </div>
      <div class="condition" v-if="cValue.includes(3) > 0">
        <div>
          <p>Company approve condition</p>
        </div>
        <ul v-for="(item, index) in companyDocConditionList" v-bind:key="index">
          <li>
            <input
              type="checkbox"
              v-model="checkedComAdd"
              :value="index" :id="'com' + index"
            /><label :for="'com' + index"
              >{{ index + 1 }}:{{ item.appCondition }}</label
            >
          </li>
        </ul>
        {{ checkedComAdd }}
      </div>
      <div class="condition" v-if="cValue.includes(4) > 0">
        <div>
          <p>Company address approve condition</p>
        </div>
        <ul
          v-for="(item, index) in companyAddressConditionList"
          v-bind:key="index"
        >
          <li>
            <input
              type="checkbox"
              v-model="checkedComAddAdd"
              :value="index" :id="'comAdd' + index"
            /><label :for="'comAdd' + index"
              >{{ index + 1 }}:{{ item.appCondition }}</label
            >
          </li>
        </ul>
        {{ checkedComAddAdd }}
      </div>
      <div class="condition" v-if="cValue.includes(5) > 0">
        <div>
          <p>creditcardfront approve condition</p>
        </div>
        <ul
          v-for="(item, index) in creditFrontConditionList"
          v-bind:key="index"
        >
          <li>
            <input
              type="checkbox"
              v-model="checkedCreditFrontAdd"
              :value="index" :id="'creFro' + index"
            /><label :for="'creFro' + index"
              >{{ index + 1 }}:{{ item.appCondition }}</label
            >
          </li>
        </ul>
        {{ checkedCreditFrontAdd }}
      </div>
      <div class="condition" v-if="cValue.includes(6) > 0">
        <div>
          <p>creditcardback approve condition</p>
        </div>
        <ul v-for="(item, index) in creditBackConditionList" v-bind:key="index">
          <li>
            <input
              type="checkbox"
              v-model="checkedCreditBackAdd"
              :value="index" :id="'creBack' + index"
            /><label :for="'creBack' + index"
              >{{ index + 1 }}:{{ item.appCondition }}</label
            >
          </li>
        </ul>
        {{ checkedCreditBackAdd }}
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Bus from "./bus.js";

export default {
  name: "IdCondition",
  data() {
    return {
      idConditionList: [],
      selfieConditionList: [],
      addressConditionList: [],
      companyDocConditionList: [],
      companyAddressConditionList: [],
      creditFrontConditionList: [],
      creditBackConditionList: [],
      cValue: [],
      checkedIDAdd: [],
      checkedSelfieAdd: [],
      checkedAddAdd: [],
      checkedComAdd: [],
      checkedComAddAdd: [],
      checkedCreditFrontAdd: [],
      checkedCreditBackAdd: [],
      conVal:"muzs"
    };
  },
  components: {
    
  },
  // monted(){
  //   Bus.$on('listenToA',this.getAData);
  // },
  created() {
    axios.get("./kyc/kycCondition.json").then(res => {
      // console.log(res);
      this.idConditionList = res.data.IdDoc;
      this.selfieConditionList = res.data.SelfieDoc;
      this.addressConditionList = res.data.AddressDoc;
      this.companyDocConditionList = res.data.CompanyDoc;
      this.companyAddressConditionList = res.data.CompanyAddressDoc;
      this.creditFrontConditionList = res.data.CreditCardFront;
      this.creditBackConditionList = res.data.CreditCardBack;
    });
    Bus.$on("emitConEvent", val => {
      this.cValue = val;
    });
  },
  methods: {
    // getData(val) {
    //   this.cValue = val;
    // },
    createMail (val) {
      Bus.$emit("emitMailEvent", val);
    }
  }
};
</script>

<style>

.condition {
  float: left;
  width: 320px;
  height: 100%;
  margin-left: 5px;
}
</style>
