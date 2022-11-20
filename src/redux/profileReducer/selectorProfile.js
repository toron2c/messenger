
let i = 0;
export function getStatusName() {
    console.log( `get name status use ${++i}` )
    return ( state ) => state.profile.showFieldInputNewName
}