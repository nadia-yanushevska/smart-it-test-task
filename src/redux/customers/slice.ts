import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchCustomers } from "./operations";
import { InitialState, FilterPayload } from "../../helpers/custom-types";

const initialState: InitialState = {
    customers: [],
    filter: [],
    filterValues: [],
};

export const slice = createSlice({
    name: "customers",
    initialState,
    selectors: {
        selectCustomers: (state) => state.customers,
        selectFilter: (state) => state.filter,
    },
    reducers: {
        filterCustomers(state, { payload }: PayloadAction<FilterPayload>) {
            if (payload.value === "")
                state.filterValues = state.filterValues.filter(
                    ({ field }) => field !== payload.field
                );
            else state.filterValues.push(payload);

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
        builder.addCase(fetchCustomers.fulfilled, (state, { payload }) => {
            state.customers = payload;
            state.filter = state.customers;
        });
    },
});

export const customersReducer = slice.reducer;
export const { filterCustomers } = slice.actions;
export const { selectCustomers, selectFilter } = slice.selectors;
