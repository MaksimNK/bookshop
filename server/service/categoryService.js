class CategoryService {
  constructor() {
    this.categories = [];
    this.publishings = [];
    this.nextCategoryId = 1;
    this.nextPublishingId = 1;
  }

  addCategory(title, image, category) {
    const categoryId = this.nextCategoryId++;
    const newCategory = { id: categoryId, title, image, category };
    this.categories.push(newCategory);
    return newCategory;
  }

  getAllCategories() {
    return this.categories;
  }

  getCategoryById(categoryId) {
    return this.categories.find(category => category.id === parseInt(categoryId));
  }

  addPublishing(title, image, publishing) {
    const publishingId = this.nextPublishingId++;
    const newPublishing = { id: publishingId, title, image , publishing};
    this.publishings.push(newPublishing);
    return newPublishing;
  }

  getAllPublishings() {
    return this.publishings;
  }

  getPublishingById(publishingId) {
    return this.publishings.find(publishing => publishing.id === parseInt(publishingId));
  }
}

export default CategoryService;
