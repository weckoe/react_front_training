import * as TicketActionCreators from './tickets'
import * as UsersActionCreators from './users'

export default {
    ...TicketActionCreators,
    ...UsersActionCreators
}