import { useMutation } from "@tanstack/react-query";
import { createUserAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateUserAccountMutations = () => {
    return useMutation({
        mutationFn: (user: INewUser) => createUserAccount(user),
    });
};
