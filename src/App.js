import './App.css';
import './dialog.css';
import { useState } from 'react';
import { Pets } from './ui-components';
import { NavBar } from './ui-components';
import { Footer } from './ui-components';
import { AddPet } from './ui-components';
import { PetDetails } from './ui-components';
import { withAuthenticator } from '@aws-amplify/ui-react';

function App({ user, signOut }) {
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [pet, setPet] = useState();

  const [updatePet, setUpdatePet] = useState();

  const [name, setName] = useState("Kitty");
  const [age, setAge] = useState("12");
  const [breed, setBreed] = useState("Labrador");
  const [about, setAbout] = useState("Cute, funny");
  const [color, setColor] = useState("Blue");
  const [image, setImage] = useState("image-url");

  const navbarOverrides = {
    "Add Pet": {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowForm(!showForm)
        setUpdatePet(undefined);
      }
    },
    Button: {
      onClick: signOut
    }
  }
  const formOverrides = {
    Icon: {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowForm(false)
      }
    },
    TextField29766922: {
      placeholder: name
    },
    TextField29766923: {
      placeholder: age
    },
    TextField29766924: {
      placeholder: breed
    },
    TextField3901448: {
      placeholder: about
    },
    TextField3901455: {
      placeholder: color
    },
    TextField3901462: {
      placeholder: image
    },
    image: {
      src: !updatePet
        ? "https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        : updatePet.image,
    },
    Button3901470: {     // Update button
      isDisabled: !updatePet ? true : false
    },
    Button29766926: {   // Save button
      isDisabled: updatePet ? true : false
    }
  }
  const detailOverrides = {
    Close: {
      style: { cursor: "pointer" },
      onClick: () => {
        setShowDetails(false)
      }
    }
  }
  return (
    <div className="App">
      <NavBar width={"100%"} overrides={navbarOverrides} />
      <header className="App-header">
        {showDetails && (
          <>
            <div className="backdrop" onClick={() => setShowDetails(false)}></div>
            <div className="dialog">
              <PetDetails 
                overrides={detailOverrides}
                pet={pet} 
                style={{
                  textAlign: "left",
                  margin: "1rem",
                }}
              />
            </div> 
          </>
        )}
        {showForm && (
          <>
            <div className="backdrop" onClick={() => setShowForm(false)}></div>
            <div className="dialog">
              <AddPet 
                pet={updatePet}
                overrides={formOverrides}
                style={{
                  textAlign: "left",
                  margin: "1rem",
                }}
              />
            </div>
          </>
        )}
        <Pets 
          overrideItems={({item, index}) => ({
            overrides: {
              Breed: {color: "blue"},
              Button29766907: {
                onClick: () => {
                  setShowDetails(!showDetails);
                  setPet(item);
                }
              },
              Button3884474: {
                onClick: () => {
                  if (!showForm) setShowForm(true);
                  setUpdatePet(item);
                  setName(item.name);
                  setAge(item.age);
                  setBreed(item.breed);
                  setAbout(item.about);
                  setColor(item.color);
                  setImage(item.image);
                }
              }
            }
          })}
        />
      </header>
      <Footer width={"100vw"} />
    </div>
  );
}

export default withAuthenticator(App);
