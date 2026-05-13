
import './Home.css';
import Navbar from "./Navbar";
import profileImage from "../assets/profile.jpeg";
import { FaReact, FaJava, FaNodeJs, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiRedux, SiSpringboot, SiPostman, SiMysql, SiEclipseide, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import project1Img from "../assets/project1.jpg";
import project2Img from "../assets/project2.jpg";
import project3Img from "../assets/project3.jpg";
export default function Home() {
return (
  <div>
    {/* Navbar */}
    <Navbar />

    {/* Hero Section */}
    <section id="home" className="home-section">
      {/* Background with curved partition */}
      <div className="background-container">
        <div className="bg-left"></div>
        <div className="bg-right"></div>
        <svg className="curved-svg" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M45,0 Q55,50 45,100 L100,100 L100,0 Z" fill="#595e66ff" />
        </svg>
      </div>

      {/* Content */}
      <div className="content-container">
        <div className="text-container">
          <p className="design-develop-text">I Can Design and Develop</p>
          <h1 className="main-heading">
            <span className="black-text">Hi I'm</span> <br />
            <span className="name-text">Raja Udaya Banu</span> <br />
            <span className="full-stack-text black-text">Full Stack Developer.</span>
          </h1>

         <div className="button-container">
  <a href="/resume.docx" download className="download-btn">
    Download CV
  </a>
</div>

        </div>

        {/* Profile Image */}
        <div className="image-container">
        <img
  src={profileImage}
  alt="Profile"
  className="w-80 h-80 object-cover rounded-full shadow-2xl border-4 border-white"
/>
        </div>
      </div>
    </section>

    {/* About Section */}
<section
  id="about"
  className="min-h-[80vh] flex flex-col justify-start pt-8 bg-gray-100 scroll-mt-24"
>

  <div className="max-w-5xl w-full px-6 mx-auto">
    {/* Heading */}
    <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>
    <p className="text-lg text-gray-700 leading-relaxed text-center mb-12">
      I’m a passionate <span className="font-semibold">Full Stack Developer</span> with hands-on experience in building 
      scalable web applications using <span className="font-semibold">React.js, Redux, Node.js, and modern frontend libraries</span>.  
      Along with completing a <span className="font-semibold">Java Full Stack Development course</span>, I gained 
      <span className="font-semibold"> 6 months of internship experience</span> working with 
      <span className="font-semibold"> Spring Boot, MySQL, and REST APIs</span>, which strengthened my backend expertise.  
      <br /><br />
      I enjoy crafting <span className="font-semibold">user-friendly frontends</span> and designing 
      <span className="font-semibold"> robust backends</span>, with a strong understanding of full-stack architecture.  
      Always eager to <span className="font-semibold">learn new technologies</span> 
    </p>

    {/* Personal Info Section */}
    <div className="grid md:grid-cols-2 gap-8 text-gray-800">
      {/* Left Column */}
      <ul className="space-y-4">
        <li>
          <span className="text-yellow-400 font-bold mr-2">›</span>
          <span className="font-bold">Degree:</span> B.Tech - Information Technology
        </li>
      </ul>

      {/* Right Column */}
      <ul className="space-y-8">
        <li>
          <span className="text-yellow-400 font-bold mr-2">›</span>
          <span className="font-bold">City:</span> Nanmangalam, Chennai.
        </li>
      </ul>
    </div>
  </div>
</section>

{/* Skills Section */}
<section id="skills" className="min-h-screen bg-gray-200 py-12 px-8 scroll-mt-24">
  <h2 className="text-3xl font-bold mb-12 text-center">My Skills</h2>

  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-10 justify-start">
    {/* Frontend */}
    <div className="flex flex-col items-center">
      <SiHtml5 size={60} className="text-orange-500" />
      <p className="mt-3 font-semibold">HTML5</p>
    </div>
    <div className="flex flex-col items-center">
      <SiCss3 size={60} className="text-blue-600" />
      <p className="mt-3 font-semibold">CSS3</p>
    </div>
    <div className="flex flex-col items-center">
      <FaBootstrap size={60} className="text-indigo-600" />
      <p className="mt-3 font-semibold">Bootstrap</p>
    </div>
    <div className="flex flex-col items-center">
      <FaReact size={60} className="text-blue-500" />
      <p className="mt-3 font-semibold">React.js</p>
    </div>
    <div className="flex flex-col items-center">
      <SiRedux size={60} className="text-purple-500" />
      <p className="mt-3 font-semibold">Redux Toolkit</p>
    </div>
    <div className="flex flex-col items-center">
      <SiJavascript size={60} className="text-yellow-500" />
      <p className="mt-3 font-semibold">JavaScript</p>
    </div>

    {/* Backend */}
    <div className="flex flex-col items-center">
      <FaJava size={60} className="text-red-600" />
      <p className="mt-3 font-semibold">Java</p>
    </div>
    <div className="flex flex-col items-center">
      <SiSpringboot size={60} className="text-green-600" />
      <p className="mt-3 font-semibold">Spring Boot</p>
    </div>
    <div className="flex flex-col items-center">
      <FaNodeJs size={60} className="text-green-500" />
      <p className="mt-3 font-semibold">Node.js[Basics]</p>
    </div>
    <div className="flex flex-col items-center">
      <p className="text-6xl">🔗</p>
      <p className="mt-3 font-semibold">REST API</p>
    </div>

    {/* Database */}
    <div className="flex flex-col items-center">
      <SiMysql size={60} className="text-blue-400" />
      <p className="mt-3 font-semibold">MySQL</p>
    </div>

    {/* Tools */}
    <div className="flex flex-col items-center">
      <FaGitAlt size={60} className="text-orange-600" />
      <p className="mt-3 font-semibold">Git</p>
    </div>
    <div className="flex flex-col items-center">
      <SiPostman size={60} className="text-orange-500" />
      <p className="mt-3 font-semibold">Postman</p>
    </div>
    <div className="flex flex-col items-center">
      <VscVscode size={60} className="text-blue-500" />
      <p className="mt-3 font-semibold">VS Code</p>
    </div>
    <div className="flex flex-col items-center">
      <SiEclipseide size={60} className="text-indigo-700" />
      <p className="mt-3 font-semibold">Eclipse</p>
    </div>
  </div>
</section>


  {/* Services Section */}
<section id="services" className="min-h-screen bg-gray-300 py-12 px-6 scroll-mt-23">
  <div className="max-w-5xl mx-auto">
    {/* Heading */}
    <h2 className="text-3xl font-bold text-center mb-10">Professional Experience</h2>

    {/* Experience List */}
   <div className="space-y-8">
  {/* React Developer */}
  <div className="bg-white shadow-md rounded-2xl p-6">
    <h3 className="text-xl font-semibold">
      React Developer <span className="text-gray-500 text-sm">| Jan 2025 - Present</span>
    </h3>
    <p className="text-gray-600">Ray-i Systems, Chennai</p>
    <p className="mt-2 text-gray-700">
      <strong>Project:</strong> Task Management System
    </p>

    {/* Added spacing between Project and Tech Stack */}
    <p className="mt-3 text-sm text-gray-600">
      <strong>Tech Stack:</strong> React.js, Redux Toolkit, PrimeReact, Bootstrap, Formik, Yup, JWT, REST API
    </p>

    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
      <li>Developing a role-based admin task management system with secure login using JWT authentication.</li>
      <li>Implemented CRUD operations for tasks, schedules, attachments, and user management.</li>
      <li>Built reusable components (DataTables, modals, file uploaders, etc.) using Formik, Yup, and PrimeReact.</li>
      <li>Integrated Redux Toolkit for state management and Bootstrap for consistent layout.</li>
    </ul>
  </div>

  {/* Java Full Stack Intern */}
  <div className="bg-white shadow-md rounded-2xl p-6">
    <h3 className="text-xl font-semibold">
      Java Full Stack Developer Intern <span className="text-gray-500 text-sm">| Jan 2024 - Dec 2024</span>
    </h3>
    <p className="text-gray-600">Besant Technologies, Chennai</p>
    <p className="mt-2 text-gray-700">
      <strong>Project:</strong> Wallet Withdrawal System
    </p>

    {/* Added spacing between Project and Tech Stack */}
    <p className="mt-3 text-sm text-gray-600">
      <strong>Tech Stack:</strong> Spring Boot, JWT, MySQL, Spring Security
    </p>

    <ul className="list-disc list-inside mt-2 text-gray-700 space-y-1">
      <li>Built a secure wallet system with user authentication via JWT.</li>
      <li>Enabled users to view balance, withdraw funds, and track transactions.</li>
      <li>Developed protected REST APIs with Spring Boot & Spring Security.</li>
      <li>Implemented role-based access and CRUD operations for wallets.</li>
    </ul>
  </div>
</div>

  </div>
</section>



{/* Projects Section */}
<section id="projects" className="min-h-screen bg-gray-300 px-6 py-12 scroll-mt-23">
  <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>

  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Project Card Template */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      <img
        src={project1Img}
        alt="Task Management System"
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">Task Management System</h3>
        <p className="text-gray-700 mb-4 flex-grow">
          Developing a role-based admin task management system with secure login using JWT authentication. Implemented CRUD operations for tasks, comments, attachments, and user management. Built reusable components using Formik, Yup, and PrimeReact. Integrated Redux Toolkit for state management and Bootstrap for layout.
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React.js</span>
          <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">Redux Toolkit</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">PrimeReact</span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Bootstrap</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">Formik</span>
          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">Yup</span>
          <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">JWT</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">REST API</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">Node.js</span>
        </div>
      </div>
    </div>

    {/* Wallet Withdrawal System */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      <img
        src={project2Img}
        alt="Wallet Withdrawal System"
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-1">Wallet Withdrawal System</h3>
        <p className="text-sm text-gray-500 mb-2">Internship Project</p>
        <p className="text-sm text-gray-500 mb-4">(Jan 2024 - Dec 2024)</p>
        <p className="text-gray-700 mb-4 flex-grow">
          Built a secure wallet system with user authentication via JWT. Enabled users to view balance, withdraw funds, and track transactions. Developed protected REST APIs with Spring Boot & Spring Security. Implemented CRUD operations for wallets.
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm">Spring Boot</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">JWT</span>
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">MySQL</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">Spring Security</span>
          <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">REST API</span>
        </div>
      </div>
    </div>

    {/* Online Food Order Website */}
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
      <img
        src={project3Img}
        alt="Online Food Order Website"
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2">Online Food Order Website</h3>
        <p className="text-sm text-gray-500 mb-2">Frontend Project</p>
        <p className="text-sm text-gray-500 mb-4">(2024)</p>
        <p className="text-gray-700 mb-4 flex-grow">
          A responsive frontend project for ordering food online. Designed an interactive UI with dynamic menus, food categories, and cart functionality. Focused on a seamless user experience with modern styling and responsive layouts.
        </p>
        <div className="flex flex-wrap gap-2 mt-auto">
          <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">React.js</span>
          <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm">HTML5</span>
          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">CSS3</span>
          <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm">Bootstrap</span>
          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">JavaScript</span>
        </div>
      </div>
    </div>
  </div>
</section>

     

{/* Contact Section */}
<section id="contact" className="min-h-[60vh] flex flex-col items-center justify-center bg-gray-600 text-white py-16">
  <h2 className="text-3xl font-bold mb-12">Contact</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-lg">
    {/* Mobile */}
    <div className="flex items-center space-x-4">
      <FaPhoneAlt size={30} className="text-yellow-400" />
      <span>+91 8838492205</span>
    </div>

    {/* Email */}
    <div className="flex items-center space-x-4">
      <FaEnvelope size={30} className="text-red-400" />
      <span>banu.durai112@gmail.com</span>
    </div>

    {/* LinkedIn */}
    <div className="flex items-center space-x-4">
      <FaLinkedin size={30} className="text-blue-400" />
      <a href="https://www.linkedin.com/in/raja-udaya-banu-d-30272893/" target="_blank" rel="noopener noreferrer" className="hover:underline">
        linkedin.com
      </a>
    </div>

    {/* GitHub */}
    <div className="flex items-center space-x-4">
      <FaGithub size={30} className="text-white" />
      <a href="https://github.com/rajaudayabanu/my-portfolio" target="_blank" rel="noopener noreferrer" className="hover:underline">
        github.com
      </a>
    </div>
  </div>
</section>

    </div>
  );
}
