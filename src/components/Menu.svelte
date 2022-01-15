<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<menu>
    <button
        title="Delete all books"
        on:click={() => dispatch("deleteAll")}
    >
        <i class="far fa-trash-alt" />
    </button>
    <button title="Add book" on:click={() => dispatch("addBook")}>
        <i class="fas fa-plus" />
    </button>
</menu>

<style>
    button {
        font-size: 26px;
        transition: transform 50ms linear;
        margin: 0px 10px;
        text-shadow: 0px 0px 5px #000a;
    }
    button:focus-visible,
    button:hover {
        text-shadow: 0px 0px 5px #fff5;
    }
    menu {
        margin-top: 10px;
    }
    @media (min-width: 480px) {
        menu {
            margin-top: 0px;
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            right: 10px;
        }
    }
</style>
