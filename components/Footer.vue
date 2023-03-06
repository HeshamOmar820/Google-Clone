<template>
    <footer class="w-full divide-y-[1px] divide-gray-300 bg-gray-200 text-sm text-gray-600 font-semibold">
        <div class="px-8 py-3">
            <p>Egypt</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-y-2 grid-flow-row-dense px-8 py-2">
            
            <div class="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
                <p>About</p>
                <p>Advertising</p>
                <p>Business</p>
            </div>
            <div class="flex justify-center space-x-8 md:ml-auto">
                <p>Privacy</p>
                <p>Terms</p>
                <p>Settings</p>
            </div>
        </div>
        <div class="flex justify-center items-center flex-col px-8 py-2">
            <p>
                © {{date}} |<a href="https://github.com/HeshamOmar820" target="_blank"> Hesham Omar</a> 
            </p>
            <p>
                made with <Icon name="ph:heart-fill" class="text-red-600"/> & <Icon name="logos:vue"/>
            </p>
        </div>
    </footer>
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