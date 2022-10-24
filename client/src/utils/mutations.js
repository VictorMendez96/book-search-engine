import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
    mutation loginUser() {

    }
`;

export const ADD_USER = gql`
    mutation addUser() {
        addUser(input: $input) {
            token
            user {
            
            }
        }
        
    }
`;

export const SAVE_BOOK = gql`
    mutation saveBook() {
        saveBook(input: $input) {

        }
    }
`;

export const REMOVE_BOOK = gql`
    mutation removeBook($key: String!) {
        removeBook(key: $key) {
            
        }
    }
`;