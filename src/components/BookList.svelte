<script>
    import Book from "./Book.svelte";
    export let books = [];
</script>

<main>
    {#each books as book (book.id)}
        <Book on:delete bind:book />
    {:else}
        <span>No books yet</span>
    {/each}
</main>

<style>
    main {
        max-width: 1000px;
        margin: 10px auto;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: flex-start;
        gap: 15px;
        padding: 20px;
    }
</style>
