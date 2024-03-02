export interface GameCommand {
    command: string,
    payload?: {
        [key: string]: any
    }
}

export interface TakeActionCommand extends GameCommand {
    payload: {
        game_id: string,
        entity_id: string,
        user_token: string,
        action: string
    }
}

export interface RoundUpdateCommand extends GameCommand {
    payload: {
        round: string
    }
}

export interface StateUpdateCommand extends GameCommand {
    payload: {
        battlefieldChanged: boolean,
        memoryCell: string | null
    }
}

export interface GameFinishedCommand extends GameCommand {
    payload: {
        result: string,
        code: 420 | 500,
    }
}


export interface ActionResultCommand extends GameCommand {
    payload: {
        user_token: string,
        result: string,
        code: 200 | 400 | 406 | 500,
    }
}

