import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";


export const getPersons = createAsyncThunk(
    'persons/getPersons',
    async (_, {
        rejectWithValue
    }) => {
        const errorText = "Something went wrong :(";
        try {
            const response = await fetch('https://thronesapi.com/api/v2/Characters').then(result => result.json()).then(data => {
                if (!data.length) {
                    throw errorText;
                } else {
                    for (let i = 0; i < data.length; i++) {
                        data[i].like = false;
                    }
                    return data;
                }
            })
            return response;
        } catch (error) {
            console.log(error);
            return rejectWithValue(error)
        }

    }
)

const initialState = {
    persons: [],
    favorites: [],
    loader: false,
    mainPage: true,
}

export const personsSlice = createSlice({
    name: 'persons',
    initialState,
    reducers: {
        changePage: (state, action) => {
            state.mainPage = !action.payload
        },
        loading: (state, action) => {
            state.loader = action.payload
        },
        removePerson: (state, action) => {
            let index = state.persons.findIndex(p => p.id === action.payload);
            state.persons.splice(index, 1)
        },
        changeLike: (state, action) => {
            let index = state.persons.findIndex(p => p.id === action.payload.id);
            state.persons[index].like = !action.payload.like;
        },
        changeFavorites: (state) => {
            let favorites = state.persons.filter(p => p.like === true);
            state.favorites = favorites
        }

    },
    extraReducers: {
        [getPersons.pending]: (state) => {
            state.loader = true;
        },
        [getPersons.fulfilled]: (state, action) => {
            state.loader = false;
            state.persons = action.payload
        },
        [getPersons.rejected]: (state, action) => {
            state.loader = false;
            alert(action.payload)
        }
    }
})

export const {
    changePage,
    loading,
    removePerson,
    changeLike,
    changeFavorites
} = personsSlice.actions

export default personsSlice.reducer