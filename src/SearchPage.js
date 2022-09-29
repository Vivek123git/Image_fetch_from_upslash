import React from "react";
import "./styles.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchPage() {
  const navigate = useNavigate();
  const [image, setImage] = useState("");
  const clientId = "enJPSOXlArEY8ZAl83hrfNPEYD2oinwsiVKRgA69VAk";
  const [result, setResult] = useState([]);
  const handleChange = (event) => {
    setImage(event.target.value);
  };

  const handleSubmit = () => {
    console.log(image);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      console.log(response);
      setResult(response.data.results);
    });
  };
  const onLinkClick = (e) => {
    e.preventDefault();

    navigate("/add");
  };
  return (
    <div className="app">
      <div className="heading">
        <h1>React Image Search Using Unsplash API.</h1>
      </div>

      <div className="input">
        <input
          onChange={handleChange}
          type="text"
          name="image"
          placeholder="Search for images"
        />
      </div>
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
      <div className="result">
        {result.map((image) => (
          <>
            <div>
              <div className="card">
                <img src={image.urls.thumb} />
              </div>
              <p>
                <button className="btn" to="/add" onClick={onLinkClick}>
                  {" "}
                  AddCaption{" "}
                </button>
              </p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
export default SearchPage;
