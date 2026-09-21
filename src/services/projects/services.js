import client from "@/api/axios";

export const getAllProjectsFn= async(page)=>
    await client.get("/api/projects", { params: { page } })
.then((res)=> res.data).catch((err)=> err.response.data);