import "./styles.css";
import { useEffect, useState } from "react";
export default function App() {
  const names = [
    "kritica",
    "puja",
    "riya",
    "sushma",
    "priyanaka",
    "sweata",
    "pushpa"
  ];
  const [suggestion, setSuggestion] = useState(names);
  const [suggestionList, setSuggestionList] = useState([]);
  const [name, setName] = useState("");
  const [popupOpen, setPopupOpen] = useState(false);

  const handleChange = (e) => {
    const input = e.target.value;
    setName(input);

    //const value = input.split("@");
    if (!input[0] === "@" || input.length === 0) {
      setPopupOpen(false);
      // filteredSuggestion(input);
    } else {
      setPopupOpen(true);
      const newInput = input.substr(1, input.length);
      // filteredSuggestion(input);
      filteringUserNameusingInputText(newInput);
    }
  };

  const filteringUserNameusingInputText = (enteredText) => {
    console.log("enteredText", enteredText);
    const filteredUser = suggestion.filter(
      (item) => {
        return item
          .toLocaleLowerCase()
          .includes(enteredText.toLocaleLowerCase());
      }
      // item.toLocaleLowerCase().includes(enteredText.toLocaleLowerCase())
    );
    console.log("filteredUser", filteredUser);
    //setFilteredUser(filteredUser)
    // return filteredUser;
    setSuggestion(filteredUser);
  };

  const filteredSuggestion = (input) => {
    // alert(`inside filterSuggestion function ${input}`);
    console.log("splitting input at @", input.split("@"));
    const newInput = input.split("@");
    console.log("newInput", newInput);
    const data = suggestion.filter((item) => item.includes(newInput));
    console.log("data", data);
    setSuggestionList(data);
  };
  console.log(suggestionList);
  const checkUserList = (suggestion) => {
    return (
      suggestion &&
      suggestion.map((item, index) => {
        // console.log("item", item);
        return <div key={index}>{item}</div>;
      })
    );
  };
  return (
    <div className="App">
      <div className="inputContainer">
        <input
          type="text"
          placeholder="Enter name"
          onChange={handleChange}
          value={name}
        />
      </div>
      {popupOpen ? checkUserList(suggestion) : null}
      {/* {suggestionList.length > 0 ? (
        <div className="suggestionContainer">
          {suggestionList.map((item) => {
            return <div className="suggestion-item">{item}</div>;
          })}
        </div>
      ) : null} */}
    </div>
  );
}
