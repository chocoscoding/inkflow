import { NextResponse } from "next/server";

export default async function GET(params:any){
    console.log(params);
    
    return  NextResponse.json("Hello, Next.js!");

}