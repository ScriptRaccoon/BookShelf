<script>
    import BookMenu from "./BookMenu.svelte";
    export let book = {};
    export let showURL = false;
</script>

<div class="back">
    <BookMenu bind:book bind:showURL on:delete />
    <h2
        class="title"
        contenteditable="true"
        bind:textContent={book.title}
    />

    <div class="author-year">
        <p
            class="author"
            contenteditable="true"
            bind:textContent={book.author}
        />
        <p
            class="year"
            contenteditable="true"
            bind:textContent={book.year}
        />
    </div>

    <p>
        <input
            type="checkbox"
            bind:checked={book.read}
            id={`read${book.id}`}
        />
        <label for={`read${book.id}`} class:read={book.read}>
            {#if book.read}
                Read
            {:else}
                Unread
            {/if}
        </label>
    </p>

    <p
        class="notes"
        contenteditable="true"
        bind:innerHTML={book.notes}
    />
</div>

<style>
    .back {
        padding: 10px;
        overflow: auto;
        height: 100%;
    }
    .title {
        font-family: Georgia, "Times New Roman", Times, serif;
        margin: 10px 0px;
    }
    *[contenteditable="true"] {
        border-bottom: 1px solid transparent;
    }
    *[contenteditable="true"]:focus {
        outline: none;
        border-bottom: 1px dashed black;
    }

    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"] + label {
        background-color: brown;
        padding: 4px 6px;
        border-radius: 3px;
        font-size: 14px;
        color: white;
        cursor: pointer;
    }

    input[type="checkbox"] + label.read {
        background-color: teal;
    }

    .author-year {
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #555;
        gap: 10px;
        margin-bottom: 15px;
    }

    .author {
        font-weight: bold;
        font-size: 20px;
    }

    .year {
        font-size: 14px;
    }

    .notes {
        margin: 20px 0px 10px 0px;
        padding: 4px;
        border-radius: 4px;
        background-color: #d0dace;
    }
</style>
