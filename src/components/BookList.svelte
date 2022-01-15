<script>
    import Book from "./Book.svelte";
    export let books = [];
</script>

<main>
    {#each books as book}
        <Book on:delete bind:book />
    {:else}
        <span>No books yet</span>
    {/each}
</main>

<style>
    main {
        --columns: 3;
        max-width: 900px;
        margin: 10px auto;
        display: grid;
        grid-template-columns: repeat(var(--columns), 1fr);
        gap: 15px;
        padding: 20px;
    }
    @media (max-width: 900px) {
        main {
            --columns: 2;
        }
    }
    @media (max-width: 500px) {
        main {
            --columns: 1;
        }
    }
</style>
