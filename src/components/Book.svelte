<script>
    export let book = {};
    let showURL = false;
    let open = false;
    import BookCover from "./BookCover.svelte";
    import BookBack from "./BookBack.svelte";
    import CoverForm from "./CoverForm.svelte";

    let imageDimension = { width: 1, height: 1 };
    function setAspectRatio(e) {
        imageDimension = e.detail;
    }
</script>

<div
    class="book"
    class:open
    style="aspect-ratio: {imageDimension.width} / {imageDimension.height}"
>
    <BookBack bind:book bind:showURL bind:open on:delete />
    <BookCover
        bind:book
        bind:open
        on:imageDimension={setAspectRatio}
    />
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
        max-width: 80vw;
    }
    .book.open {
        z-index: 30;
    }
</style>
