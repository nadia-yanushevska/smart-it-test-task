import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCustomers } from "./operations";
import { InitialState, FilterPayload } from "../../helpers/custom-types";

const initialState: InitialState = {
    customers: [],
    filter: [],
    filterValues: [],
    loading: false,
    error: "",
};

export const slice = createSlice({
    name: "customers",
    initialState,
    selectors: {
        selectCustomers: (state) => state.customers,
        selectFilter: (state) => state.filter,
        selectFilterValues: (state) => state.filterValues,
        selectLoading: (state) => state.loading,
        selectError: (state) => state.error,
    },
    reducers: {
        filterCustomers(state, { payload }: PayloadAction<FilterPayload>) {
            if (payload.value === "")
                state.filterValues = state.filterValues.filter(
                    ({ field }) => field !== payload.field
                );
            else {
                const idx = state.filterValues.findIndex(
                    (elem) => elem.field === payload.field
                );
                if (idx === -1) state.filterValues.push(payload);
                else state.filterValues[idx] = payload;
            }

            state.filter = state.customers.filter((cust) => {
                return state.filterValues.every(({ value, field }) =>
                    cust[field]
                        .toLocaleLowerCase()
                        .includes(value.toLocaleLowerCase())
                );
            });
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchCustomers.fulfilled, (state, { payload }) => {
                state.customers = payload;
                // state.filter = state.customers;
                state.error = "";
                state.loading = false;
            })
            .addCase(fetchCustomers.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchCustomers.rejected, (state, action) => {
                state.loading = false;
                state.error = String(action.payload);
            });
    },
});

export const customersReducer = slice.reducer;
export const { filterCustomers } = slice.actions;
export const {
    selectCustomers,
    selectFilter,
    selectFilterValues,
    selectLoading,
    selectError,
} = slice.selectors;
