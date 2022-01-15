<script>
    export let book;
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
    function handleDelete() {
        if (
            window.confirm(
                `Do you really want to delete the book '${book.title}'? This cannot be undone!`
            )
        ) {
            dispatch("delete", book.id);
        }
    }
</script>

<menu>
    <button title="Open/Close book" on:click={() => dispatch("open")}>
        <i class="fas fa-book-open" />
    </button>
    <button
        title="Change Cover URL"
        on:click={() => dispatch("changeCoverURL")}
    >
        <i class="far fa-image" />
    </button>

    <button title="Delete book" on:click={handleDelete}>
        <i class="far fa-trash-alt" />
    </button>
</menu>

<style>
    button {
        margin: 0px 5px;
        color: white;
        text-shadow: 0px 0px 4px #000;
        transition: transform 50ms linear;
    }

    button:focus-visible,
    button:hover {
        transform: scale(1.4);
    }

    menu {
        text-align: right;
        margin-bottom: 5px;
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 10;
    }
</style>
