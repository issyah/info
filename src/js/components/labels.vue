<template>
    <div class="mt-4 text-gray-200">
        <span class="bg-green-200 text-green-700 font-bold label-language" v-for="(label, index) in labels">{{label}}</span>
    </div>
</template>
<script>
    export default ({
        props:{
            labels:{Type: Array, required:true}
        },
    })
</script>
