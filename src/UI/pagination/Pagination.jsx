import React, {useMemo} from 'react';
import {getPagesArray} from "../../utils/pagesCounter";
import classes from "../../styles/TicketItem.module.css";

const Pagination = ({totalPages, page, changePage}) => {
    let pagesArray = useMemo(() => getPagesArray(totalPages), [totalPages]);
    return (
        <div className="page__wrapper">
            {pagesArray.map(p =>
                <span
                    onClick={() => changePage(p)}
                    key={p}
                    className={page === p ? classes.page__current : classes.page}
                >
                    {p}
                </span>
            )}
        </div>
    );
};

export default Pagination;