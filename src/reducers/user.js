import { produce } from 'immer';




export const initialState = {
    // user정보
    me: {
        id: 'qordmswl5631',
        password: '123456',
        "paddle_num": "135",
    },
}


const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {

    }
});


export default reducer;