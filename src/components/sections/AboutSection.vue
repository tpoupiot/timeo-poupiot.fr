<script setup>

</script>

<template>
    <section class="about-section">
        <main>
            <h2>À propos de moi</h2>
            <p>
                Bonjour ! En tant qu’Étudiant en BUT Informatique, je suis <strong>passionné</strong> par le développement web.
                J'ai pour ambition de devenir <strong>développeur web</strong> fullstack afin de concevoir les site webs de demain !
            </p>
            <br>
            <p>
                Je suis actuellement alternant dans chez NetCURD,
                une entreprise de développement web pour acquérir de l’expérience et
                compléter mon panel de connaissance de développeur web.
            </p>
        </main>
        <img src="../../assets/img/photo_id.jpg" alt="Photo d'identité de Timéo Poupiot">
    </section>
</template>

<style scoped>
    section {
        height: 100vh;
    }
    img {
        width: 300px;
        height: 300px;
        display: block;
        max-width: 100%;
    }
    p {
        color: var(--color-paragraph);
        font-family: var(--font-body);
        margin-top: 1em;
    }
</style>