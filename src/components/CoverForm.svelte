<script>
    export let book = {};
    export let showURL = true;
    function handleSubmit(e) {
        e.preventDefault();
        showURL = false;
    }
</script>

<form on:submit={handleSubmit}>
    <label for="coverInput">Paste Cover URL</label>
    <input id="coverInput" type="text" bind:value={book.coverURL} />
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
        flex-direction: column;
    }
    input {
        width: 100%;
        background: white;
        padding: 5px;
    }
    label {
        color: white;
        font-weight: bold;
        margin-bottom: 10px;
        text-shadow: 0px 0px 4px #000;
    }
</style>
