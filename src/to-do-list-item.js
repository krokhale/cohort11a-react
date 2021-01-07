import React, {useState, useEffect} from 'react';

function ToDoListItem(props) {
    return (
        <li style={{fontSize: '24px'}}>{props.listItem}</li>
    );
}

export default ToDoListItem;
