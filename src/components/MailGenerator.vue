<template>
  <div class="container">
    <div class="title">メール作成</div>
    <div class="mail">
      <div class="staffName">Staff Name:<input type="text" v-model="staffName"
          name=""
          id=""
          placeholder="Staff Name"
        />{{ staffName }}
      </div>
      <div class="subject">
        件名：
        <input type="text" name="" id="" placeholder="Subject" />
      </div>
      <div class="content">
        正文:
        <input
          type="text"
          width="600px"
          height="400px"
          name=""
          id=""
          placeholder="Content"
        />
      </div>
      <div class="signature">
        署名:
        <input
          type="text"
          name=""
          id=""
          v-model="signature"
          placeholder="signature"
        />{{ signature }}

      </div>

      <div>Thank you for using bitwallet!<br>This is {{staffName}} form bitwallet support team!</div>
      <div class="kycPart">kycpart</div>
      <div class="companyPart">companyPart</div>
      <div class="cardPart">cardPart</div>
      condition value{{conditionVal}}
      
     
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Bus from "./bus.js";


export default {
    data(){
        return{
            staffName:"",
            conditionVal:""
        }
    },
    created() {
    // axios.get("./kyc/kycCondition.json").then(res => {
    //   // console.log(res);
    //   this.idConditionList = res.data.IdDoc;
    //   this.selfieConditionList = res.data.SelfieDoc;
    //   this.addressConditionList = res.data.AddressDoc;
    //   this.companyDocConditionList = res.data.CompanyDoc;
    //   this.companyAddressConditionList = res.data.CompanyAddressDoc;
    //   this.creditFrontConditionList = res.data.CreditCardFront;
    //   this.creditBackConditionList = res.data.CreditCardBack;
    // });

    Bus.$on("emitMailEvent", val => {
      this.conditionVal = val;
    });
    
  },
  methods: {
    // getConData(conVal){
    //   this.conditionVal = conVal;
    // }
  }
};
</script>

<style>
.container {
  flex-direction: row;
}

</style>
