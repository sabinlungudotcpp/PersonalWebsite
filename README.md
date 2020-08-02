# Personal Website

# Project Proposal

I have decided to gather requirements, put those requirements into a coherent and consistent design and thereafter implement and test my own personal website where people in general or my friends can find out more about myself, my education, my work experience, my life and my hobbies whoever is interested.

The main scope of this project is to design and develop a personal website for myself that conveys my life and skills to other people, or potentially employers when I will apply for a role as a Software Engineer at a company, hence the employer might ask me if I have a personal website.

My personal website will start off fairly basic and fairly minimalistic with a clean and pleasant looking homepage whereby the users will first access when visiting my website. After implementing the HTML5 & CSS3 frontend of my website I will then migrate over to the backend where I will implement Express JavaScript code to handle the server-side backend functionality such as implementing different routes between the different links that my website will have.


Before gathering any requirements for the personal project, I will perform a small feasibility study that determines and takes into account many factors such as economic, schedule and technical feasibility. These studies will determine whether or not the project is feasible to develop or not in terms of time constraints, any costs that might be incurred or if any special equipment might be necessary.


I will be making use of a website called “Zube” where I will outline all of the requirements that my personal website will have in the form of a Spring Backlog, thereafter I will take the requirements from the sprint backlog and compile them into a single Agile sprint that will show the time taken for each of the requirements.

# Economic Feasibility Study

There will be no costs incurred during the development of this project, I will not be spending any money on any special software. All of the software that I will be using to develop this project will be free.

I will list the software and tools that I will be using to implement the functionality and design of the website.

# Technical Feasibility Study

The following tools and software will be used to develop the web application:

-	Zube (List the requirements into sprint backlogs)

-	Draw.io (Wireframe design for the website pages) & backend design

-	Docker.

-	Travis Continuous Integration (CI)

-	Git Version Control

-	HTML5, CSS3 & Express JavaScript

-	Visual Studio Code

-	Heroku for deployment.

# Legal Feasibility Study

Under the Computer Misuse Act, I will not be writing any malicious backend code that will harvest data and/or make services unavailable to users. I will ensure that cookie sessions will be used to encrypt and store personal data of the users visiting my website. I will not be writing any malware or any keyloggers that will impair the user’s ability to access my personal website.


Under the Copyright Design and Patents Act, I will not be making use of any resources that do not belong to me. All of the images that will be used are my own and I have permission to use them, however I will list the links from where I will get the colours and fonts that I will implement on my website in a bibliography at the end of this document.

# Requirements Specification

My personal website will have the following features:

**1.	A homepage with a background image of myself that will cover the entire section with 4 different links, and they are: Homepage, Personal Projects, Personal Life, Hobbies.**

**2.	The Personal Projects page will show the users the different types of projects that I have been working on along with the GitHub link to the project repository. I will be making use of rows and columns with the use of a special CSS file to implement it.**


**3.	The Personal Life page of my website will have quite a few sections whereby each section will describe my personal life, the high school that I went to and my current University that I am studying at, what I am studying and what my goal is when I graduate University.**


**4.	The Hobbies page will have two sections where each section will talk about what my hobbies are, what I like about them, why I chose these hobbies and if there is anything different that I would do.**

**5.	The Homepage will have a section called “section-main” where there will be a Welcome main heading that welcomes the users to my website. Underneath the heading there will be a couple of paragraphs that explains what my personal project will be about and what users can find here.**

**6.	The Personal Projects page will have 3 different sections that shows my top 3 most successful projects so far, of course the page will be updated in due course as there will be more projects in my portfolio. There will be 3 different sections for the 3 different projects, and they will be called:**

-	“section-first-project”
-	“section-second-project”
-	“section-third-project”

Each of the sections will have an image that will show a brief overview of the project to capture the user’s attention and make them read more about it.

Underneath the image there will be a main title that shows what the project is called and a paragraph underneath the title that explains what the project is about.

There will also be 2 other titles and paragraphs and they are:

-	Project Description
-	What I have learned
-	Future Maintenance

**7.	The Personal Life page of my website will not be as big as the other pages since this page will just have small sections that describe my life, who I am as a person and what my future goals and focuses are. This page will have a section called:**


-	“section-personal”

**There will also be Express JS route handler middleware functions that deals with incoming GET requests on the pages and it will route all the requests to the appropriate routes. Once users clicks the link on the homepage, the GET request will be sent and the server will send back a 200 OK response and finally it will serve the HTML files to the users.**


**8.	The Hobbies page will just have a header that contains the same features as the homepage and 2 special sections called “section-first” and “section-second” that will contain 2 different images on the different sections on the webpage that explains what my personal hobbies are. There will be one image of myself on the left-hand side with text and another one on the right.**


**9.	My personal web application will make use of Docker containers and images that will be used to build and run them to serve the website in a localhost environment until deployment is ready.**


**10. Travis Continuous Integration (CI) will be used to handle the Git pushes made and make me aware of the changes that have been made to the project and whether the builds have been successful or not from Docker.**


**11. Each of the pages on the website will have a footer section that will contain links to my social media accounts in the event of people wanting to contact me.**

# Homepage Wireframe Design - Header Section

<img width="523" alt="Homepage - Header" src="https://user-images.githubusercontent.com/29733613/89100259-9e9caf80-d3ed-11ea-934a-b01f88ed10f9.png">

# Homepage Wireframe Design - Main Section

<img width="525" alt="Homepage - Main Section + Footer" src="https://user-images.githubusercontent.com/29733613/89100261-9fcddc80-d3ed-11ea-9282-b90763c61b03.png">

# Personal Projects Wireframe Design - Header Section

<img width="525" alt="Personal Projects Page Design" src="https://user-images.githubusercontent.com/29733613/89100286-d277d500-d3ed-11ea-8da0-c7da8c6c8eae.png">

# Personal Projects Wireframe Design - Main Section

<img width="592" alt="Projects Page Wireframe Design" src="https://user-images.githubusercontent.com/29733613/89100287-d3a90200-d3ed-11ea-8017-913a672135a5.png">

# My Personal Life Wireframe Design - Header Section

<img width="630" alt="My Life Wireframe Design" src="https://user-images.githubusercontent.com/29733613/89100323-17037080-d3ee-11ea-9ccc-31931a5ee756.png">

# My Personal Life Wireframe Design - Section 1

<img width="628" alt="My Life Wireframe Design - 1" src="https://user-images.githubusercontent.com/29733613/89100325-18cd3400-d3ee-11ea-9d83-d58ebbcb6ece.png">

# My Personal Life Wireframe Design - Section 2

<img width="629" alt="My Life Wireframe Design - 2" src="https://user-images.githubusercontent.com/29733613/89100326-1965ca80-d3ee-11ea-9c0b-3dfa846539ba.png">

# Hobbies Wireframe Design - Header Section

<img width="628" alt="Hobbies Wireframe Design" src="https://user-images.githubusercontent.com/29733613/89100409-a9a40f80-d3ee-11ea-9a1e-e8c68a01d8f0.png">

# Hobbies Wireframe Design - Main Section

<img width="631" alt="Hobbies - Section 1 Wireframe Design" src="https://user-images.githubusercontent.com/29733613/89100411-ab6dd300-d3ee-11ea-817d-dcdd4c69192f.png">

# Website Hierarchy Design

<img width="747" alt="Website Hierarchy" src="https://user-images.githubusercontent.com/29733613/89100432-d0624600-d3ee-11ea-81a0-c4145e2ca8cf.png">

# Docker & Travis CI Workflow Design

<img width="477" alt="Workflow Design" src="https://user-images.githubusercontent.com/29733613/89100433-d22c0980-d3ee-11ea-894f-c4b7690da98a.png">

# Homepage Implementation - 1

<img width="1439" alt="Homepage 1" src="https://user-images.githubusercontent.com/29733613/89124143-8cde0980-d4cc-11ea-8023-55901e6bfdb4.png">


# Homepage Implementation - 2

<img width="1439" alt="Homepage 2" src="https://user-images.githubusercontent.com/29733613/89124153-b5660380-d4cc-11ea-95db-50c23624b17c.png">


# Personal Projects Implementation - 1

<img width="1437" alt="Projects 1" src="https://user-images.githubusercontent.com/29733613/89124222-37eec300-d4cd-11ea-9e97-a0922c31e1b4.png">

# Personal Projects Implementation - 2

<img width="1440" alt="Projects 2" src="https://user-images.githubusercontent.com/29733613/89124234-4f2db080-d4cd-11ea-8b3d-73ae61764b3f.png">

# Personal Projects Implementation - 3

<img width="1439" alt="Projects 3" src="https://user-images.githubusercontent.com/29733613/89124236-51900a80-d4cd-11ea-8083-cd20e7a6582b.png">
