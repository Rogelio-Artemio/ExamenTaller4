const idUsers = ["Rogelio", "Per"];

export const getUserById = (req:  any, res: any) => {
    const { id } = req.params;
    const finded = idUsers.includes(id);

    if (finded) {
        res.status(200).json({message:`Bienvenido Usuario: ${id}`});
    } 
    else {
        res.redirect("/Usuarios/registro");
    }
};

export const registeUser = (req: any, res: any) => {
    res.status(200).json({message: 'No se encontro el usuario'});
}