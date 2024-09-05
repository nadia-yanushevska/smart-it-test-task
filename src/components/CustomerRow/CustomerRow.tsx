import React from "react";
import clsx from "clsx";

import s from "./CustomerRow.module.css";
import useMedia from "../../hooks/useMedia";

import { getClassListByCondition } from "../../helpers/classHelper";
import { CustomerRowProp } from "../../helpers/custom-types";
import { labelFormatter, phoneNumberFormatter } from "../../helpers/formatter";

function CustomerRow({
    person,
    includeHeader,
}: CustomerRowProp): React.ReactElement {
    const { isMobile } = useMedia();

    return (
        <>
            {includeHeader && !isMobile ? (
                <li className={s.header_row}>
                    <p className={s.cell}>{labelFormatter("id")}</p>
                    <div className={clsx(s.cell_wrapper, s.cell)}>
                        <p className={s.inner_cell}>
                            {labelFormatter("username")}
                        </p>
                        <p className={s.inner_cell}>
                            {labelFormatter("website")}
                        </p>
                    </div>
                    <p className={s.cell}>{labelFormatter("name")}</p>
                    <p className={clsx(s.cell, s.long)}>
                        {labelFormatter("email")}
                    </p>
                    <p className={clsx(s.cell, s.small_cell)}>
                        {labelFormatter("phone")}
                    </p>
                </li>
            ) : (
                ""
            )}
            {isMobile ? (
                <li className={s.header_row}>
                    <p className={s.cell}>{labelFormatter("id")}</p>

                    <div className={clsx(s.cell_wrapper, s.cell)}>
                        <p className={s.inner_cell}>
                            {labelFormatter("username")}
                        </p>
                        <p className={s.inner_cell}>
                            {labelFormatter("website")}
                        </p>
                    </div>
                    <p className={s.cell}>{labelFormatter("name")}</p>
                    <p className={clsx(s.cell, s.long)}>
                        {labelFormatter("email")}
                    </p>

                    <p className={clsx(s.cell, s.small_cell)}>
                        {labelFormatter("phone")}
                    </p>
                </li>
            ) : (
                ""
            )}
            <li className={s.row}>
                <p className={s.cell}>{person.id}</p>
                <div className={clsx(s.cell_wrapper, s.cell)}>
                    <p className={s.inner_cell}>{person.username}</p>
                    <p className={s.inner_cell}>{person.website}</p>
                </div>
                <p className={s.cell}>{person.name}</p>
                <p
                    className={getClassListByCondition(
                        [s.cell, s.long],
                        s.cell_narrow,
                        isMobile && person.email.length >= 20,
                        s.cell_narrower,
                        isMobile && person.email.length >= 23
                    )}
                >
                    {person.email}
                </p>
                <p className={clsx(s.cell, s.small_cell)}>
                    {phoneNumberFormatter(person.phone)}
                </p>
            </li>
        </>
    );
}

export default CustomerRow;
