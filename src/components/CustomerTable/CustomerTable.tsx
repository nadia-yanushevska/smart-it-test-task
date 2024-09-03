import React from "react";
import customers_data from "../../../public/customers.json";
import { Customer } from "../../helpers/custom-types";
import CustomerRow from "../CustomerRow/CustomerRow";
import s from "./CustomerTable.module.css";

type Customers = Customer[];
function CustomerTable(): React.ReactElement {
    const customers: Customers = customers_data;
    console.log(customers);
    return (
        <ul className={s.table}>
            {customers.length > 0 ? (
                customers.map((customer, idx) => {
                    return (
                        <CustomerRow
                            person={customer}
                            includeHeader={idx === 0}
                        />
                    );
                })
            ) : (
                <li className={s.single_item}>No customers available yet.</li>
            )}
        </ul>
    );
}

export default CustomerTable;
