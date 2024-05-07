import { Router } from 'express';

const router = Router();

// USER CRUD 
// Create User 
router.post('/user', (req, res) => {
    res.status(501).json({ error: "Not implemented" });
});

// List User 
router.get('/user', (req, res) => {
    res.status(501).json({ error: "Not implemented" });
})

// Get one user 
router.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({ error: `Not implemented: ${id}` });
})

// Update User
router.put('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({ error: `Not implemented: ${id}` });
})

// Delete User 
router.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    res.status(501).json({ error: `Not implemented: ${id}` });
})



export default router;