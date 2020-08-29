import { User } from '@models/User';
const UserController = {
  /**
   *
   * Display All Users
   */
  show() {
    return User.find();
  },

  /**
   *
   * Create a new User
   */
  create() {
    const user = new User();
    user.firstName = 'Bobby';
    user.age = 25;
    user.lastName = 'Remote';
    return user.save();
  },

  /**
   *
   * Update User
   */
  update(id: number) {
    return User.delete(id);
  },

  /**
   *
   * Deletes a User
   */
  delete(id: number) {
    return User.delete(id);
  },
};
export default UserController;
