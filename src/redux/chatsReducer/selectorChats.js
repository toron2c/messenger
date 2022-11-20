export function getChatsList() {
    return ( state ) => state.chats.chatList;
}

export function checkCorrectId( id ) {
    return ( state ) => state.chats.chatList.find( el => el.id === id );
}
export function getStatusFieldInput() {
    return ( state ) => state.chats.toggleNewChat;
}