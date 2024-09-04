import React from "react";
import { CustomerProp } from "../../helpers/custom-types";
import s from "./CustomerRow.module.css";
import { labelFormatter, phoneNumberFormatter } from "../../helpers/formatter";
import useMedia from "../../hooks/useMedia";
import clsx from "clsx";

function CustomerRow({
    person,
    includeHeader,
}: CustomerProp): React.ReactElement {
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
                    <p className={s.cell}>{labelFormatter("phone")}</p>
                    {/* <div className={s.cell}></div> */}
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

                    <p className={s.cell}>{labelFormatter("phone")}</p>
                    {/* <div className={s.cell}></div> */}
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
                <p className={clsx(s.cell, s.long)}>{person.email}</p>
                <p className={s.cell}>{phoneNumberFormatter(person.phone)}</p>
                {/* <div className={clsx(s.cell, s.controls)}>
                    <Button text="Edit" onClick={() => {}} />
                    <Button text="Delete" onClick={() => {}} />
                </div> */}
            </li>
        </>
    );
}

export default CustomerRow;
