import React from 'react';
import "./Form.css";

const Form = ({ mode, inputTitle, inputDesc, input, onChange, onChangeTitle, onChangeDesc, onSubmit, onMode }) => {
    return(
        <div className={`form ${mode}`}>
            <h2>{mode}</h2>
            <form onSubmit={onSubmit}>
                <input type="text" name="title" value={inputTitle} onChange={onChangeTitle} placeholder="Title" />
                <textarea placeholder="Description" name="desc" value={inputDesc} onChange={onChangeDesc}>
                </textarea>
                <div className="group">
                    <button type="submit">{mode === "create" ? "등록" : "수정"}</button>
                    <button onClick={() => onMode("read")}>취소</button>
                </div>
            </form>
        </div>
    )
};

export default Form;