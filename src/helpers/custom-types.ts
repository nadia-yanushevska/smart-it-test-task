// Prop types
export type CustomerRowProp = {
    person: Customer;
    includeHeader: boolean;
};

export type SearchProp = {
    field: fieldNames;
};

// Customer-related types
export type Customer = {
    name: string;
    avatar_url: string;
    username: string;
    email: string;
    phone: string;
    id: string;
    website: string;
};

export type fieldNames =
    | "name"
    | "website"
    | "username"
    | "email"
    | "phone"
    | "id";

// Redux types
export type FilterValue = {
    value: string;
    field: fieldNames;
};

export type InitialState = {
    customers: Customer[];
    filter: Customer[];
    filterValues: FilterValue[];
    loading: boolean;
    error: string;
};
