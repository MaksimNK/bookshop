import { v4 as uuidv4 } from 'uuid';

class CategoryService {
  constructor() {
    this.categories = new Map();
  }

  addCategory(categoryName) {
    const categoryId = uuidv4();
    const newCategory = { id: categoryId, name: categoryName };
    this.categories.set(categoryId, newCategory);
    return newCategory;
  }

  getAllCategories() {
    return Array.from(this.categories.values());
  }

  getCategoryById(categoryId) {
    return this.categories.get(categoryId);
  }

  updateCategory(categoryId, updatedName) {
    const category = this.getCategoryById(categoryId);
    if (!category) {
      throw new Error('Category not found');
    }
    const updatedCategory = { ...category, name: updatedName };
    this.categories.set(categoryId, updatedCategory);
    return updatedCategory;
  }

  deleteCategory(categoryId) {
    const category = this.getCategoryById(categoryId);
    if (!category) {
      throw new Error('Category not found');
    }
    this.categories.delete(categoryId);
  }
}

export default CategoryService;
