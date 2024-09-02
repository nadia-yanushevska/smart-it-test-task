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
