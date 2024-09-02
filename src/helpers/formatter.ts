export function birthdayFormatter(full_date: string): string {
    return full_date.split("T")[0];
}

export function phoneNumberFormatter(phone: string): string {
    return phone.includes("x") ? phone.split("x")[0].trim() : phone;
}

export function labelFormatter(key: string): string {
    if (key === "id") return "ID";
    if (key === "date_of_birth") return "DOB";
    return capitalizeWordsWithSeparator(key, "_", " ");
}

function capitalizeWordsWithSeparator(
    words: string,
    initSeparator: string,
    targetSeparator: string
): string {
    let wordsArray = words.split(initSeparator);
    wordsArray = wordsArray.map((word) => capitalizeWords(word));
    return wordsArray.join(targetSeparator);
}

function capitalizeWords(str: string): string {
    return str[0].toUpperCase() + str.slice(1);
}
