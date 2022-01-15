<script>
    import { createEventDispatcher } from "svelte";
    const dispatch = createEventDispatcher();
</script>

<header>
    <h1>BookShelf</h1>
    <button title="Add book" on:click={() => dispatch("addBook")}
        >+</button
    >
</header>

<style>
    header {
        text-align: center;
        padding: 20px 0px;
        background-color: brown;
        color: white;
        position: sticky;
        top: 0;
        z-index: 50;
        box-shadow: 0px 0px 10px #0008;
    }
    h1 {
        font-size: 36px;
        font-family: "Times New Roman", Times, serif;
        font-weight: 300;
    }
    button {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        font-weight: bold;
        font-size: 30px;
        transition: transform 50ms linear;
    }
    button:focus-visible,
    button:hover {
        transform: translateY(-50%) scale(1.4);
    }
</style>
