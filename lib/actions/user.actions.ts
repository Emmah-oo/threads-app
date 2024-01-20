"use server"

import User from "../models/user.model"
import { connectToDB } from "../mongoose"

export async function updateUser(): Promise<void> {
    connectToDB()

    await User.findOneAndUpdate()
}