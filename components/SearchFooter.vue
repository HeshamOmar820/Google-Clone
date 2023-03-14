<template>
    <div class="flex justify-center items-center flex-col px-8 py-2 bottom-0 bg-gray-200">
        <p>
            © {{date}} |<a href="https://github.com/HeshamOmar820" target="_blank"> Hesham Omar</a> 
        </p>
        <p>
            made with <Icon name="ph:heart-fill" class="text-red-600"/> & <Icon name="logos:vue"/>
        </p>
    </div>
</template>

<script>
export default {
    data() {
        return {
        date: new Date().getFullYear(),
        };
    },
};
</script>