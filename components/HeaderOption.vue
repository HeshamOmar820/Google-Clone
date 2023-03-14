<template>
    <div v-for="(option) in options" :key="option.name">
        <div 
            class="flex items-center space-x-1 border-b-4 hover:text-blue-500 hover:border-blue-500 pb-3 cursor-pointer"
            :class="{
                    'text-blue-500 border-blue-500': option.selected,
                    'border-transparent': !option.selected
                    }"
        >
            <Icon :name="option.name" size="16px" class="w-4"/>
            <p class="hidden sm:inline-flex">{{ option.title }}</p>
        </div>
    </div>
</template>

<script>
export default{
    data() {
        return {
            options: [{ name: 'gg:search', title:'All', selected: true },
                { name: 'heroicons:photo', title:'Images', selected: false },
                { name: 'heroicons:play-circle', title:'Videos', selected: false },
                { name: 'heroicons:newspaper', title:'News', selected: false },
                { name: 'heroicons:map', title:'Maps', selected: false },
                { name: 'tabler:dots-vertical', title:'More', selected: false },
            ]
        }
    }
}
</script>