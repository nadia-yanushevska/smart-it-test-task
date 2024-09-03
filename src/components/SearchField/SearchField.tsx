import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";
import { filterCustomers } from "../../redux/customers/slice";
import s from "./SearchField.module.css";
import { SearchProp } from "../../helpers/custom-types";
import { labelFormatter, placeholderFormatter } from "../../helpers/formatter";

function SearchField({ field }: SearchProp) {
    const dispatch = useDispatch<AppDispatch>();
    return (
        <label className={s.label}>
            Find customers by {labelFormatter(field)}
            <input
                type="text"
                className={s.input}
                placeholder={placeholderFormatter(field)}
                onChange={(e) =>
                    dispatch(filterCustomers({ value: e.target.value, field }))
                }
            />
        </label>
    );
}

export default SearchField;
