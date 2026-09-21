import client from "@/api/axios";

export const getAllSkillsFn= async({type,page})=>
    await client.get("/api/skills", { params: { type,page } })
.then((res)=> res.data).catch((err)=> err.response.data);