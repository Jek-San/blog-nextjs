import Post from "@/models/Post"
import connect from "@/utils/db"

import { NextResponse } from "next/server"

export const GET = async (request) => {
  //fetch
  try {
    await connect()

    const posts = await Post.find()
    console.log(posts)
    return new NextResponse(JSON.stringify(posts), { status: 200 })
  } catch (err) {

    return new NextResponse("Database Error", { status: 500 })
  }

}