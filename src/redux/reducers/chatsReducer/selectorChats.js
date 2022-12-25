export function getChatsList() {
    return ( state ) => state.chats.chatList;
}

export function checkCorrectId( id ) {
    return ( state ) => state.chats.chatList.find( el => el.linkToDialog === Number( id ) );
}
export function getStatusFieldInput() {
    return ( state ) => state.chats.toggleNewChat;
}

export function getStatusErrorChats() {
    return ( state ) => state.chats.error.isError;
}
export function getErrorMessageChats() {
    return ( state ) => state.chats.error.msg;
}