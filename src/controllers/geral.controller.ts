import { Request, Response } from "express";
import { IUserLogin, IUserUpdate } from "../interfaces/users";
import createUserService from "../services/createUser.services";
import listUsersServices from "../services/listUsers.services";
import loginSessionService from "../services/loginSession.services";
import updateUserServices from "../services/updateUser.services";
import { instanceToPlain } from 'class-transformer'
import deleteUserService from "../services/deleteUser.services";

export const CreateUserController = async (req: Request, res: Response) => {
    try {
        const newUser = req.body
        const userCreate = await createUserService(newUser)
        return res.status(201).json(instanceToPlain(userCreate))
    } catch (error) {
        if (error instanceof Error){
            res.status(400).json({message: error.message})
        }
    }  
}

export const listUsersController = async (req: Request, res: Response) => {
    try {
        const users = await listUsersServices()
        return res.status(200).json(instanceToPlain(users))
    } catch (error) {
        if (error instanceof Error){
            res.status(400).json({message: error.message})
        }
    }
}

export const loginSessionController = async (req: Request, res: Response) => {
    try {
        const data: IUserLogin = req.body
        const token = await loginSessionService(data)
        return res.status(200).json({token})
    } catch (error) {
        if (error instanceof Error){
            res.status(403).json({message: error.message})
        }
    }
}   

export const updatedUserController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        const user: IUserUpdate = req.body
        const updatedUser = await updateUserServices(user, id)

        return res.status(200).json({
            message: "user updated",
            userUpdated: updatedUser
        })
    } catch (error) {
        if (error instanceof Error){
            res.status(401).json({message: error.message})
        }
    }
}

export const deleteUserController = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id
        if (req.user.isAdm) {
            await deleteUserService(id)
            
            return res.status(204).json({message: 'user deleted'})
        }
        return res.status(403).json({message:'User is not admin'})
    } catch (error) {
        if (error instanceof Error){
            res.status(404).json({message: error.message})
        }
    }
}
