<script>
    export let book = {};
    export let showURL = true;
    function handleSubmit(e) {
        e.preventDefault();
        showURL = false;
    }
</script>

<form on:submit={handleSubmit}>
    <input type="text" bind:value={book.coverURL} />
</form>

<style>
    form {
        position: absolute;
        inset: 0;
        background: #000c;
        padding: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    input {
        width: 100%;
        background: white;
        padding: 5px;
    }
</style>
