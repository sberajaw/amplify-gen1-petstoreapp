import './App.css';
import { useState } from 'react';
import { Pets } from './ui-components';
import { NavBar } from './ui-components';
import { Footer } from './ui-components';
import { AddPet } from './ui-components';

function App() {
  const [showForm, setShowForm] = useState(false);
  const navbarOverrides = {
    image: {
      src: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    "Add Pet": {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowForm(!showForm)
      }
    }
  }
  const formOverrides = {
    Icon: {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowForm(false)
      }
    }
  }
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides} />
      <header className="App-header">
        {showForm && (
          <AddPet 
            overrides={formOverrides}
            style={{
              textAlign: "left",
              margin: "1rem",
            }} 
          />
        )}
        <Pets 
          overrideItems={(item, index) => ({
            overrides: {
              Breed: {color: "blue"},
              Button29766907: {
                onClick: () => alert(`${item.item.id}`)
              }
            }  
          })}
        />
      </header>
      <Footer width={"100%"} />
    </div>
  );
}

export default App;
