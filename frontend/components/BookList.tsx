import { gql, useQuery } from "@apollo/client";

const GET_BOOKS = gql`
    query {
        books {
            author
            title
        }
    }
`;

function FetchBooks() {
    const { data, loading, error } = useQuery( GET_BOOKS);

    if (loading) return (<p>Loading...</p>);
    if (error) {
        console.log(error);
        return (<p>Error</p>);
    }

    console.log(data);
    return (
        <div>
            {
                data.books.map ( book => (<p>{book.author}: {book.title}</p>))
            }
        </div>
    )
}

export function BookList() {
    return (
        <>
        <div>
            <p>BookList</p>
            <FetchBooks />
        </div>
        </>
    );
}
