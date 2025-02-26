import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import './App.css'
import PoisonCaseForm from './components/PoisonCaseForm';
import Home from './pages/Home';
import Layout from './Layout';
import NoPage from './pages/NoPage';
import NewCase from './pages/NewCase';
import CaseList from './pages/CaseList';
import Case from './pages/Case';
import Login from './pages/Login';
import NewArticle from './pages/NewArticle';
import Article from './pages/Article';
import Section from './pages/Section';
import EditArticle from './pages/EditArticle';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/form" element={<PoisonCaseForm />} />
              <Route path="/newcase" element={<NewCase />} />
              <Route path="*" element={<NoPage />} />
              <Route path="/case_list" element={<CaseList />} />
              <Route path="/case/:case_id" element={<Case />} />
              <Route path='/login' element={<Login />} />
              <Route path='/newarticle' element={<NewArticle />} />
              <Route path='/article/:article_id' element={<Article />} />
              <Route path='/section/:section_id' element={<Section />} />
            </Route>
            <Route path="/poison" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/poison/form" element={<PoisonCaseForm />} />
              <Route path="/poison/newcase" element={<NewCase />} />
              <Route path="*" element={<NoPage />} />
              <Route path="poison/case_list" element={<CaseList />} />
              <Route path="/poison/case/:case_id" element={<Case />} />
              <Route path='/poison/login' element={<Login />} />
              <Route path='/poison/newarticle' element={<NewArticle />} />
              <Route path='/poison/article/:article_id' element={<Article />} />
              <Route path='/poison/edit_article/:article_id' element={<EditArticle />} />
              <Route path='/poison/section/:section_id' element={<Section />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  )
}

export default App
