## Project Overview
This project is an intern assignment for **Full Stack Web Developer** at BeyondChats.  
It is divided into three phases:

- **Phase 1:** Scrape articles from the last page of the BeyondChats blog, store in a database, and create CRUD APIs.  
- **Phase 2:** Fetch articles via API, enhance content using Google search and LLM, and update articles with citations.  
- **Phase 3:** Build a ReactJS frontend to display original and updated articles in a professional UI.

---

## Phases

### Phase 1: Article Scraper & CRUD APIs
- Scrape the **5 oldest articles** from [BeyondChats Blogs](https://beyondchats.com/blogs/).
- Store them in a MongoDB/PostgreSQL database.
- Create **CRUD APIs** for articles:
  - **GET** `/articles` - Fetch all articles
  - **POST** `/articles` - Add new article
  - **PUT** `/articles/:id` - Update article

### Phase 2: Content Enhancement
- Fetch articles using CRUD API.
- Perform Google search for each article title.
- Scrape top 2 external articles’ main content.
- Use **LLM API** to rewrite the original article in the style of top results.
- Include citations at the bottom of the updated article.
- Update articles using Phase 1 CRUD API.

### Phase 3: ReactJS Frontend
- Fetch original and updated articles from API.
- Display articles in a **responsive and professional UI**.
- Features include:
  - Article listing
  - Updated vs Original content comparison

---

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB 
- **Web Scraping:** Axios, Cheerio
- **LLM Integration:** OpenAI GPT 
- **Frontend:** ReactJS, Tailwind CSS
- **Version Control:** GitHub

---

## Setup Instructions
