import React from 'react';
import "./Tab.css";

const Tab = ({ current, contents, onSelect }) => {
    return(
        <div className="tab">
            <ul className="tab_nav">
                { contents.map((item, index) => {
                    return (
                    <li key={item.id}>
                        <button onClick={() => onSelect(index)} className={index === current ? "active" : ""}>
                            {item.title}
                        </button>
                    </li>)
                })}
            </ul>
            <div className="tab_content">
                <h2>{contents[current].title}</h2>
                <p>{contents[current].desc}</p>
            </div>
        </div>
    )
};

export default Tab;