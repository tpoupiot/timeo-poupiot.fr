<script setup>
    import IconArrowRight from "@/components/icons/IconArrowRight.vue";

    const props = defineProps({
        label: String,
        link: String
    })
</script>

<template>
    <a class="info" :href="link" target="_blank">
        <div class="live-bubble"></div>
        {{ label }}
        <IconArrowRight/>
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