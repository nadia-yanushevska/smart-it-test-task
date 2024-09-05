// Formatters
export function phoneNumberFormatter(phone: string): string {
    phone = phone.split(".").join("-").split(") ").join("-").replace("(", "");
    phone = phone.split("-").length > 3 ? phone.slice(2) : phone;
    return phone.includes("x") ? phone.split("x")[0].trim() : phone;
}

export function labelFormatter(key: string): string {
    if (key === "id") return "ID";
    return capitalizeWordsWithSeparator(key, "_", " ");
}

export function placeholderFormatter(key: string): string {
    switch (key) {
        case "id":
            return "0";
        case "phone":
            return "012-345-6789";
        case "username":
            return "jane_doe2000";
        case "email":
            return "jane.doe@gmail.com";
        case "name":
            return "Jane Doe";
    }
    return "";
}

// Formatter helper functions
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
