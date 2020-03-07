<template>
  <div class="kycCondition">
    <p class="title">Approve Condition</p>
    <p>--{{ checkedValues }}--</p>
    <div class="condition">
      <div>
        <p>ID approve condition</p>
      </div>
      <ul v-for="(item, index) in idConditionList" v-bind:key="index">
        <li>
          <input type="checkbox" />{{ index + 1 }}:{{ item.appCondition }}
          <!-- <br/>
        {{index}}++{{item.mailContent}} -->
        </li>
      </ul>
    </div>
    <div class="condition" v-show="false">
      <div>
        <p>Selfie approve condition</p>
      </div>
      <ul v-for="(item, index) in selfieConditionList" v-bind:key="index">
        <li>
          <input type="checkbox" />{{ index + 1 }}:{{ item.appCondition }}
        </li>
      </ul>
    </div>
    <div class="condition" v-show="false">
      <div>
        <p>Address approve condition</p>
      </div>
      <ul v-for="(item, index) in addressConditionList" v-bind:key="index">
        <li>
          <input type="checkbox" />{{ index + 1 }}:{{ item.appCondition }}
        </li>
      </ul>
    </div>
    <div class="condition" v-show="false">
      <div>
        <p>Company approve condition</p>
      </div>
      <ul v-for="(item, index) in companyDocConditionList" v-bind:key="index">
        <li>
          <input type="checkbox" />{{ index + 1 }}:{{ item.appCondition }}
        </li>
      </ul>
    </div>
    <div class="condition" v-show="false">
      <div>
        <p>Company address approve condition</p>
      </div>
      <ul
        v-for="(item, index) in companyAddressConditionList"
        v-bind:key="index"
      >
        <li>
          <input type="checkbox" />{{ index + 1 }}:{{ item.appCondition }}
        </li>
      </ul>
    </div>
    <div class="condition">
      <div>
        <p>creditcardfront approve condition</p>
      </div>
      <ul v-for="(item, index) in creditFrontConditionList" v-bind:key="index">
        <li>
          <input type="checkbox" />{{ index + 1 }}:{{ item.appCondition }}
        </li>
      </ul>
    </div>
    <div class="condition">
      <div>
        <p>creditcardback approve condition</p>
      </div>
      <ul v-for="(item, index) in creditBackConditionList" v-bind:key="index">
        <li>
          <input type="checkbox" />{{ index + 1 }}:{{ item.appCondition }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from "axios";
// import DocType from "../components/DocType.vue";

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
      creditBackConditionList: []
    };
  },

  props: ["checkedValues"],

  created() {
    axios.get("./kyc/kycCondition.json").then(res => {
      console.log(res);
      this.idConditionList = res.data.IdDoc;
      this.selfieConditionList = res.data.SelfieDoc;
      this.addressConditionList = res.data.AddressDoc;
      this.companyDocConditionList = res.data.CompanyDoc;
      this.companyAddressConditionList = res.data.CompanyAddressDoc;
      this.creditFrontConditionList = res.data.CreditCardFront;
      this.creditBackConditionList = res.data.CreditCardBack;
    });
  }
};
</script>

<style>
/* .kycCondition .title{
  float: left;
}*/
.condition {
  float: left;
  width: 300px;
}
</style>
