import React, {  useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";
import axios from "axios";

const UpdateModule = ({id, isOpen,productName ,onClose}) => {
    const [title, setTitle]= useState("");
    const [body, setBody]= useState("");
    const apiUrl="https://busy-rose-cowboy-hat.cyclic.cloud"
       const handleSubmit = () => {
        const newNotes={
            title,
            body
        }
        console.log(newNotes)
        const headers = {
            Authorization: localStorage.getItem("token")      //`Bearer ${token}` // Assuming you're using a Bearer token
       };
       axios.patch(`${apiUrl}/notes/update/${id}`,
       newNotes,{headers})
       .then(res=>console.log("Updated"))
       .catch(err=>console.log(err))
      
        onClose(); // Close the modal after submitting
      };

      return (
        <Modal isOpen={isOpen} onClose={onClose} size="sm" centered>
          <ModalOverlay w="400px" h="400px" bg="rgba(205, 165, 165, 0.6)" /> {/* Set background color and opacity */}
          <ModalContent w="350px" boxShadow="md"> {/* Set width and shadow */}
            <ModalHeader>Update Notes</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <h3 style={{ color: "black" }}>{productName}</h3>
                <input
                  name="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  style={{ width: "100%", marginBottom: "10px", padding: "8px", border: "1px solid gray" }}
                  type="text"
                  placeholder="Title"
                />
                <textarea
                  name="text"
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  style={{ width: "100%", height: "80px", padding: "8px", border: "1px solid gray" }}
                  placeholder="Body"
                ></textarea>
              </div>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleSubmit}>
                Submit
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      );
      
      
}      

export default UpdateModule;
