const User = require('../../models/user');

exports.createUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const user = new User({ username, email, password });
        await user.save();
        res.status(201).send(user);
        console.log('User created successfully');
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).send({ message: 'Error creating user', error: error.toString() });
    }
    
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send({ message: 'User not found' });
        }

        // Direct password comparison (not secure for production)
        if (password !== user.password) {
            return res.status(401).send({ message: 'Invalid credentials' });
        }

        res.status(200).send({ message: 'Login successful', user });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).send({ message: 'Server error' });
    }
};
