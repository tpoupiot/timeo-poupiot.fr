<script setup>
    import Button from "@/components/buttons/Button.vue";

    const props = defineProps({
        title: String,
        language: String,
        number: Number,
        link: String
    })

</script>

<template>
    <div class="container">
        <div class="title-line">
            <h1>{{ title }}</h1>
            <h2>description:</h2>
            <h2>langage(s):</h2>
        </div>
        <div class="divider"></div>
        <div class="content-line">
            <span>{{ number }}</span>
            <p><slot></slot></p>
            <p>{{ language }}</p>
        </div>
        <div>
            <Button label="Découvrir" type="router" size="medium" icon="arrowR" :link="link" />
        </div>
    </div>
</template>

<style scoped>
    .container {
        display: grid;
        margin: 6rem 0;
    }
    .container .title-line {
        display: grid;
        grid-template-columns: 1.5fr 1fr .5fr;
        align-items: center;
        margin-bottom: .5rem;
    }
    .container .title-line :last-child {
        text-align: right;
    }
    .container .content-line {
        margin-top: 1.5rem;
        display: grid;
        grid-template-columns: 1.5fr 1fr .5fr;
      }
    .container .content-line :last-child {
        text-align: right;
    }
    .container .title-line h1 {
        font-family: var(--font-body);
        font-size: 2rem;
        font-weight: 600;
        letter-spacing: -0.02em;
    }
    .container .title-line h2 {
        font-family: var(--font-button);
        color: var(--white-2);
        font-size: 1.1rem;
        font-weight: 500;
    }
    .container .content-line span {
        font-size: 8rem;
        font-weight: 700;
        color: var(--white-2);
        line-height: 80%;
    }
    .container .content-line p {
        font-size: 1rem;
        font-family: var(--font-body);
    }
    div:last-child {
        margin-top: 3rem;
    }
</style>