export type Customer = {
    date_of_birth: string;
    full_name: string;
    avatar_url: string;
    username: string;
    user_email: string;
    phone_number: string;
    id: string;
};

export type CustomerProp = {
    person: Customer;
    includeHeader: boolean;
};

export type SearchProp = {
    field: fieldNames;
};

export type fieldNames =
    | "date_of_birth"
    | "full_name"
    | "avatar_url"
    | "username"
    | "user_email"
    | "phone_number"
    | "id";

export type FilterPayload = {
    value: string;
    field: fieldNames;
};

export type InitialState = {
    customers: Customer[];
    filter: Customer[];
    filterValues: FilterPayload[];
};

export type ButtonProp = {
    text: string;
    onClick: () => void;
};
