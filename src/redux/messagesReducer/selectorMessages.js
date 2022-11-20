let i = 0;
export function getMessageList( chatId ) {
    console.log( `use getMessageList${++i}` )
    return ( state ) => state.messages.messageList[chatId]
}

