import { getCategories, setCategoryMeals } from '../actions/index';

describe('Test for the meal details reducer', () => {
  it('By calling getCategories it should return an object with type property matching GET_CATEGORIES', () => {
    expect(getCategories([{ id: 1 }, { id: 2 }]).type).toEqual('GET_CATEGORIES');
  });

  it('By calling getCategories it should return an object with categories property matching passed array', () => {
    expect(getCategories([{ id: 1 }, { id: 2 }]).categories).toEqual([{ id: 1 }, { id: 2 }]);
  });

  it('By calling setCategoryMeals it should return an object with type property matching SET_CATEGORY_MEALS', () => {
    expect(setCategoryMeals([{ id: 1 }, { id: 2 }]).type).toEqual('SET_CATEGORY_MEALS');
  });

  it('By calling setCategoryMeals it should return an object with meals property matching passed array', () => {
    expect(setCategoryMeals([{ id: 1 }, { id: 2 }]).meals).toEqual([{ id: 1 }, { id: 2 }]);
  });
});
