const registration = async (req, res) => {
    const userData = req.body;
    try {
        const user = await userModel.create(userData);
        await user.save();
        res.send({ message: "User registered successfully", user });
    } catch (error) {
        console.log(error);
    }
}