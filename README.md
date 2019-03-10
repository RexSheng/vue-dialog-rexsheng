# vue-dialog-rexsheng

> A Vue.js plugin for proving alert,modal...

## Build Setup

``` bash
# install plugin
npm install vue-dialog-rexsheng --save-dev

# config in entry file like 'src/main.js'
import dlg from 'vue-dialog-rexsheng';
//default instanceName is "$dialog",you can use this.$dialog.alert() in pages
Vue.use(dlg,{instanceName:"$dialog"})
```
#用法
```javascript
<template>
  <div>
    <h3>{{title}}</h3>
    <button type="button" @click="showAlert">Alert</button>
    <input type="checkbox" v-model="checked">
    <button type="button" @click="showConfirm">Confirm</button>
    <button type="button" @click="showHtmlConfirm">HtmlConfirm</button>
    <button type="button" @click="asyncConfirm">asyncConfirm</button>
    <button type="button" @click="showModal">showModal</button>
  </div>
</template>
<script>
import PopModalTest from "./PopModalTest";
export default {
  data() {
    return {
      title: "弹框测试页面",
      checked: true
    };
  },
  mounted() {},
  methods: {
    showAlert() {
      this.$dialog.alert("内容", "大标题", {
        showCloseBtn: this.checked
      });
    },
    showConfirm() {
      this.$dialog.confirm("内容", "大标题", {
        onConfirm: function() {
          this.$dialog.alert(
            "第二个框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个第二个框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1vddd弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1第二个弹框1vddd",
            "第二个标题",
            { width: "large" }
          );
        },
        onCancel() {
          this.$dialog.alert(
            "如今的屏幕分辨率，小至320px（iPhone），大到2560px甚至更高（大显示器），变化范围极大。",
            {
              width: "small",
              showCloseBtn: true,
              type: "error",
              showIcon: false
            }
          );
        }
      });
    },
    showHtmlConfirm() {
      this.$dialog.confirm("<span style='color:red;'>你好</span>", {
        onConfirm: () => {
          console.log("close1", this.tempData);
          // return false;
          // res(false)
          // setTimeout(()=>{
          //   res(true)
          // },1000)
          this.$dialog.alert("click ok", "", { type: "success" });
        },
        onCancel: () => {
          this.$dialog.alert("click cancel", "", { type: "warn" });
        }
      });
    },
    asyncConfirm: function() {
      this.$dialog.confirm("<span style='color:red;'>你好</span>", {
        onConfirm: cb => {
          setTimeout(() => {
            cb(true);
          }, 2000);
        }
      });
    },
    showModal: function() {
      this.$dialog.modal({
        component: PopModalTest,
        title: "标题22",
        showCloseBtn: this.checked,
        width: "1000px",
        params:{firstInput:"初始值"},
        callback: p => {
          console.log("return:", p,this.title);
          this.$dialog.alert("输入了："+p, { type: "error" });
        }
      });
    }
  }
};
</script>


```
#配置项
```
this.$dialog.alert("message","title",option)
this.$dialog.alert("message",option)
this.$dialog.alert(option)
this.$dialog.modal("componentName",option)
this.$dialog.modal(option)
```
## option配置如下

|选项            |      说明                |  默认 |
|------          |---------------          |:-----:|
|title           |  弹框标题                | `""` |
|message         | 弹框内容，支持html语法    |    `""` |
|type            |  弹框类型，`info` `success` `warn` `error`   |   `info` |
|width           |  宽度，`small` `large` `数字+'px'`   |   `""` |
|showCancelBtn   |  是否显示取消按钮   |   alert弹框默认为`false` |
|showCloseBtn    | 是否显示右上角close按钮 |    `false` |
|showIcon        | 是否显示弹框图标 |    `true` |
|onConfirm       | 点击确定按钮回调函数 |  Function   |
|onCancel        | 点击取消按钮回调函数 |  Function  |
|confirmBtnClass | 确定按钮的样式class |    `RexSheng_ConfirmButton` |
|cancelBtnClass  | 取消按钮的样式class |    `RexSheng_CancelButton` |
|component       | modal弹框使用的组件 | `{}`  |
|params          | modal传入组件的参数对象 |  `{}`  |
|callback        | modal关闭弹框的回调函数 | Function |


For detailed explanation on how things work, consult the [docs for vue-dialog-rexsheng](https://github.com/RexSheng/vue-dialog-rexsheng).
