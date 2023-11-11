<script setup>
    const props = defineProps({
        label: String,
        link: {
            type: String,
            default: '/'
        }
    })
</script>

<template>
    <router-link class="menu-link" :to="link" >{{ label }}</router-link>
</template>

<style scoped>
    .menu-link {
		color: rgba(255, 255, 255, 0.6);
		padding: 10px 15px;
		font-weight: 500;
	}
    .menu-link:hover {
        color: #fff;
    }
</style>