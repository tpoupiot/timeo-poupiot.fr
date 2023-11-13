<script setup>
    import Button from '@/components/buttons/Button.vue';
    import InfoButton from "@/components/buttons/InfoButton.vue";
    import IconArrowDown from "@/components/icons/IconArrowDown.vue";
</script>

<template>
    <section class="hero-section">
        <main>
            <InfoButton label="Travaille chez NetCURD" link="https://netcurd.fr"/>
            <div>
                <h1>
                    Timéo Poupiot
                </h1>
                <p>
                    Étudiant en informatique et <strong>Développeur Web</strong> junior.
                </p>
                <div class="contacts-buttons">
                    <Button label="Github" size="small" icon="github" link="https://github.com" />
                    <Button label="LinkedIn" size="small" icon="linkedin" link="https://linkedin.com" />
                </div>
            </div>
        </main>

        <div class="cta-container">
            <a href="#about-section" class="cta">
                <IconArrowDown/>
            </a>
        </div>
    </section>
</template>

<style scoped>
    section {
        height: 100vh;
    }

	main {
		max-width: 920px;
		margin: 0 auto;
		padding: 10rem 0 0;
	}
	h1 {
		font-size: 4rem;
		color: #fff;
		font-family: var(--font-heading);
		font-weight: 600;
		letter-spacing: -0.03em;
		line-height: 1.1;
	}
	p {
		font-size: 1.4rem;
        color: var(--color-paragraph);
		font-family: var(--font-body);
		margin-top: 1em;
	}

	.contacts-buttons {
		margin-top: 2em;
		display: flex;
	}
	.contacts-buttons > * {
		margin-right: 10px;
	}
    .cta-container {
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        margin-bottom: 4rem;
    }
	.cta {
		display: grid;
		place-items: center;
        width: 40px;
		height: 40px;
        color: var(--white-4);
		animation: move-down 1s infinite;
	}
	.cta svg {
		width: 20px;
		height: 20px;
	}
	.cta:hover {
		color: var(--white-5)
	}
	@keyframes move-down {
		0% { transform: translateY(0); }
		50% { transform: translateY(5px); }
		100% { transform: translateY(0); }
	}
</style>
