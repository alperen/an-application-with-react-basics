import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert";
import Page from "../../components/Page";
import { useSLToken } from "../../context/SLTokenContext";
import LoginForm, { LoginFormValues } from "./components/LoginForm";
import useLogin from "./hooks/useLogin";

export default function Login() {
  const navigate = useNavigate();

  const { login, loading, error } = useLogin();
  const { setSLToken } = useSLToken();

  async function handleLoginFormSubmit(values: LoginFormValues) {
    try {
      const { slToken } = await login({
        email: values.email,
        name: values.name
      });

      setSLToken(slToken);
      navigate("/posts");
    } catch (_) {}
  }

  return (
    <Page>
      <LoginForm onSubmit={handleLoginFormSubmit} />

      {loading && <div>Loading</div>}

      {error && (
        <Alert>
          An error occured while login
          {error.message ? `: ${error.message}` : ""}
        </Alert>
      )}
    </Page>
  );
}
