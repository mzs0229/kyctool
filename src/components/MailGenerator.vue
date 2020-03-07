<template>
  
<div class="container">


<div class="title">メール作成</div>
<div class="mail">
    <div class="subject">件名：
        <input type="text" name="" id="" placeholder="Subject">
    </div>
    <div class="content">正文:
        <input type="text" width="600px" height="400px" name="" id="" placeholder="Content">
    </div>
    <div class="signature">署名:
         <input type="text" name="" id="" v-model="staffName" placeholder="Staff Name">{{staffName}}
    </div>
    {{staffName}}
</div>



</div>

</template>

<script>
export default {

}
</script>

<style>
.container{
flex-direction: row;
}
.title{

}
</style>