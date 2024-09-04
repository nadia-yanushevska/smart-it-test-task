import clsx from "clsx";

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
