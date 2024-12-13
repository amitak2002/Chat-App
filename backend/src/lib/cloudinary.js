import {v2 as cloudinary} from "cloudinary"
import {config} from "dotenv"
config()

cloudinary.config({
    cloud_name : "dqgvpoyho",
    cloud_key : "923572172666163",
    cloud_secret : "l0GaGaYntyj6wSBEoyyjwC1fg64"
})

export default cloudinary;