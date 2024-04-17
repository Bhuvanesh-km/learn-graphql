import "./App.css";
import { gql, useQuery } from "@apollo/client";

const query = gql`
  query GetTodosWithUer {
    getTodos {
      title
      id
      completed
      user {
        id
        name
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery(query);
  if (loading) {
    return <h1>loading...</h1>;
  }
  return (
    <div className="App">
      <table>
        <tbody>
          {data.getTodos.map((todo) => (
            <tr key={todo.id} className="row">
              <td>{todo.title}</td>
              <td>{todo.user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
