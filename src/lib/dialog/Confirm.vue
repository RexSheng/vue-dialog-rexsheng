<template>
    <v-alert></v-alert>
</template>
<script>
import mixin from "./mixin";
import alert from './Alert'
export default {
    name:"v-confirm",
    components:{
        'v-alert':alert
    },
    mixins: [mixin],
    created(){
        
    }
}
</script>
