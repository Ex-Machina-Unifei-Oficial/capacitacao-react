import { useState, useEffect } from "react";
import axios from "axios";

type Repository = {
  name: string;
  id: number;
};

export function MeuComponente() {
  const [repositories, setRepositories] = useState<Repository[]>([]);

  useEffect(() => {
    // GitHub fornece um limite de 60 chamadas por hora sem autenticação
    const fetchData = async () => {
      const response = await axios.get(
        `https://api.github.com/users/Ex-Machina-Unifei-Oficial/repos`
      );
      setRepositories(
        response.data.map((repo: Repository) => ({
          name: repo.name,
          id: repo.id,
        }))
      );
    };

    fetchData();
  }, []);

  return (
    <div>
      <p>Repositórios Ex Machina:</p>
      {repositories.map((repo) => (
        <h2 key={repo.id}>
          {repo.id}: {repo.name}
        </h2>
      ))}
    </div>
  );
}
