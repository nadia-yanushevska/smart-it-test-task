import React from "react";
import { CustomerProp } from "../../helpers/custom-types";
import s from "./CustomerRow.module.css";
import {
    birthdayFormatter,
    labelFormatter,
    phoneNumberFormatter,
} from "../../helpers/formatter";
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
                    <p className={s.cell}>{labelFormatter("avatar")}</p>
                    <div className={clsx(clsx(s.cell_wrapper, s.cell), s.cell)}>
                        <p className={s.cell_inner}>
                            {labelFormatter("username")}
                        </p>
                        <p className={s.cell_inner}>
                            {labelFormatter("full_name")}
                        </p>
                    </div>
                    <p className={s.cell}>{labelFormatter("user_email")}</p>
                    <div className={clsx(s.cell_wrapper, s.cell)}>
                        <p className={s.cell_inner}>
                            {labelFormatter("date_of_birth")}
                        </p>
                        <p className={s.cell_inner}>
                            {labelFormatter("phone_number")}
                        </p>
                    </div>
                    {/* <div className={s.cell}></div> */}
                </li>
            ) : (
                ""
            )}
            {isMobile ? (
                <li className={s.header_row}>
                    <p className={s.cell}>{labelFormatter("id")}</p>
                    <p className={s.cell}>{labelFormatter("avatar")}</p>
                    <div className={clsx(s.cell_wrapper, s.cell)}>
                        <p className={s.cell_inner}>
                            {labelFormatter("username")}
                        </p>
                        <p className={s.cell_inner}>
                            {labelFormatter("full_name")}
                        </p>
                    </div>
                    <p className={s.cell}>{labelFormatter("user_email")}</p>

                    <div className={clsx(s.cell_wrapper, s.cell)}>
                        <p className={s.cell_inner}>
                            {labelFormatter("date_of_birth")}
                        </p>
                        <p className={s.cell_inner}>
                            {labelFormatter("phone_number")}
                        </p>
                    </div>
                    {/* <div className={s.cell}></div> */}
                </li>
            ) : (
                ""
            )}
            <li className={s.row}>
                <p className={s.cell}>{person.id}</p>
                <div className={s.cell}>
                    <img
                        className={s.img}
                        src={person.avatar_url}
                        alt="Avatar"
                        width={50}
                        height={50}
                    />
                </div>
                <div className={clsx(s.cell_wrapper, s.cell)}>
                    <p className={s.cell_inner}>{person.username}</p>
                    <p className={s.cell_inner}>{person.full_name}</p>
                </div>
                <p className={s.cell}>{person.user_email}</p>
                <div className={clsx(s.cell_wrapper, s.cell)}>
                    <p className={s.cell_inner}>
                        {birthdayFormatter(person.date_of_birth)}
                    </p>
                    <p className={s.cell_inner}>
                        {phoneNumberFormatter(person.phone_number)}
                    </p>
                </div>
                {/* <div className={clsx(s.cell, s.controls)}>
                    <Button text="Edit" onClick={() => {}} />
                    <Button text="Delete" onClick={() => {}} />
                </div> */}
            </li>
        </>
    );
}

export default CustomerRow;
