const typeEnum={
        "alert":"alert",
        "confirm":"confirm",
        "modal":"modal"
    }
const keyGenerator=function(){
    
}
const i18nProvider=function(key,lang){
    switch(key){
        case 'Rexsheng.Dialog.OkText':
            return '确定';
        case 'Rexsheng.Dialog.CancelText':
            return '取消';
        case 'Rexsheng.Dialog.Info':
            return '提示';
        case 'Rexsheng.Dialog.Warn':
            return '警告';
        case 'Rexsheng.Dialog.Success':
            return '成功';
        case 'Rexsheng.Dialog.Error':
            return '失败';
        default:
            console.error("未提供i18n对应key")
            return ""
    }
}
const infoTypeEnum={
    "info":"INFO",
    "warn":"WARN",
    "success":"SUCCESS",
    "error":"ERROR"
}
export {typeEnum}
export {keyGenerator}
export {infoTypeEnum}
export {i18nProvider}