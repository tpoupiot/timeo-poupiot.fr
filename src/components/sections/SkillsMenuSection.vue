<script setup>

</script>

<template>
    <nav>
        <ul>
            <li><a href="">01</a></li>
            —
            <li><a href="">02</a></li>
            —
            <li><a href="">03</a></li>
            —
            <li><a href="">04</a></li>
            —
            <li><a href="">05</a></li>
            —
            <li><a href="">06</a></li>
        </ul>
    </nav>
</template>

<style scoped>
    nav {

    }
    ul {
        color: var(--color-paragraph);
        display: flex;
        justify-content: center;
        gap: .5rem;
        list-style: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 1rem;
    }
    a {
        color: var(--color-paragraph);
    }
</style>