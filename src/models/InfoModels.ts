export interface CharacterInfo {
    descriptor: string
    controlledBy: string | null
    attributes: {
        [key: string]: string
    }
    spellBook: Array<{
        descriptor: string
        conflictsWith: Array<string>
        requiresToUse: Array<string>
    }>
    spellLayout: Array<string>
    inventory: Array<{
        descriptor: string
        count: number
    }>
    weaponry: Array<{
        descriptor: string
        count: number
    }>
}

export interface LobbyInfo {
    lobbyId: string
    name: string
    combats: Array<{
        nickname: string
        isActive: boolean
        roundCount: number
        activePlayers: Array<{
            handle: string
            nickname: string
        }>
    }>
    gm: string
    players: Array<{
        player: {
            handle: string
            nickname: string
            avatar: string
            userId: string
        }
        character: {
            name: string
            sprite: string
        } | null
    }>
    layout: 'default' | 'gm'
    controlledEntity: {
        name: string
        id: string
    } | null
}
