'use client'
import {PropagateLoader} from "react-spinners"

export default function Loading(){
    return (
        <div className="flex justify-center items-center h-screen">
        <PropagateLoader color="#36d7b7" />
        </div>
    )
}