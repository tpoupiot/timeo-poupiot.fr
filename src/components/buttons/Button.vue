<script setup>
    import IconGithub from "@/components/icons/IconGithub.vue";
    import IconLinkedin from "@/components/icons/IconLinkedin.vue";
    import IconArrowRight from "@/components/icons/IconArrowRight.vue";

	const props = defineProps({
		label: String,
        secondary: Boolean,
        type: {
            type: String,
            default: "redirect",
            validator: (value) => {
                return ["redirect", "router", "download"].includes(value);
            }
        },
        link: String,
        size: {
            type: String,
            default: "big",
            validator: (value) => {
                return ["big", "medium", "small"].includes(value);
            }
        },
        icon: {
            type: String,
            default: "none",
            validator: (value) => {
                return ["none", "github", "linkedin", "arrowR"].includes(value);
            }
        }
    })
</script>

<template>
    <a
        v-if = "type === 'redirect' || type === 'download'"
        :class="{
            primary: !secondary,
            secondary: secondary,
            button: true,
            small_btn: size === 'small',
            medium_btn: size === 'medium',
            big_btn: size === 'big'
        }"
        :href="link"
		target="_blank"
    >
        <IconGithub v-if="icon === 'github'" class="icon left-icon" />
        <IconLinkedin v-else-if="icon === 'linkedin'" class="icon left-icon" />
        {{ label }}
        <IconArrowRight v-if="icon === 'arrowR'" class="icon right-icon" />
    </a>

    <router-link
        v-else-if = "type === 'router'"
        :class="{
            primary: !secondary,
            secondary: secondary,
            button: true,
            small_btn: size === 'small',
            medium_btn: size === 'medium',
            big_btn: size === 'big'
        }"
		:to="link"
    >
		<IconGithub v-if="icon === 'github'" class="icon left-icon" />
		<IconLinkedin v-else-if="icon === 'linkedin'" class="icon left-icon" />
		{{ label }}
		<IconArrowRight v-if="icon === 'arrowR'" class="icon right-icon" />
    </router-link>
</template>

<style scoped>
    .button {
        font-weight: 600;
    }
	.big_btn {
		padding: 10px 20px;
	}
	.medium_btn {
		padding: 8px 16px;
	}
	.small_btn {
		padding: 6px 12px;
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


    .button .icon {
        width: 16px;
		height: 16px;
    }
	.button .left-icon {
		margin-right: 8px;
	}
	.button .right-icon {
		margin-left: 8px;
		transition: transform .1s ease-in-out;
	}
	.button:hover .right-icon {
		animation: svgTranslate .8s infinite;
	}
	@keyframes svgTranslate {
		0% { transform: translateX(0); }
		50% { transform: translateX(2px); }
		100% { transform: translateX(0); }
	}
</style>