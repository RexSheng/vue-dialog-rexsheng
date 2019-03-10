import DialogPage from './dialog/DialogContainer'
import {typeEnum} from './dialog/constants'
import '../assets/css/index.css'
const dialogPlugin={
    install:function(Vue,options={}){
        const instanceName=options.instanceName || "$dialog";
        const DialogContainer=Vue.component(DialogPage.name,DialogPage);
        const dlg=new DialogContainer();
        dlg.i18n=options.i18n;
        document.body.appendChild(dlg.$mount().$el)
        Vue.prototype[instanceName]={
            modal(){
                if(!arguments.length || !arguments[0]) return;
                return dlg.add(typeEnum.modal,arguments);
            },
            alert(){
                if(!arguments.length || !arguments[0]) return;
                return dlg.add(typeEnum.alert,arguments);
            },
            confirm(){
                if(!arguments.length || !arguments[0]) return;
                return dlg.add(typeEnum.confirm,arguments);
            },
            closeAll(callback){
                return dlg.closeAll(callback);
            }
        }
    }
}
export default dialogPlugin;
// if (typeof exports == "object") {
//     module.exports = dialogPlugin
// } else if (typeof define == "function" && define.amd) {
//     define([], function() { return dialogPlugin })
// } else if (typeof window !== 'undefined' && window.Vue) {
//     window.RexDialogPlugin = dialogPlugin
//     Vue.use(dialogPlugin)
// }
