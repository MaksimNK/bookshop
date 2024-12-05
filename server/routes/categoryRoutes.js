import express from 'express';
import CategoryService from '../service/categoryService.js';

const router = express.Router();
const categoryService = new CategoryService();

router.post('/', (req, res) => {
  try {
    const newCategory = categoryService.addCategory(req.body.name);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/', (req, res) => {
  const categories = categoryService.getAllCategories();
  res.json(categories);
});

router.get('/:id', (req, res) => {
  const category = categoryService.getCategoryById(req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

router.put('/:id', (req, res) => {
  try {
    const updatedCategory = categoryService.updateCategory(req.params.id, req.body.name);
    res.json(updatedCategory);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/:id', (req, res) => {
  try {
    categoryService.deleteCategory(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

export default router;
