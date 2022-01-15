<script>
    export let book = {};
    export let open = false;
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let imageElement = null;
    let error = false;
    let src = "";
    $: {
        if (book.coverURL) error = false;
    }
    $: {
        src = error ? "./assets/img/no-image.png" : book.coverURL;
    }
</script>

<div class="cover" class:open>
    <img
        {src}
        alt="cover"
        title={open ? "Close book" : "Open book"}
        on:error={() => {
            error = true;
        }}
        bind:this={imageElement}
        on:load={() => dispatch("height", imageElement.height)}
        on:click={() => (open = !open)}
    />
</div>

<style>
    img {
        width: 100%;
        cursor: pointer;
        display: block;
    }
    .cover {
        transition: all 500ms ease-out;
        transform-origin: left;
        position: absolute;
        inset: 0;
        box-shadow: 0px 0px 7px #0009;
        border-radius: 5px;
        overflow: hidden;
        background-color: #eee;
    }

    .cover.open {
        transform: rotateY(-120deg);
        box-shadow: 0px 0px 5px #000;
        z-index: 1000;
    }
</style>
