<script>
    import { scrollToTop } from "../utils.js";
</script>

<footer>
    <p>
        BookShelf
        <button on:click={scrollToTop}
            ><i class="fas fa-arrow-up" /></button
        >
    </p>
</footer>

<style>
    footer {
        text-align: center;
        padding: 15px 0px;
        background-color: brown;
        color: white;
        box-shadow: 0px 0px 10px #0008;
    }
    p {
        font-family: "Times New Roman", Times, serif;
        font-weight: 300;
    }
    button {
        margin: 0px 5px;
    }
</style>
