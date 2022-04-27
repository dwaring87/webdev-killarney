<template>
    <div class="w-full bg-green-800 px-2 sm:pt-3 fixed bottom-0 left-0" style="z-index: 9999">
        <div class="max-w-xl mx-auto flex gap-2">
            <NuxtLink class="flex-grow" v-if="text2 && link2" :to="link2">
                <span class="btn">{{ text2 }}</span>
            </NuxtLink>
            <NuxtLink class="flex-grow" :to="link">
                <span class="btn">{{ text }}</span>
            </NuxtLink>
        </div>
    </div>
</template>

<script>
export default {

    props: {
        text: String,
        link: String,
        text2: String,
        link2: String
    }

}
</script>