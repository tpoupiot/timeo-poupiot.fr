<script setup>
    import MenuLinks from './buttons/MenuLinks.vue';
    import Button from './buttons/Button.vue';
</script>

<template>
    <header>
		<div class="header-left">
			<a class="logo" href="">
				<img src="../assets/svg/red_cross.svg" alt="Logo" />
			</a>	
			<nav>
				<MenuLinks label="Accueil" link="/" />
				<MenuLinks label="Compétences" link="/skills" />
				<MenuLinks label="Formation" link="/formation" />
				<MenuLinks label="Contact" link="/contact" />
			</nav>
		</div>
		<Button label="Curriculum" link="../assets/pdf/cv_poupiot.pdf" download/>
	</header>
</template>

<style scoped>
	header {
		padding: 1.25rem 6rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        max-width:100%;
	}
	.header-left {
		display: flex;
		align-items: center;
	}
    .logo {
        width: 35px;
        margin-right: 1rem;
    }
    .logo > img {
        max-width: 100%;
        display: block;
    }
</style>
