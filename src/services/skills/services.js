import client from "@/api/axios";

export const getAllSkillsFn= async(type)=>
    await client.get("/api/skills", { params: { type } })
.then((res)=> res.data).catch((err)=> err.response.data);