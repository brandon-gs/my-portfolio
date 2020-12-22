import { ChangeEvent, FormEvent, useState } from "react";
import useStyles from "./styles";
import fetchJson from "utils/fetchJson";

interface Props {
  handleSubmit: (event: FormEvent<HTMLFormElement>, values: {}) => {};
}

export default function FormLogin({ handleSubmit }: Props) {
  const classes = useStyles();
  const [values, setValues] = useState({ username: "", password: "" });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <section className={classes.root}>
      <form
        className={classes.form}
        onSubmit={(event) => handleSubmit(event, values)}
      >
        <h1>Control panel</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={handleChange}
          className={classes.formInput}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className={classes.formInput}
        />
        <button type="submit">Login</button>
      </form>
    </section>
  );
}
