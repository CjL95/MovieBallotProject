import React, { useState } from 'react';

export const NomineeCard = ({ nominee, img, id }) => {
    const [selected, setSelected] = useState(false);
    const handleSelect = ()=>{
        setSelected(!selected);
    }
    return(
        <article className={`col-12 col-md-6 col-lg-4 d-flex flex-column justify-content-between align-items-center`}>
            <figure className={`d-flex flex-column justify-content-around align-items-center nomCard selected${selected}`}>
                <figcaption>
                    <h3>{nominee}</h3>
                </figcaption>
                <img src={img} alt={nominee} />
                <button className="btn btn-primary" data-id={id} onClick={handleSelect}>Select</button>
            </figure>
        </article>
    )
};