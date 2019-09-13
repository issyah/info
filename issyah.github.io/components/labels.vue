<template>
    <div class="mt-4 text-gray-200">
        <span class="bg-gray-200 text-gray-900 label-language" v-for="(label, index) in labels">{{label}}</span>
    </div>
</template>
<script>
    export default ({
        props:{
            labels:{Type: Array, required:true}
        },
    })
</script>
