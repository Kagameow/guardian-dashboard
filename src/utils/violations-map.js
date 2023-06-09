import IconForbidden from "@/assets/icons/icon-forbidden.svg"
import IconInjection from "@/assets/icons/icon-injection.svg"
import IconReordering from "@/assets/icons/icon-reordering.svg"
export const VIOLATIONS_NAMES = {
    Censoring: 'censoring',
    Injection: 'injections',
    Reordering: 'reordering',
}

export const VIOLATIONS_ICONS = {
    [VIOLATIONS_NAMES.Censoring]: IconForbidden,
    [VIOLATIONS_NAMES.Injection]: IconInjection,
    [VIOLATIONS_NAMES.Reordering] : IconReordering,
}
