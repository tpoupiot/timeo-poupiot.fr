<script setup>
    const props = defineProps({
        label: String,
        link: String
    })
</script>

<template>
    <a class="info" :href="link" target="_blank">
        <div class="live-bubble"></div>
        {{ label }}
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-right"><path d="M18 8L22 12L18 16"/><path d="M2 12H22"/></svg>
    </a>
</template>

<style scoped>
    .info {
		font-family: 'Poppins',serif;
		font-size: 12px;
		color: rgba(255, 255, 255, 0.6);
		padding: 6px 10px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		font-weight: 400;
		margin-bottom: 2em;
	}
	.info svg {
		margin-left: 6px;
	}
	.info:hover {
		color: rgba(255, 255, 255, 0.8);
		border: 1px solid rgba(255, 255, 255, 0.6);
	}
	.live-bubble {
		width: 8px;
		height: 8px;
		display: inline-block;
		background-color: #EC5D5E;
		border-radius: 50%;
		margin-right: 6px;
		animation: live 2s infinite;
	}
	@keyframes live {
		0% { opacity: 0.6; }
		50% { opacity: 1; }
		100% { opacity: 0.6; }
	}
</style>