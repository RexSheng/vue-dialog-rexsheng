import {typeEnum,infoTypeEnum,i18nProvider} from './constants'
export default{
    props:{
        dialogType:{
            type:String,
            required:false
        },
        dialogKey:{
            type:String,
            default:""
        },
        dialogOption:{
            type:Object,
            default:function(){
                return{

                }
            }
        },
        i18n:{
            type:Function
        },
        component:{
            type:Object
        }
    },
    data(){
        return{
            show:false,
            bodyHeight:0,
            btnDisabled:false,
            lang:"zh-CN"
        }
    },
    components:{
        // "modal-content-component":{
        //     functional:true,
        //     render:function(h,context){
        //         return this.modalOption?this.modalOption.render(h):{}
        //     }}
    },
    mounted(){
        this.show=true
    },
    computed:{
        i18nGetter(){
            return this.i18n || i18nProvider
        },
        isAlert(){
            return this.dialogType===typeEnum.alert
        },
        isConfirm(){
            return this.dialogType===typeEnum.confirm
        },
        isModal(){
            return this.dialogType===typeEnum.modal
        },
        isInfo(){
            return this.dialogOption.type===infoTypeEnum.info
        },
        isSuccess(){
            return this.dialogOption.type===infoTypeEnum.success
        },
        isWarn(){
            return this.dialogOption.type===infoTypeEnum.warn
        },
        isError(){
            return this.dialogOption.type===infoTypeEnum.error
        },
        
        confirmBtnClass(){
            if(this.dialogOption.confirmBtnClass){
                return this.dialogOption.confirmBtnClass;
            }
            return "RexSheng_ConfirmButton";
        },
        cancelBtnClass(){
            if(this.dialogOption.cancelBtnClass){
                return this.dialogOption.cancelBtnClass;
            }
            return "RexSheng_CancelButton";
        },
        alertOption:function(){
            this.dialogOption.type=(this.dialogOption.type || infoTypeEnum.info).toUpperCase()
            this.dialogOption.title=this.dialogOption.title==undefined?this.getTitle(this.dialogOption.type):this.dialogOption.title
            this.dialogOption.showIcon=this.dialogOption.showIcon===false?false:true;
            this.dialogOption.okText=this.dialogOption.okText==undefined?this.getOkText():this.dialogOption.okText;
            this.dialogOption.cancelText=this.dialogOption.cancelText==undefined?this.getCancelText():this.dialogOption.cancelText
            if(this.isConfirm){
                this.dialogOption.showCancelBtn=true
            }
            var self=this;
            self.$nextTick(function(){
                setTimeout(()=>{
                    self.bodyHeight=(window.innerHeight || document.documentElement.clientHeight)/2;
                },20)  
            });
            
            return this.dialogOption
        },
        modalOption:function(){
            this.dialogOption.title=this.dialogOption.title || "";
            var self=this
            self.$nextTick(function(){
                setTimeout(()=>{
                    self.bodyHeight=(window.innerHeight || document.documentElement.clientHeight)/2;
                },20)  
            });
            return this.dialogOption
        },
    },
    methods:{
        baseClose:function(){
            this.show=false;
            if(this._events.close){
                setTimeout(()=>{
                    this.$nextTick(()=>{
                        this.$emit("close",this.dialogKey);
                    })
                },200);
            }
        },
        confirm:function(){
            if(this.dialogOption.onConfirm){
                var self=this;
                self.btnDisabled=true;
                new Promise(function(resolve,reject){
                    if(self.dialogOption.onConfirm.length>0){
                        new Promise(function(res,rej){
                            self.dialogOption.onConfirm.call(self,res)
                        }).then((res)=>{
                            resolve(res)
                        }).catch((e)=>{
                            resolve(false)
                        })
                    }
                    else{
                        resolve(self.dialogOption.onConfirm.call(self))
                    }
                })
                .then((a)=>{
                    self.btnDisabled=false;
                    if(a===false){

                    }
                    else{
                        this.baseClose(this);
                    }
                }).catch(b=>{
                    self.btnDisabled=false;
                });
                
            }
            else{
                this.baseClose(this);
            }
            
        },
        cancel:function(){
            if(this.dialogOption.onCancel){
                var self=this;
                self.btnDisabled=true;
                new Promise(function(resolve,reject){
                    if(self.dialogOption.onCancel.length>0){
                        new Promise(function(res,rej){
                            self.dialogOption.onCancel.call(self,res)
                        }).then((res)=>{
                            resolve(res)
                        }).catch((e)=>{
                            resolve(false)
                        })
                    }
                    else{
                        resolve(self.dialogOption.onCancel.call(self))
                    }
                })
                .then((a)=>{
                    self.btnDisabled=false;
                    if(a===false){

                    }
                    else{
                        this.baseClose(this);
                    }
                }).catch(b=>{
                    self.btnDisabled=false;
                });
                
            }
            else{
                this.baseClose(this);
            }
        },
        getTitle:function(infoType){
            if(infoType===infoTypeEnum.info){
                return this.i18nGetter("Rexsheng.Dialog.OkText",this.dialogOption.lang)
            }
            if(infoType===infoTypeEnum.warn){
                return this.i18nGetter("Rexsheng.Dialog.Warn",this.dialogOption.lang)
            }
            if(infoType===infoTypeEnum.success){
                return this.i18nGetter("Rexsheng.Dialog.Success",this.dialogOption.lang)
            }
            if(infoType===infoTypeEnum.error){
                return this.i18nGetter("Rexsheng.Dialog.Error",this.dialogOption.lang)
            }
            return ""
        },
        getOkText:function(){
            return this.i18nGetter("Rexsheng.Dialog.OkText",this.dialogOption.lang)
        },
        getCancelText:function(){
            return this.i18nGetter("Rexsheng.Dialog.CancelText",this.dialogOption.lang)
        }
    }
}