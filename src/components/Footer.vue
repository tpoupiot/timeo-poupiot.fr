<script setup>
	import IconGithub from "@/components/icons/IconGithub.vue";
	import IconLinkedin from "@/components/icons/IconLinkedin.vue";
</script>

<template>
    <footer>
        <div class="divider"></div>
        <div>
            <div class="logo">
                <img src="../assets/svg/red_cross.svg" alt="Logo">
            </div>
            <span>Made by <strong>Timéo POUPIOT</strong>.</span>
            <br>
            <span>Colors from <strong style="color: var(--white-4)">Radix UI</strong>.</span>
        </div>
        <div>
            <h3>Coordonnées</h3>
            <ul>
                <li>Cesson-Sévigné, France</li>
                <li><a href="mailto:timeo.poupiot35700@gmail.com">tpoupiot@gmail.com</a></li>
                <li><a href="tel:+33609110041">+33 6 09 11 00 41</a></li>
                <li><a href="../assets/pdf/cv_poupiot.pdf">Curriculum</a></li>
            </ul>
        </div>
        <div>
            <h3>Navigation</h3>
            <ul>
                <li><router-link to="/">Accueil</router-link></li>
                <li><router-link to="/skills">Compétences</router-link></li>
                <li><router-link to="/formation">Formation</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </ul>
        </div>
        <div>
            <h3>Réseaux</h3>
            <ul>
                <li><a href=""><icon-github/>Github</a></li>
                <li><a href=""><icon-linkedin/>LinkedIn</a></li>
            </ul>
        </div>
    </footer>
</template>

<style scoped>
    footer {
        padding: 4rem 0;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 4rem;
        justify-content: space-between;
    }
    .divider {
        grid-column: 1 / -1;
    }
    h3 {
        font-size: 1rem;
        font-weight: 600;
        margin-bottom: 1rem;
    }
    ul {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: .5rem;
    }
    li {
        list-style: none;
        color: var(--color-paragraph);
        font-weight: 400;
        font-size: .85rem;
    }
    li a {
        color: var(--color-paragraph);
        text-decoration: none;
    }
    span {
        font-size: .85rem;
        color: var(--color-paragraph);
    }

    div:last-child a {
        display: flex;
        align-items: center;
        gap: 6px;
    }
    .logo {
        width: 35px;
        margin-bottom: 1rem;
    }
</style>