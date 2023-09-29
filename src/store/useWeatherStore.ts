import { create } from 'zustand';

interface WeatherState {
    appError: string | null,
    setAppError: (_error: string | null) => void
}

const useWeatherStore = create<WeatherState>((set) => ({
    appError: null,
    setAppError: (_error) => set((state) => ({ appError: _error })),
}));

export default useWeatherStore;