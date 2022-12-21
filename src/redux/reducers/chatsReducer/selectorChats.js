export function getChatsList() {
    return ( state ) => state.chats.chatList;
}

export function checkCorrectId( id ) {
    console.log( id );
    return ( state ) => state.chats.chatList.find( el => el.linkToDialog === Number( id ) );
}
export function getStatusFieldInput() {
    return ( state ) => state.chats.toggleNewChat;
}