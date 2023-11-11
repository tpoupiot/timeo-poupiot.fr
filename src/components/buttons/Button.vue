<script setup>
    import IconGithub from "@/components/icons/IconGithub.vue";
    import IconLinkedin from "@/components/icons/IconLinkedin.vue";

	const props = defineProps({
		label: String,
		link: String,
		isPrimary: Boolean,
		isTiny: Boolean,
		socials: String
	})
</script>

<template>
    <a :class="{ primary: isPrimary, secondary: !isPrimary, tiny_button: isTiny }" :href="link">
        <IconGithub v-if="socials === 'github'" />
        <IconLinkedin v-else-if="socials === 'linkedin'" />
        {{ label }}
    </a>
</template>

<style scoped>
    a {
        font-weight: 600;
        padding: 10px 20px;
    }
    a svg {
        width: 16px;
        margin-right: 6px;
    }

    .primary {
        color: var(--color-primary-btn-txt);
        background-color: var(--color-primary-btn-bg);
        border: 1px solid var(--color-primary-btn-bd);
    }
    .primary:hover {
        background-color: var(--color-primary-btn-bg-hover);
        border: 1px solid var(--color-primary-btn-bd-hover);
        box-shadow: 0 0 5px var(--color-primary-btn-shadow);
    }
	.secondary {
		color: var(--color-secondary-btn-txt);
        background-color: var(--color-secondary-btn-bg);
		border: 1px solid var(--color-secondary-btn-bd);
	}
	.secondary:hover {
        color: var(--color-secondary-btn-txt-hover);
		border: 1px solid var(--color-secondary-btn-bd-hover);
    }

	.tiny_button {
		padding: 6px 12px;
	}
</style>