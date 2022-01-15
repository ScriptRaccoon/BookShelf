<script>
    export let book;
    import BookCover from "./BookCover.svelte";
    import BookBack from "./BookBack.svelte";
    import BookMenu from "./BookMenu.svelte";
    import CoverForm from "./CoverForm.svelte";
    export let height = 0;
    function handleHeight(e) {
        height = e.detail;
    }
    let showURL = false;
    function changeCoverURL() {
        showURL = !showURL;
    }

    let open = false;
</script>

<div class="book" class:open style="height: {height}px">
    <BookMenu
        bind:book
        on:delete
        on:changeCoverURL={changeCoverURL}
        on:open={() => (open = !open)}
    />
    <BookBack bind:book />
    <BookCover bind:open bind:book on:height={handleHeight} />
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
    }
    .book.open {
        z-index: 30;
    }
</style>
