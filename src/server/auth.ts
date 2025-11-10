import { json, Router } from "express";
import { UserInfo } from "remult";

const validUsers: UserInfo[] = [
    {id: "1", name: "Amaya", roles: ["admin"]},
    {id: "2", name: "name", roles: ["admin"]},
    {id: "3", name: "user"},
];

export const auth = Router();
auth.use(json());

auth.post("/api/signIn", (req, res) => {
    const user = validUsers.find(user => user.name === req.body.username);
    if (user) {
        req.session!["user"] = user;
        res.json(user);
    } else {  // if it fails
        res.status(404).json("Invalid user");
    }
});

// Ask the "cookie" who current user is
auth.get("/api/currentUser", (req,res) => res.json(req.session!["user"]));
auth.post("/api/signOut", (req,res) => {
    req.session!["user"] = null;
    res.json("Signed out");
});