import { useDispatch } from "react-redux";
import { useEffect } from "react";

import "./App.css";

import { AppDispatch } from "./redux/store";
import { fetchCustomers } from "./redux/customers/operations";

import CustomerTable from "./components/CustomerTable/CustomerTable";
import SearchField from "./components/SearchField/SearchField";

function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(fetchCustomers());
    }, [dispatch]);

    return (
        <>
            <h1>Our Customers</h1>
            <div className="search-fields-wrapper">
                <SearchField field="username" />
                <SearchField field="name" />
                <SearchField field="email" />
                <SearchField field="phone" />
            </div>
            <CustomerTable />
        </>
    );
}

export default App;
