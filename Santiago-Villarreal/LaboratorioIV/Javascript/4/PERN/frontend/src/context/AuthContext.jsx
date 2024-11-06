import {createContext, useState, useContext, useEffect} from "react";
import axios from "axios";
import Cookie from "js-cookie"

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
      throw new Error("UseAuth must be used within AuthProvider");
    }
    return context;
}

export function AuthProvider({children}){
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

    const singin = async(data)=>{
        try {
            const res = await axios.post("http://localhost:3000/api/singin", data, {
                withCredentials: true,
            });
            console.log(res.data);
            setUser(res.data);
            setIsAuth(true);
            return res.data;
        } catch (error) {
           console.log(error);
           if(Array.isArray(error.response.data)){
                return setErrors(error.response.data);
           }
           setErrors([error.response.data.message]);
        }
        
    };

    const singup = async(data)=>{
        try {
            const res = await axios.post("http://localhost:3000/api/singup", data ,{
                withCredentials: true,
            });
            console.log(res);
            setUser(res.data);
            setIsAuth(true);
            return res.data;
        } catch (error) {
            console.log(error);
           if(Array.isArray(error.response.data)){
                return setErrors(error.response.data);
           }
           setErrors([error.response.data.message]);
        }
    }

    useEffect(() =>{
        if(Cookie.get("token")){
            axios.get("http://localhost:3000/api/profile", {
                withCredentials: true,
            }).then((res)=>{
                setUser(res.data);
                setIsAuth(true);
            }).catch((error)=>{
                setUser(null);
                setIsAuth(false);
                console.log(error);
            });
        }
    }, []);

    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors,
        singup,
        setUser,
        singin,
    }}>
        {children}
    </AuthContext.Provider>
}