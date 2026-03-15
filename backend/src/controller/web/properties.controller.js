// properties controller

const propertiesController = {
    getAllProperties: (req, res) => {
        res.json({ message: 'Get all properties' });
    },
    getPropertyById: (req, res) => {
        res.json({ message: 'Get property by id' });
    },
    createProperty: (req, res) => {
        res.json({ message: 'Create property' });
    },
    updateProperty: (req, res) => {
        res.json({ message: 'Update property' });
    },
    deleteProperty: (req, res) => {
        res.json({ message: 'Delete property' });
    },
    getPropertyByUserId: (req, res) => {
        res.json({ message: 'Get property by user id' });
    },
    getPropertyByAddress: (req, res) => {
        res.json({ message: 'Get property by address' });
    },
    
    

        
    
