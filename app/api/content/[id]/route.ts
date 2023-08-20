import { NextResponse } from "next/server";

export default async function DELETE(params:any){
    console.log(params);
    
    return  NextResponse.json("Hello, Next.js!");

}