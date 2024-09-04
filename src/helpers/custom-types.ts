export type Customer = {
    name: string;
    avatar_url: string;
    username: string;
    email: string;
    phone: string;
    id: string;
    website: string
};

export type CustomerProp = {
    person: Customer;
    includeHeader: boolean;
};

export type SearchProp = {
    field: fieldNames;
};

export type fieldNames = "name" | "website" | "username" | "email" | "phone" | "id";

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
