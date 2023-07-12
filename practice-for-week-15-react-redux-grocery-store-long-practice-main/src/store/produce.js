import produceData from "../mockData/produce.json"

export default function produceReducer(state = {}, action){
    switch(action.type){
        case POPULATE:
            const newState = {}
            action.produce.forEach(produce => {
                newState[produce.id] = produce;
            })
            return newState
        default:
            return state;
    }
}

const POPULATE = 'produce/POPULATE'

export function populateProduce(){
    return({
        type: POPULATE,         //Math.floor(Math.random() * 10000)
        produce: produceData,

    })
}