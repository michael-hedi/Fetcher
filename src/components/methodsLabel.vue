<template>
    <v-sheet
    class="rounded-xl d-flex justify-center"
    >
        <v-icon
            small
        >
            {{ methodValue[method].icon }}
        </v-icon>
        <p
        style="font-size:12px;"
        class="ml-2 ma-0 mt-1">{{ methodValue[method].name }}</p>
    </v-sheet>
</template>
<script>
export default{
    name : 'methodsLabel',
    data(){
        return {
            methodValue : {
                "get" : {
                    "name"  : "GET",
                    "icon"  : "mdi-monitor-arrow-down-variant"
                },
                "post" : {
                    "name"  : "POST",
                    "icon"  : "mdi-monitor-arrow-down-variant"
                }
            }
        }
    },
    props : [
        "method"
    ]
}

</script>