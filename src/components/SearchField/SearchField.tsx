import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import {
    filterCustomers,
    selectFilterValues,
} from "../../redux/customers/slice";
import s from "./SearchField.module.css";
import { SearchProp } from "../../helpers/custom-types";
import { labelFormatter, placeholderFormatter } from "../../helpers/formatter";
import { useSelector } from "react-redux";

function SearchField({ field }: SearchProp) {
    //TODO add value = filterValue; persistor?; label design and card labels in mobile change align, either add buttons and functionality (at least delete) or remove extra div-s, change api!!!
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
