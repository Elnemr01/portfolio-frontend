import client from "@/api/axios";

export const sendMessageFn= async(data)=>
    await client.post("/api/quick-message/send", data)
.then((res)=> res.data).catch((err)=> err.response.data);