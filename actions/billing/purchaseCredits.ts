"use server"

import { PackId } from "@/types/billing";
import { auth } from "@clerk/nextjs/server";

export async function PurchaseCredits(packId : PackId){
    const {userId} = auth();
    if(!userId){
        throw new Error("unauthenticated");
    }
}