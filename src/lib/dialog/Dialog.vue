<template>
  <div :class="['RexSheng_container',bgColor]">
    
    <v-alert
      v-if="isAlert || isConfirm"
      v-bind="$attrs"
      v-on="$listeners"
     
    ></v-alert>
    <!-- :dialogType="dialogType"
      :dialogKey="dialogKey"
      :dialogOption="dialogOption"
      :i18n="i18n" -->
    <v-modal v-else-if="isModal"
      v-bind="$attrs"
      v-on="$listeners"
      ></v-modal>
  </div>
</template>
<script>
import alert from "./Alert";
import confirm from "./Confirm";
import modal from "./Modal";
import mixin from "./mixin";
import { typeEnum } from "./constants";
export default {
  name: "dlg",
  // mixins: [mixin],
  components: {
    "v-alert": alert,
    "v-confirm": confirm,
    "v-modal": modal
  },
  props: {
    dlgType:{
      type:String
    }
  },
  data() {
    return {};
  },
  created(){
    
  },
  computed: {
    isAlert(){
            return this.dlgType===typeEnum.alert
        },
        isConfirm(){
            return this.dlgType===typeEnum.confirm
        },
        isModal(){
            return this.dlgType===typeEnum.modal
        },
        bgColor(){
            // if(this.dialogOption.bgColor){
            //     return this.dialogOption.bgColor;
            // }
            return "RexSheng_darkbg";
        },
  },
  methods: {}
};
</script>
<style scoped>
.RexSheng_container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
.RexSheng_darkbg {
  background-color: rgba(0, 0, 0, 0.3);
}
.RexSheng_ConfirmButton {
  border: 1px solid #e0e5e9;
  background-color: #aeb4b9;
  color: rgb(104, 100, 100);
  outline: none !important;
  padding: 8px 15px;
  margin-left: 5px;
  min-width: 90px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 14px;
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
</style>
<style>
.RexSheng_ConfirmButton {
  border: 1px solid #516270;
  background-color: #516270;
  color: #fff;
  outline: none !important;
  padding: 8px 15px;
  margin-left: 5px;
  min-width: 90px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 14px;
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
.RexSheng_ConfirmButton[disabled] {
  border-color:#aeb4b9;
  background-color: #aeb4b9;
  cursor: not-allowed;
}
.RexSheng_CancelButton {
  border: 1px solid #e0e5e9;
  background-color: #e0e5e9;
  color: rgb(104, 100, 100);
  outline: none !important;
  padding: 8px 15px;
  margin-left: 5px;
  min-width: 90px;
  -webkit-border-radius: 2px;
  -moz-border-radius: 2px;
  border-radius: 2px;
  font-size: 14px;
  -webkit-box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 2px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.2);
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
}
@keyframes zoomIn {
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
}

.zoomIn {
  -webkit-animation-name: zoomIn;
  animation-name: zoomIn;
}
@keyframes zoomOut {
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    -webkit-transform: scale3d(0.3, 0.3, 0.3);
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
}

.zoomOut {
  -webkit-animation-name: zoomOut;
  animation-name: zoomOut;
}
.animated {
  -webkit-animation-duration: 300ms;
  animation-duration: 300ms;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@media (print), (prefers-reduced-motion) {
  .animated {
    -webkit-animation: unset !important;
    animation: unset !important;
    -webkit-transition: none !important;
    transition: none !important;
  }
} 
</style>
