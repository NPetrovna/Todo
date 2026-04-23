import type { store } from "../redux/store"

export interface CounterState {
  name: string,
  mail: string,
  pass: string,
}

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch