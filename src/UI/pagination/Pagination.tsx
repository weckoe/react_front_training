import React, {FC, useMemo} from 'react';
import {PaginationProps} from "../../types/PaginationTypes";
import {getPagesArray} from "../../utils/pagesCounter";
import classes from "../../styles/TicketItem.module.css";

const Pagination: FC<PaginationProps> = ({totalPages, page, changePage}): JSX.Element => {
    let pagesArray: number[] = useMemo(() => getPagesArray(totalPages), [totalPages]);
    return (
        <div className="page__wrapper">
            {pagesArray.map(p => {
                    return <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={page === p ? classes.page__current : classes.page}
                    >
                        {p}
                    </span>;
                }
            )}
        </div>
    );
};

export default Pagination;