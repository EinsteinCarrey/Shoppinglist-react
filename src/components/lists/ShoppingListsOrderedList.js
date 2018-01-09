import React from 'react';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";

const ShoppingListsOrderedList = ({lists, currentShoppingList}) => {
    return (
        <ul>
            {lists.map((list) =>
                <li id={list.id} key={list.id} className={list.id == currentShoppingList && 'activeList'}>
                    <Link to={"/lists/"+list.id}>{list.title}</Link>
                </li>
            )}
        </ul>
    );
};



ShoppingListsOrderedList.propTypes = {
    lists: PropTypes.array,
    currentShoppingList: PropTypes.string
};

export default ShoppingListsOrderedList;