<template>
  <div>
    <div class="left">
      <div class="docType">
        <div>
          <p class="title">Doctype</p>
          <div class="docs">
            <ul v-for="(item, index) in kycList" :key="index">
              <li>
                <input
                  type="checkbox"
                  v-model="checkedDocs"
                  :value="index"
                  :id="'doc' + index"
                /><label :for="'doc' + index">{{ item.name }}</label>
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
              <button @click="selectAll">Select all</button>
              <button @click="clearAll">Clear all</button>
              <!-- <button @click="sendcheckedDocs(checkedDocs)">Confirm</button> -->
            </div>
            <div>
              explaination
              <div>Docs{{ checkedDocs }} staffname{{ staffNames }}</div>
            </div>
          </div>
          <div class="staffName">
            Staff Name
            <ul v-for="(item, index) in staffNameList" :key="index">
              <li>
                <input
                  type="checkbox"
                  v-model="staffNames"
                  :value="item.name"
                  :id="'staff' + index"
                /><label :for="'staff' + index"
                  >{{ item.ID }}:{{ item.name }}</label
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    
    <!-- condition part -->
    <div class="kycCondition">
      <!-- {{cValue}}++++ -->
      <div>
        <div v-if="cValue == ''">No Docs selected!</div>
        <!-- <div><button @click="creatMail(conVal)">Create Mail</button></div> -->
      </div>
      <div>
        <div class="condition" v-if="checkedDocs.includes(0) > 0">
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
        <div class="condition" v-if="checkedDocs.includes(1) > 0">
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
        <div class="condition" v-if="checkedDocs.includes(2) > 0">
          <div>
            <p>Address approve condition</p>
          </div>
          <ul v-for="(item, index) in addressConditionList" v-bind:key="index">
            <li>
              <input
                type="checkbox"
                v-model="checkedAddAdd"
                :value="index"
                :id="'add' + index"
              /><label :for="'add' + index"
                >{{ index + 1 }}:{{ item.appCondition }}</label
              >
            </li>
          </ul>
          {{ checkedAddAdd }}
        </div>
        <div class="condition" v-if="checkedDocs.includes(3) > 0">
          <div>
            <p>Company approve condition</p>
          </div>
          <ul
            v-for="(item, index) in companyDocConditionList"
            v-bind:key="index"
          >
            <li>
              <input
                type="checkbox"
                v-model="checkedComAdd"
                :value="index"
                :id="'com' + index"
              /><label :for="'com' + index"
                >{{ index + 1 }}:{{ item.appCondition }}</label
              >
            </li>
          </ul>
          {{ checkedComAdd }}
        </div>
        <div class="condition" v-if="checkedDocs.includes(4) > 0">
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
                :value="index"
                :id="'comAdd' + index"
              /><label :for="'comAdd' + index"
                >{{ index + 1 }}:{{ item.appCondition }}</label
              >
            </li>
          </ul>
          {{ checkedComAddAdd }}
        </div>
        <div class="condition" v-if="checkedDocs.includes(5) > 0">
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
                :value="index"
                :id="'creFro' + index"
              /><label :for="'creFro' + index"
                >{{ index + 1 }}:{{ item.appCondition }}</label
              >
            </li>
          </ul>
          {{ checkedCreditFrontAdd }}
        </div>
        <div class="condition" v-if="checkedDocs.includes(6) > 0">
          <div>
            <p>creditcardback approve condition</p>
          </div>
          <ul
            v-for="(item, index) in creditBackConditionList"
            v-bind:key="index"
          >
            <li>
              <input
                type="checkbox"
                v-model="checkedCreditBackAdd"
                :value="index"
                :id="'creBack' + index"
              /><label :for="'creBack' + index"
                >{{ index + 1 }}:{{ item.appCondition }}</label
              >
            </li>
          </ul>
          {{ checkedCreditBackAdd }}
        </div>
      </div>
    </div>
    </div>

    <div class="right"></div>
  </div>
</template>

<script>
import axios from "axios";
// import Bus from "./bus.js";

export default {
  data() {
    return {
      kycList: [],
      staffNameList: [],
      checkedDocs: [0, 1, 2],
      staffNames: [],
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
      checkedCreditBackAdd: []
    };
  },
  components: {},
  props: {},

  created() {
    axios.get("./kyc/kycDocJP.json").then(res => {
      // console.log(res.data.docType.name);
      this.kycList = res.data.docType;
    });
    axios.get("./kyc/staffName.json").then(res => {
      console.log(res.data.staffName.name);
      this.staffNameList = res.data.staffName;
    });
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
    }
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

</style>
