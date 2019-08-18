import React from 'react';
import "./Controls.css";

const Controls = ({ onDelete, onMode }) => {
    return (
        <>
            <div className="controls">
                <button onClick={() => onMode("create")}>추가</button>
                <button onClick={() => onMode("update")}>수정</button>
                <button onClick={onDelete}>삭제</button>
            </div>
        </>
    )
};


export default Controls;