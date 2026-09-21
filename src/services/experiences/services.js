import client from "@/api/axios";

export const getAllExperiencesFn= async(page)=>
    await client.get("/api/experiences", { params: { page } })
.then((res)=> res.data).catch((err)=> err.response.data);