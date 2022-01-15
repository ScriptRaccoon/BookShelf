<script>
    export let book = {};
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    let imageElement = null;
    let error = false;
    let src = "";
    $: {
        if (book.coverURL) {
            error = false;
        }
    }
    $: {
        src = error ? "./assets/img/no-image.png" : book.coverURL;
    }
</script>

<div class="cover" class:open={book.open}>
    <img
        {src}
        alt="cover"
        title={book.open ? "Close book" : "Open book"}
        on:error={() => {
            error = true;
        }}
        bind:this={imageElement}
        on:load={() =>
            dispatch("imageDimension", {
                width: imageElement.width,
                height: imageElement.height,
            })}
        on:click={() => (book.open = !book.open)}
    />
</div>

<style>
    img {
        width: 100%;
        cursor: pointer;
        display: block;
    }
    .cover {
        position: absolute;
        inset: 0;
        box-shadow: 0px 0px 7px #0009;
        border-radius: 5px;
        overflow: hidden;
        background-color: #eee;
        z-index: 20;
        --rotation: 0deg;
        transform: rotateY(var(--rotation));
        transition: all 400ms ease-out;
        transform-origin: left;
    }

    .cover:hover {
        --rotation: -10deg;
    }

    .cover.open {
        --rotation: -120deg;
        box-shadow: 0px 0px 5px #000;
        filter: brightness(0.6);
    }
</style>
