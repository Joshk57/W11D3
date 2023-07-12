import produceData from "../mockData/produce.json"

export default function produceReducer(state = {}, action){
    let newObj = Object.assign({},state);
    switch(action.type){
        case TOGGLELIKE:
            newObj[action.id].liked = !newObj[action.id].liked
            return newObj
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
const TOGGLELIKE = 'produce/TOGGLELIKE'

export function toggleLike(produceId){
    return({
        type: TOGGLELIKE,
        id: produceId
    });
}

export function populateProduce(){
    return({
        type: POPULATE,         //Math.floor(Math.random() * 10000)
        produce: produceData,

    })
}

export const getAllProduce = (state) => Object.values(state.produce);
