<script>
    import Menu from "./Menu.svelte";
</script>

<header>
    <h1>BookShelf</h1>
    <Menu on:addBook on:deleteAll />
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
        text-shadow: 1px 1px 5px #000a;
    }
</style>
