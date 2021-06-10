import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const findUserById = this.usersRepository.findByEmail(email);

    if (findUserById) {
      throw new Error("E-mail já cadastrado");
    }

    return this.usersRepository.create({ name, email });
  }
}

export { CreateUserUseCase };
