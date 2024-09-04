import React from "react";
import { Customer } from "../../helpers/custom-types";
import CustomerRow from "../CustomerRow/CustomerRow";
import s from "./CustomerTable.module.css";
import { useSelector } from "react-redux";
import { selectFilter } from "../../redux/customers/slice";

type Customers = Customer[];
function CustomerTable(): React.ReactElement {
    const customers: Customers = useSelector(selectFilter);

    return (
        <ul className={s.table}>
            {customers.length > 0 ? (
                customers.map((customer, idx) => {
                    return (
                        <CustomerRow
                            person={customer}
                            includeHeader={idx === 0}
                            key={idx}
                        />
                    );
                })
            ) : (
                <li className={s.single_item}>No customers available.</li>
            )}
        </ul>
    );
}

export default CustomerTable;
