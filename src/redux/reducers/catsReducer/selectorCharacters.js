
export function getList() {
    return ( state ) => state.characters.list;
}

export function getErrorMessage() {
    return ( state ) => state.characters.err.errMessage;
}

export function getErrorPage() {
    return ( state ) => state.characters.err.errPage;
}

export function getInfo() {
    return ( state ) => state.characters.info;
}