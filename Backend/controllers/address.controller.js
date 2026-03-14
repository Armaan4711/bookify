import Address from "../models/address.model.js";

export const addadress = async (req, res) => {
    try {
        const { address } = req.body
        const userId = req.userId
        const savedaddress = await Address.create({
            userId,
            ...address
        })
        res.status(201)
            .json({
                success: true,
                message: "address added successfully",
                savedaddress
            })
    } catch (error) {
        console.error("error during  addadress:", error)
        return res
            .status(500)
            .json({ message: "internal server error ", success: false })
    }
}
export const getadress = async (req, res) => {
    try {
        const userId = req.userId
        const addresses = await Address.find({
            userId
        })
        res.status(200)
            .json({
                success: true,

                addresses
            })
    } catch (error) {
        console.error("error during  getadress:", error)
        return res
            .status(500)
            .json({ message: "internal server error ", success: false })
    }
}
