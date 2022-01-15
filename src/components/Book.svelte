<script>
    export let book;
    import BookCover from "./BookCover.svelte";
    import BookBack from "./BookBack.svelte";
    import BookMenu from "./BookMenu.svelte";
    export let height = 0;
    function handleHeight(e) {
        height = e.detail;
    }
    let showURL = false;
    function changeCoverURL() {
        showURL = !showURL;
    }
    function handleSubmit(e) {
        e.preventDefault();
        showURL = false;
    }
    let open = false;
</script>

<div class="book" style="height: {height}px">
    <BookMenu
        bind:book
        on:delete
        on:changeCoverURL={changeCoverURL}
        on:open={() => (open = !open)}
    />
    <BookBack bind:book />
    <BookCover bind:open bind:book on:height={handleHeight} />
    {#if showURL}
        <form on:submit={handleSubmit}>
            <input type="text" bind:value={book.coverURL} />
        </form>
    {/if}
</div>

<style>
    .book {
        background-color: #eee;
        border-radius: 5px;
        box-shadow: 0px 0px 7px #0009;
        position: relative;
        perspective: 1000px;
        transform-style: preserve-3d;
    }
    form {
        position: absolute;
        inset: 0;
        background: #000c;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 20px;
    }
    input {
        width: 100%;
        background: white;
        padding: 5px;
    }
</style>
