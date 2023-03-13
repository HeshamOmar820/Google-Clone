<template>
    <div v-for="(option) in options" :key="option.name">
        <div class="flex items-center space-x-1 border-b-4 border-transparent hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer" :class="{'text-blue-500 border-blue-600': option.selected}">
            <Icon :name="option.name" size="16px" class="w-4"/>
            <p class="hidden sm:inline-flex">{{ option.title }}</p>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            options: [{ name: 'gg:search', title:'All', selected:'true' },
                { name: 'heroicons:photo', title:'Images' },
                { name: 'heroicons:play-circle', title:'Videos' },
                { name: 'heroicons:newspaper', title:'News' },
                { name: 'heroicons:map', title:'Maps' },
                { name: 'tabler:dots-vertical', title:'More' },
            ]
        }
    }
}
</script>