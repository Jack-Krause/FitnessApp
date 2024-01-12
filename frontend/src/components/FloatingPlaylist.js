import React, { useState, useEffect, useContext } from "react";
import Modal from "react-bootstrap/Modal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { useAuthenticatedView } from "../contexts/AuthenticatedViewProvider";
import { useWorkoutPlaylist } from "../contexts/WorkoutPlaylistProvider";


const FloatingPlaylist = ( { showFloating, handleClose }) => {
    
    const { queriedPlaylist } = useWorkoutPlaylist();

    return (
        <Modal show={showFloating} onHide={handleClose}>

        </Modal>
    );
};


export default FloatingPlaylist;