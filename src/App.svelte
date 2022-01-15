<script>
    import Header from "./components/Header.svelte";
    import Footer from "./components/Footer.svelte";
    import BookList from "./components/BookList.svelte";
    import { debounce, scrollToTop } from "./utils.js";

    let books = JSON.parse(localStorage.getItem("books")) || [];

    $: {
        if (books) saveBooks();
    }

    const saveBooks = debounce(() => {
        localStorage.setItem("books", JSON.stringify(books));
    }, 250);

    function handleDelete(e) {
        const id = e.detail;
        books = books.filter((book) => book.id != id);
    }

    function generateId() {
        let id = 1;
        for (const book of books) {
            id = Math.max(id, book.id + 1);
        }
        return id;
    }

    function deleteAll() {
        if (
            window.confirm(
                "This will delete all your books from this app. " +
                    "This cannot be undone! Are you sure?"
            )
        ) {
            books = [];
        }
    }

    function addBook() {
        const book = {
            id: generateId(),
            author: "Author...",
            title: "Title...",
            year: "Year...",
            notes: "Notes...",
            read: false,
            coverURL: "",
            open: true,
        };
        books = [book, ...books];
        scrollToTop();
    }
</script>

<Header on:addBook={addBook} on:deleteAll={deleteAll} />

<BookList on:delete={handleDelete} bind:books />

<Footer />
