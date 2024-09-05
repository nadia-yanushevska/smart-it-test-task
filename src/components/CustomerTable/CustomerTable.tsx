import React from "react";
import { Customer, FilterValue } from "../../helpers/custom-types";
import CustomerRow from "../CustomerRow/CustomerRow";
import s from "./CustomerTable.module.css";
import { useSelector } from "react-redux";
import {
    selectCustomers,
    selectError,
    selectFilter,
    selectFilterValues,
    selectLoading,
} from "../../redux/customers/slice";
import Loader from "../Loader/Loader";

type Customers = Customer[];
function CustomerTable(): React.ReactElement {
    let customers: Customers = useSelector(selectCustomers);
    const filteredCustomers: Customers = useSelector(selectFilter);
    const filterValues: FilterValue[] = useSelector(selectFilterValues);
    const loading: boolean = useSelector(selectLoading);
    const error: string = useSelector(selectError);

    if (filteredCustomers.length !== 0 || filterValues.length !== 0) {
        customers = filteredCustomers;
    }

    const message: string = error
        ? "Oops, something went wrong..."
        : "No customers available yet.";

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
            ) : loading ? (
                <Loader />
            ) : (
                <li className={s.single_item}>{message}</li>
            )}
        </ul>
    );
}

export default CustomerTable;
