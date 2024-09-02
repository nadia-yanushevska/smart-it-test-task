import React from "react";
import { CustomerProp } from "../../helpers/custom-types";
import s from "./CustomerRow.module.css";
import {
    birthdayFormatter,
    labelFormatter,
    phoneNumberFormatter,
} from "../../helpers/formatter";
import useMedia from "../../hooks/useMedia";

function CustomerRow({
    person,
    includeHeader,
}: CustomerProp): React.ReactElement {
    const { isMobile } = useMedia();
    return (
        <>
            {includeHeader && !isMobile ? (
                <li className={s.row}>
                    <p className={s.cell}>{labelFormatter("id")}</p>
                    <p className={s.cell}>{labelFormatter("avatar")}</p>
                    <p className={s.cell}>{labelFormatter("username")}</p>
                    <p className={s.cell}>{labelFormatter("full_name")}</p>
                    <p className={s.cell}>{labelFormatter("date_of_birth")}</p>
                    <p className={s.cell}>{labelFormatter("user_email")}</p>
                    <p className={s.cell}>{labelFormatter("phone_number")}</p>
                </li>
            ) : (
                ""
            )}
            {isMobile ? (
                <li className={s.row}>
                    <p className={s.cell}>{labelFormatter("id")}</p>
                    <p className={s.cell}>{labelFormatter("avatar")}</p>
                    <p className={s.cell}>{labelFormatter("username")}</p>
                    <p className={s.cell}>{labelFormatter("full_name")}</p>
                    <p className={s.cell}>{labelFormatter("date_of_birth")}</p>
                    <p className={s.cell}>{labelFormatter("user_email")}</p>
                    <p className={s.cell}>{labelFormatter("phone_number")}</p>
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
                <p className={s.cell}>{person.username}</p>
                <p className={s.cell}>{person.full_name}</p>
                <p className={s.cell}>
                    {birthdayFormatter(person.date_of_birth)}
                </p>
                <p className={s.cell}>{person.user_email}</p>
                <p className={s.cell}>
                    {phoneNumberFormatter(person.phone_number)}
                </p>
            </li>
        </>
    );
}

export default CustomerRow;
