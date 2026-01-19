import { tesloApi } from "@/api/tesloApi"
import type { AuthResponse } from "../interface/auth.response";

export const RegisterAction = async(fullName: string,email: string, password: string):
Promise<AuthResponse>=>{
    console.log({fullName, email,password})
    try{


        const {data} = await tesloApi.post<AuthResponse>('/auth/register',{
            email,
            password,
            fullName,
        });

        
        return data;
    }catch(error){
        throw error;
    }


}