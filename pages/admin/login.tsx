import { FormEvent } from "react";
import FormLogin from "components/Admin-Login-Page";
import { useUser } from "hooks";
import fetchJson from "utils/fetchJson";

export default function AdminLoginPage() {
  const { mutateUser } = useUser({
    redirectTo: "/admin/panel",
    redirectIfFound: true,
  });

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
    values: {}
  ) => {
    event.preventDefault();
    try {
      await mutateUser(
        fetchJson("/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        })
      );
    } catch (error) {
      console.error("An unexpected error happend");
    }
  };

  return (
    <>
      <FormLogin handleSubmit={handleSubmit} />
    </>
  );
}
