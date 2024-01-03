import React from "react";
import Modal from "react-modal";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
export default function Sidebar() {
  const [modalIsOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <aside className="sidebar">
        <div className="logo">
          <a>
            Brand <b>Colors</b>
          </a>
        </div>

        <div className="description">
          The biggest collection of official brand color codes around. Curated
          by @brandcolors and friends.
        </div>
        <nav className="menu">
          <ul>
            <li>
              <a onClick={openModal}>About BrandColors</a>
            </li>
          </ul>
        </nav>
      </aside>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        className="about-modal"
        overlayClassName="about-modal-overlay"
      >
        <button className="close-modal-btn" onClick={closeModal}>
          <GrClose />
        </button>
        <h3>About BrandColors</h3>
        <p>
          BrandColors was created by DesignBombs. The goal was to create a
          helpful reference for the brand color codes that are needed most
          often.
        </p>
        <p>It's been featured by Smashing Magazine, CSS-Tricks, Web Design</p>
      </Modal>
    </>
  );
}

// Suggest a Brand
// About BrandColors

// BrandColors + DesignBombs
// Learn how to make a website - we have put together an in-depth guide that will help you build your first website with WordPress.
