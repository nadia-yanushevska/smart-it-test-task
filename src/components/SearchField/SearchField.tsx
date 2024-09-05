import s from "./SearchField.module.css";

import { useSelector, useDispatch } from "react-redux";

import { AppDispatch } from "../../redux/store";
import {
    filterCustomers,
    selectFilterValues,
} from "../../redux/customers/slice";

import { SearchProp } from "../../helpers/custom-types";
import { labelFormatter, placeholderFormatter } from "../../helpers/formatter";

function SearchField({ field }: SearchProp) {
    const dispatch = useDispatch<AppDispatch>();

    const filterValue = useSelector(selectFilterValues).find(
        (elem) => elem.field === field
    );
    const value = filterValue?.value || "";

    return (
        <label className={s.label}>
            Find customers by {labelFormatter(field)}
            <input
                type="text"
                className={s.input}
                value={value}
                placeholder={placeholderFormatter(field)}
                onChange={(e) =>
                    dispatch(filterCustomers({ value: e.target.value, field }))
                }
            />
        </label>
    );
}

export default SearchField;
