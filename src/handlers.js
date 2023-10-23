import { rest } from "msw";

const baseURL = 'https://drf-api102023-5b9f4ae71113.herokuapp.com/'

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            pk: 10,
            username: "sean",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 10,
            profile_image: "https://res.cloudinary.com/divt5ho9l/image/upload/v1/media/../default_profile_rgmftz"
            }));
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200));
    }),
];