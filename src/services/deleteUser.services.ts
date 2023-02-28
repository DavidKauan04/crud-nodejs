import AppDataSource from "../data-source";
import { User } from "../entities/users.entitie";

const deleteUserService = async (id: string) => {
  const userRepository = AppDataSource.getRepository(User);

  const findUser = await userRepository.findOneBy({
    id,
  });

  if (!findUser) {
    throw new Error("User not found");
  }

  if (!findUser.isActive) {
    return ["user is inactive and does not have permission.", 400];
  }

  await userRepository.update(id, {
    isActive: false,
  });
};

export default deleteUserService;
