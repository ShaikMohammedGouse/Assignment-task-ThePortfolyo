import Navbar from "./Components/Navbar.js";
import Intro from "./Components/introduction.js";
import About from "./Components/about.js";
import Work from "./Components/works.js";
import Experience from "./Components/Experience.js";
import Extrawork from "./Components/extra-works.js";
import Contact from "./Components/Contact.js"
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TestimonialSection from "./Components/Testimonial.js";
function App() {
  
const apiUrl = process.env.REACT_APP_API_URL;
const [data, setData] = useState(null);
const [error, setError] = useState(null);
const [loading, setLoading] = useState(true);

useEffect(() => {
 const fetchData = async () => {
  try {
    const response = await axios.get(apiUrl);
   
    setData(response.data);
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

fetchData();
}, []);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error.message}</p>;
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <>
    <div className='back2'>
    <Navbar scrollToSection={scrollToSection}/> 
   
    <Intro data={data} />
    <Work data={data} />
        <About data={data} />
        <Extrawork data={data} />
        <Experience data={data} />
        <TestimonialSection data={data}/>
        <Contact data={data} />
    
    </div>
    </> 
  );
}

export default App;
