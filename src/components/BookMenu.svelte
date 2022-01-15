<script>
    export let book;
    export let showURL;
    export let open;
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
    <button title="Close book" on:click={() => (open = false)}>
        <i class="fas fa-book" />
    </button>
    <button
        title="Change Cover URL"
        on:click={() => (showURL = !showURL)}
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
        color: #888;
        transition: color 50ms linear;
    }

    button:focus-visible,
    button:hover {
        color: #222;
    }

    menu {
        text-align: right;
    }
</style>
