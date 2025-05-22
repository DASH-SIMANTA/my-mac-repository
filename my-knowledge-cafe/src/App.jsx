import { useState } from 'react'
import './App.css'
import Header from './components/Header/header'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

   const handleAddToBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }
  const handleMarkAsRead = (id,time) =>{
    // setReadingTime (...readingTime, time);
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
    // remove the read blog from bookmark
    // console.log('remove bookmark', id)
    const remainingBookmarks=bookmarks.filter(bookmark=> bookmark.id !==id);
    setBookmarks(remainingBookmarks);
  }
  



  return (
  <div>
     <Header></Header>
    <div className='md:flex max-w-7xl mx-auto'>
    <Blogs handleMarkAsRead={handleMarkAsRead} handleAddToBookmark={handleAddToBookmark} readingTime={readingTime}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
    </div>
  </div>
  )
}

export default App


