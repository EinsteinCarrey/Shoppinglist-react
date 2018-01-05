import React, {PropTypes} from 'react';
import {Link} from "react-router";

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
    lists: PropTypes.array.isRequired,
    currentShoppingList: PropTypes.string.isRequired
};

export default ShoppingListsOrderedList;