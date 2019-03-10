<template>
  <transition
    appear mode="out-in"
    name="v-dialog--candyd"
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut"
  >
    <div class="RexSheng_alert_container" 
    :class="[{'large':alertOption.width=='large'},{'small':alertOption.width=='small'}]" 
    v-show="show" ref="RexSheng_alert_container" :style="{'width':alertOption.width}">
      <div class="RexSheng_alert_title">
        <slot name="header">
          <div v-text="alertOption.title"></div>
        </slot>
        <div class="RexSheng_alert_title_close" @click="cancel" v-if="alertOption.showCloseBtn===true">
          <span>×</span></div>
      </div>
      <div class="RexSheng_alert_body" :class="{'hasIcon':alertOption.showIcon}">
        <template v-if="alertOption.showIcon">
        <slot name="icon" >
         <div class="RexSheng_alert_body_icon">
            <i class="RexSheng_icon_confirm" v-if="isConfirm"></i>
            <i class="RexSheng_icon_info" v-else-if="isInfo"></i>
            <i class="RexSheng_icon_success" v-else-if="isSuccess"></i>
            <i class="RexSheng_icon_error" v-else-if="isError"></i>
            <i class="RexSheng_icon_warn" v-else-if="isWarn"></i>
         </div>
        </slot>
        </template>
        <div class="RexSheng_alert_body_content" v-html="alertOption.message" :style="{'max-height':bodyHeight+'px'}"></div>
        <div class="RexSheng_alert_footer">
          <slot name="footer">
            <button
              v-if="alertOption.showCancelBtn===true"
              type="button"
              :class="[cancelBtnClass]"
              @click="cancel"
            >{{alertOption.cancelText}}</button>
          </slot>
          <button type="button" :class="[confirmBtnClass]" :disabled="btnDisabled" ref="confirmBtn" @click="confirm">
            <span class="RexSheng_icon_spinner" v-if="btnDisabled"></span>{{alertOption.okText}}

            </button>
        </div>
      </div>
    </div>
  </transition>
</template>
<script>
import mixin from "./mixin";
export default {
  name: "v-alert",
  mixins: [mixin],
  props: {},
  data() {
    return {
     
    };
  },
  watch:{

  },
  mounted() {
    this.$nextTick(()=>{ 
      this.$refs.confirmBtn.focus();
    })
  },
  computed: {}
};
</script>
<style scoped>
.RexSheng_alert_container {
  position: relative;
  margin: auto;
  text-align: center;
  width: 400px;
  max-width: 1000px;
  min-width: 240px;
  /* min-height: 100px; */
  max-height:90%;
  height: auto;
  /* height: 200px; */
  top: 50%; /*偏移*/
  transform: translateY(-50%);
  background-color: white;
  border-radius: 2px;
  -moz-box-shadow: 0px 0px 25px #888888; /* 老的 Firefox */
  box-shadow: 0px 0px 25px #888888;
}
.success{
  color:#5cb85c;
}
.warning{
  color:#f0ad4e;
}
.danger{
  color:#d9534f;
}
.info{
  color:#337ab7;
}
.confirm{
  color:#337ab7;
}
@media (min-width: 2048px){
  .RexSheng_alert_container {
    width: 50%;
    max-width: 1000px;
    min-width: 240px;
  }
    .RexSheng_alert_container.large {
    width: 80%;
    max-width: 2000px;
    min-width: 300px;
  }
  .RexSheng_alert_container.small {
    width: 20%;
    max-width: 250px;
    min-width: 130px;
  }
}
@media (min-width: 768px){
  .RexSheng_alert_container {
    width: 400px;
    max-width: 1000px;
    min-width: 240px;
  }
    .RexSheng_alert_container.large {
    width: 80%;
    max-width: 2000px;
    min-width: 300px;
  }
  .RexSheng_alert_container.small {
    width: 20%;
    max-width: 250px;
    min-width: 130px;
  }
}
@media (max-width: 767px){
  .RexSheng_alert_container {
    width: 50%;
    max-width: 1000px;
    min-width: 240px;
  }
    .RexSheng_alert_container.large {
    width: 80%;
    max-width: 2000px;
    min-width: 300px;
  }
  .RexSheng_alert_container.small {
    width: 20%;
    max-width: 250px;
    min-width: 150px;
  }
}

.RexSheng_alert_title {
  text-align: left;
  height: 30px;
  line-height: 35px;
  font-size: 18px;
  padding: 0 10px;
}
.RexSheng_alert_title_close {
  position: absolute;
  top: 0px;
  right: 0px;
  font-size: 30px;
  line-height: 15px;
  border: none;
  width: 35px;
  height: 35px;
  color: darkgrey;
  cursor: pointer;
}
.RexSheng_alert_title_close span{
  display: block;
  padding-left: 6px;
  padding-top: 6px;
}
.RexSheng_alert_title_close:hover {
  background-color: #e81123;
  color: #fff;
}
.RexSheng_alert_body {
  padding: 10px 10px 0;
  height: calc(100% - 40px);
  overflow: auto;
}
.RexSheng_alert_body_content {
  font-size: 14px;
  text-align: left;
  margin-top:10px;
  margin-left:0px;
  height:calc(100% - 50px);
  overflow: auto;
}
.hasIcon .RexSheng_alert_body_content {
  margin-left:60px;
}
.RexSheng_alert_container.small .RexSheng_alert_body_content {
  margin-top:3px;
}
.RexSheng_alert_footer {
  float: right;
  padding: 20px 10px 0;
  height: 40px;
  clear: both;
}
.RexSheng_alert_body_icon{
  width:50px;
  height:50px;
  float:left;
}
.RexSheng_alert_footer button {
}
</style>

