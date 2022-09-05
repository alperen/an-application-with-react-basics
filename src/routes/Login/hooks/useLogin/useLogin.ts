import { useState } from "react";
import postRegister from "../../../../api/postRegister";
import apiConfig from "../../../../api/config";

interface UseLoginInput {
  name: string;
  email: string;
}

interface LoginResponse {
  slToken: string;
}

interface UseLogin {
  login: (input: UseLoginInput) => Promise<LoginResponse>;
  loading: boolean;
  error?: Error;
}

export default function useLogin(): UseLogin {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | undefined>(undefined);

  async function login(input: UseLoginInput): Promise<LoginResponse> {
    setLoading(true);
    setError(undefined);

    try {
      const response = await postRegister({
        email: input.email,
        name: input.name,
        clientId: apiConfig.CLIENT_ID
      });

      return {
        slToken: response.data.sl_token
      };
    } catch (e) {
      setError(e as Error);

      throw e;
    } finally {
      setLoading(false);
    }
  }

  return {
    login,
    loading,
    error
  };
}
