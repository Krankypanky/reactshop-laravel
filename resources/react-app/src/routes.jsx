import React from "react";
import {Route, Switch} from "react-router-dom";
import BookListing from "./Components/BookListing/BookListing";
import Error from "./Components/Error/Error";
import BookDetail from './Components/BookDetail/BookDetail';

export default <Switch>
    <Route path="/" exact render={(props) => {
        return <BookListing {...props}/>
    }}/>}/>
    <Route path="/details/:id" exact render={(props) => {
        return <BookDetail/>
    }}/>}/>
    <Route path="*" render={(props) => <Error {...props}/>}/>
</Switch>
