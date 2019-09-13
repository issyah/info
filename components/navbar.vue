<template>
    <nav class="w-full md:absolute z-10">
        <div class="container mx-auto px-4 py-3 flex justify-between text-gray-400">
            <div class="flex flex-row border-gray-900 border rounded overflow-hidden">
                <div class="py-1 px-2 text-xl border-r-0 font-bold text-red-500">
                    	&lt;/&gt;
                </div>
                <div class=" py-1 px-2 text-xl border-l border-gray-900 hidden md:inline-block">
                    _ISSYAH_ISMAIL
                </div>
            </div>
            <div class="self-center">
                <ul class="nav-link">
                    <li>
                        <a href="#readme" class="font-medium hover:underline mr-5">About</a>
                    </li>
                    <li>
                        <a href="#works" class="font-medium hover:underline mr-5">Works</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        data:() => ({

        }),
        methods:{},
        mounted(){

        }
    }
</script>
<style>
    ul.nav-link{
        @apply list-none;
    }
    ul.nav-link > li {
        @apply inline-block;
    }
    /* @media (max-width: 768px){
        ul.nav-link{
            display: block;
        }
        ul.nav-link > li {
            @apply block;
        }
    } */
</style>
