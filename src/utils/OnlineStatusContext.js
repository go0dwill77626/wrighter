import { createContext, useEffect, useState } from "react"

const OnlineStatusContext = createContext();

const OnlineStatusProvider = ({ children }) => {
    const [isOnline, setIsOnline] = useState(true);

    useEffect(() => {
        window.addEventListener("online", () => setIsOnline(true));
        window.addEventListener('offline', () => setIsOnline(false));

        return () => {
            window.removeEventListener('online', () => setIsOnline(true));
            window.removeEventListener('offline', () => setIsOnline(false));
        }
    }, []);

    return (
        <OnlineStatusContext.Provider value={isOnline}>
            {children}
        </OnlineStatusContext.Provider>
    )
}

export default OnlineStatusProvider;
export { OnlineStatusContext };


