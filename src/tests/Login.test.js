import { render, fireEvent } from "@testing-library/react";
import Login from "./components/Login";
import { AuthContext } from "../contexts/AuthContext";

test("should display error on invalid login", async () => {
  const login = jest.fn(() => Promise.reject());
  const { getByLabelText, getByText } = render(
    <AuthContext.Provider value={{ login }}>
      <Login />
    </AuthContext.Provider>
  );

  fireEvent.change(getByLabelText(/email/i), {
    target: { value: "test@test.com" },
  });
  fireEvent.change(getByLabelText(/mot de passe/i), {
    target: { value: "wrongpassword" },
  });
  fireEvent.click(getByText(/se connecter/i));

  expect(await getByText(/Échec de la connexion/i)).toBeInTheDocument();
});
