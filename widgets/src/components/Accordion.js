import React, { useState } from 'react'


const Accordion = ({ items }) => {
    // array destructuring
    // shortcut to get access to elements inside of an array
    // activeIndex: first element in array, some value
    // setActiveIndex: second element in array, sets some value
    // useState: when called returns an array, null === value
    const [activeIndex, setActiveIndex] = useState(null);

    const onTitleClick = (index) => {
        setActiveIndex(index);
    };

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active': '';

        return (
            <React.Fragment key={item.title}>
                <div className={`title ${active}`} onClick={() => {onTitleClick(index)}}>
                    <div>
                        <i className="dropdown icon"></i>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderedItems}
            {activeIndex}
        </div>
    )
}

export default Accordion;