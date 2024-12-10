import express from 'express';
import CategoryService from '../service/categoryService.js';

const router = express.Router();
const categoryService = new CategoryService();

router.post('/categories', (req, res) => {
  try {
    const newCategory = categoryService.addCategory(req.body.name, req.body.image);
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/categories/bulk', (req, res) => {
  try {
    const categories = req.body.categories;
    const addedCategories = categories.map(category => 
      categoryService.addCategory(category.title, category.image, category.category)
    );
    res.status(201).json(addedCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


router.get('/categories', (req, res) => {
  const categories = categoryService.getAllCategories();
  res.json(categories);
});

router.get('/categories/:id', (req, res) => {
  const category = categoryService.getCategoryById(req.params.id);
  if (category) {
    res.json(category);
  } else {
    res.status(404).json({ error: 'Category not found' });
  }
});

router.post('/publishings', (req, res) => {
  try {
    const newPublishing = categoryService.addPublishing(req.body.title, req.body.image, req.body.publishing);
    res.status(201).json(newPublishing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.get('/publishings', (req, res) => {
  const publishings = categoryService.getAllPublishings();
  res.json(publishings);
});

router.get('/publishings/:id', (req, res) => {
  const publishing = categoryService.getPublishingById(req.params.id);
  if (publishing) {
    res.json(publishing);
  } else {
    res.status(404).json({ error: 'Publishing not found' });
  }
});

router.post('/publishings/bulk', (req, res) => {
  try {
    const publishings = req.body.publishings;
    const addedPublishings = publishings.map(publishing =>
      categoryService.addPublishing(publishing.title, publishing.image, publishing.publishing)
    );
    res.status(201).json(addedPublishings);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});


export default router;
