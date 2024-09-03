import { createAsyncThunk } from "@reduxjs/toolkit";
import { get_customers } from "../../assets/api";

export const fetchCustomers = createAsyncThunk(
    "customers/fetchAll",
    async (_, thunkApi) => {
        try {
            const res = await get_customers();
            return res.data;
        } catch (e: unknown) {
            let message: string = "Unknown Error";
            if (typeof e === "string") {
                message = e;
            } else if (e instanceof Error) {
                message = e.message;
            }
            return thunkApi.rejectWithValue(message);
        }
    }
);
