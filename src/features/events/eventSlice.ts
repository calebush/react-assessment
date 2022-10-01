import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

const initialState : { events: Event[] } = {
    // @ts-ignore
    events: []
};

export const eventSlice = createSlice({
    name: 'event',
    initialState,
    reducers: {
        addEvent: (state, action: PayloadAction<Event[]>) => {
            state.events = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { addEvent } = eventSlice.actions

export default eventSlice.reducer
