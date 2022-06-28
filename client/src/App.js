import "./App.css";
import React from 'react'
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Post from "./pages/Post";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

export default function App() {
    return (
        <div className='App'>
            <Router>
                <div className="navbar">
                    <Link to="/"> Home Page</Link>
                    <Link to="/createpost"> Create A Post</Link>
                </div>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/createpost" element={<CreatePost />} />
                    <Route path="/post/:id" exact element={<Post />}></Route>
                </Routes>
            </Router>
        </div>
    )
}
