import { createContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const response = await fetch('https://randomuser.me/api/');
            const data = await response.json();
            const loadedUser = data.results[0];
            setUser(loadedUser);
        }
        return () => fetchUser();
    }, []);

    useEffect(() => {
        if (user) {
            let favicon = document.getElementById('favicon');
            favicon.href = user.picture.thumbnail;
        }
    }, [user]);

    if (!user) {
        return <div className="loading">Loading...</div>;
    }

    return (
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
};