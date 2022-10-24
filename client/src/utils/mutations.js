import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser($input: LoginInput) {
        loginUser(input: $input){
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation addUser($input: SignupInput) {
        addUser(input: $input) {
            token
            user {
                _id
                username
                email
                bookCount
                savedBooks
            }
        }
        
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook($input: SavedBook) {
        saveBook(input: $input) {
            token
            savedBooks {
                author
                description
                title
                bookId
                image
                link
                key
            }

        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($key: String!) {
        removeBook(key: $key) {
            token
            savedBooks {
                author
                description
                title
                bookId
                image
                link
                key
            }
        }
    }
`;