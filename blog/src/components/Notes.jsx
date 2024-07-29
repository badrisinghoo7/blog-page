import axios from "axios";
import { React, useState, useEffect } from "react";
import UpdateModule from "./Updatemodal";

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const apiUrl = "https://blogpage-backenddata.onrender.com";
  const [isRatingModuleOpen, setIsRatingModuleOpen] = useState(false);

  const handleDelete = (id) => {
    const headers = {
      Authorization: localStorage.getItem("token"), //`Bearer ${token}` // Assuming you're using a Bearer token
    };
    axios
      .delete(`${apiUrl}/blogs/delete/${id}`, { headers })
      .then((res) => console.log("Deleted"))
      .catch((err) => console.log(err));
  };

  const handleUpdate = () => {
    setIsRatingModuleOpen(false);
  };

  useEffect(() => {
    const headers = {
      Authorization: localStorage.getItem("token"), //`Bearer ${token}` // Assuming you're using a Bearer token
    };
    axios
      .get(`${apiUrl}/blogs`, { headers })
      .then((res) => {
        console.log(res);
        setNotes(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {notes?.map((el) => {
        return (
          <div key={el._id}>
            <h2>{el.title}</h2>
            <p>{el.body}</p>
            <button onClick={() => handleDelete(el._id)}>Delete</button>
            <button onClick={() => setIsRatingModuleOpen(true)}>U</button>
            <div style={{ width: "400px", backgroundColor: "red" }}>
              <UpdateModule
                isOpen={isRatingModuleOpen}
                onClose={handleUpdate}
                productName={el.title}
                id={el._id}
              />
            </div>
            {/* <button onClick={() => setIsRatingModuleOpen(el._id)}>Update</button>
                    <UpdateModule
                    isOpen={isRatingModuleOpen === el._id}
                    onClose={handleUpdate}
                    productName={el.title}
                    id={el._id}
                    /> */}
          </div>
        );
      })}
    </div>
  );
};

export default Notes;
