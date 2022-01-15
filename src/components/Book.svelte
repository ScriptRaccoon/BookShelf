<script>
    export let book = {};
    let showURL = false;
    let open = false;
    import BookCover from "./BookCover.svelte";
    import BookBack from "./BookBack.svelte";
    import CoverForm from "./CoverForm.svelte";

    let height = 0;
    function handleHeight(e) {
        height = e.detail;
    }
</script>

<div class="book" class:open style="height: {height}px">
    <BookBack bind:book bind:showURL bind:open on:delete />
    <BookCover bind:book bind:open on:height={handleHeight} />
    {#if showURL}
        <CoverForm bind:book bind:showURL />
    {/if}
</div>

<style>
    .book {
        background-color: #eee;
        border-radius: 5px;
        box-shadow: 0px 0px 7px #0009;
        position: relative;
        perspective: 1500px;
        transform-style: preserve-3d;
        width: 300px;
    }
    .book.open {
        z-index: 30;
    }
</style>
