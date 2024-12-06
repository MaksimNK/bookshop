import React, { useContext } from "react";
import {Routes, Route, Navigate} from 'react-router-dom'
import { AuthContext } from "../../context/auth";



export const AppRouter = (props) => {


    const {isAuth, isLoading} = useContext(AuthContext)

    return (
       <></>
    );
}