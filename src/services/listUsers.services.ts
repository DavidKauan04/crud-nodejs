import AppDataSource from "../data-source";
import { User } from "../entities/users.entitie";

const listUsersServices = async (): Promise<User[]> => {
  const userRepository = AppDataSource.getRepository(User);

  const users = userRepository.find();

  return users;
};

export default listUsersServices;
