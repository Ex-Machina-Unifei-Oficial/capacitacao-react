import { useState, useEffect } from "react";
import axios from "axios";

type Repository = {
  name: string;
  id: number;
};

export function MeuComponente() {
  const [username, setUsername] = useState("");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // GitHub fornece um limite de 60 chamadas por hora sem autenticação
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`
        );
        setRepositories(
          response.data.map((repo: Repository) => ({
            name: repo.name,
            id: repo.id,
          }))
        );
      } catch (err) {
        console.log("Usuario não encontrado!");
      }
    };

    console.log("Buscando dados...");
    fetchData();
  }, [username]);

  return (
    <div>
      <p>Usuario do GitHub:</p>
      <input value={username} onChange={(e) => setUsername(e.target.value)} />
      {repositories.map((repo) => (
        <h2 key={repo.id}>
          {repo.id}: {repo.name}
        </h2>
      ))}
    </div>
  );
}

/*
import { useState, useEffect } from "react";
import axios from "axios";

type Repository = {
  name: string;
  id: number;
};

export function Mao() {
  const [user, setUser] = useState("Ex-Machina-Unifei-Oficial");
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    // código que representa uma chamada de API -> não funciona de vdd
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.github.com/users/${user}/repos`
      );
      setRepositories(
        response.data.map((repo: Repository) => ({
          name: repo.name,
          id: repo.id,
        }))
      );
    };

    fetchData();
  }, [user]);

  return (
    <div>
      <button onClick={() => setUser("Ex-Machina-Unifei-Oficial")}>
        Ex Machina Unifei Oficial
      </button>
      <button onClick={() => setUser("PedroWChaves")}>PedroWChaves</button>
      <button onClick={() => setUser("Ex-Machina-Programacao")}>
        Ex Machina Programação
      </button>
      {repositories.map((repo) => (
        <h2 key={repo.id}>
          {repo.id}: {repo.name}
        </h2>
      ))}
    </div>
  );
}

*/
