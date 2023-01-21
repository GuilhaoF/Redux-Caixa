import {configureStore} from '@reduxjs/toolkit'
import operationReducer from '../features/Operations/OperationSlice'

export const store = configureStore({
    reducer:{
        operation : operationReducer
    },
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch