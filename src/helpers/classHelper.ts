import clsx from "clsx";

// If condition2 is true, adds class2 to the existing classList;
// If condition2 is false and condition1 is true, adds class1 to the existing classList;
// Otherwise does not change existing classList.
export function getClassListByCondition(
    classList: string[],
    classToAdd: string,
    condition: boolean,
    classToAdd2: string,
    condition2: boolean
): string {
    return condition2
        ? clsx(...classList, classToAdd2)
        : condition
        ? clsx(...classList, classToAdd)
        : clsx(...classList);
}
