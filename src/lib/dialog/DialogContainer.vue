<template>
    <div class="RexSheng_dialog_container">
        <v-dialog v-for="(item,index) in cached" 
        :key="item.uniqueKey" 
        :dlg-type="item.dialogType"
        :dialog-key="item.uniqueKey"
        :dialog-type="item.dialogType"
        :dialog-option="item.option"
        :i18n="i18n"
        @close="close"
        >
        </v-dialog>
    </div>
</template>
<script>
import dlg from './Dialog'
import {typeEnum} from './constants'
export default {
    name:"dialog-container",
    components:{
        "v-dialog":dlg
    },
    data(){
        return{
            cached:[],
            keyNum:0,
            i18n:null
        }
    },
    created(){
        this.cached=[];
    },
    methods:{
        buildParam(type,args){
            var newObj={option:{}};
            if(type===typeEnum.alert || type===typeEnum.confirm){
                if(args.length==3){
                    newObj.option=Object.assign({message:args[0],title:args[1]},args[2]);
                }
                else if(args.length==2){
                    if(typeof args[1]==="object"){
                        newObj.option=Object.assign({message:args[0]},args[1]);
                    }
                    else{
                        newObj.option={message:args[0],title:args[1]};
                    }
                }
                else if(args.length==1){
                    if(typeof args[0]==="string"){
                        newObj.option={message:args[0]};
                    }
                    else if(typeof args[0]==="object"){
                        newObj.option=Object.assign({},args[0]);
                    }
                }
            }
            else if(type===typeEnum.modal){
                if(args.length==2){
                    newObj.option=Object.assign({component:args[0]},args[1]);
                }
                else if(args.length==1){
                    newObj.option=Object.assign({},args[0]);
                }
            }
            this.keyNum++;
            newObj.dialogType=type
            newObj.uniqueKey="RexSheng_Key_"+this.keyNum;
            newObj.option.lang=newObj.option.lang || "zh-CN";
            this.cached.push(newObj)
            return newObj;
        },
        add(type,p){
            var arg=this.buildParam(type,p);
            return arg.uniqueKey;
        },
        close(key){
            this.cached=this.cached.filter(m=>m.uniqueKey!=key);
        },
        closeAll(callback){
            this.cached=[];
            if(callback){
                callback();
            }
        }

    }
}
</script>
<style scoped>
.RexSheng_dialog_container{

}
</style>

