import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../Loading/Loading";
import axios from "axios";
import config from "./../../config/config.default";

import "./BookDetail.scss";

const BookDetail = () => {
    const params = useParams();
    const history = useHistory();

    const [book, setBook] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(config.API_URL + "/api/book/" + params.id)
            .then((response) => {
                const book = response.data;
                setBook(book);
            })
            .catch((e) => console.error(e))
            .finally(() => setLoading(false));
    }, [params.id]);

    if (loading) {
        return (
            <Loading
                loading={loading}
                alternativeText={"Das ausgewählte Buch lädt gerade"}
            />
        );
    }

    return (
        <div className="book-detail">
            <div className='book-detail-header'>
                <button onClick={() => history.goBack()}>Back</button>
                <h1>{book.title}</h1>
            </div>
            <p>{book.description}</p>
        </div>
    );
};

BookDetail.propTypes = {
    books: PropTypes.array,
    addItemToCart: PropTypes.func,
    isDrawerOpened: PropTypes.bool,
    toggleDrawer: PropTypes.func,
};

export default BookDetail;
