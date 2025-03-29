import React from "react";

interface LoginFormProps {
  onSubmit: (email: string, password: string) => void;
}

export function LoginForm({ onSubmit }: LoginFormProps) {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <form onSubmit={() => onSubmit(email, password)}>
      <h2>Login</h2>

      <label>
        이메일
        <input
          type="email"
          placeholder="user@test.com"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </label>
      <label>
        비밀번호
        <input
          type="password"
          value={password}
          onChange={({ target: { value } }) => setPassword(value)}
        />
      </label>
      <button disabled={!email || !password}>로그인</button>
    </form>
  );
}
