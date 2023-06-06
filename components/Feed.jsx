'use client'

import { useEffect, useState } from 'react'
import PromptCard from './PromptCard';

const PromptCardList = ({ data, handleTagClick }) => {

  return (
    <div className='mt-16 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post.id}
          post={post}
          handleTagClick={() => handleTagClick(post.tag)}
        />
      ))}
    </div>
  )
} 
const Feed = () => {
  const [posts, setPosts] = useState([])
  const [searchText, setSearchText] = useState("")
  const [searchResults, setSearchResults] = useState([])
  
  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('/api/prompt')
      const data = await response.json()
      
      setPosts(data)
      setSearchResults(data)
    }
    
    fetchPosts()
  }, [])

  useEffect(() => {
    const filter = setTimeout( () => {
      const filterResults = filterPrompts(searchText)
      setSearchResults(filterResults)
    }, 1000) 

    return () => clearTimeout(filter)
  }, [searchText])
  
  const filterPrompts = (text) => {
    const textArray = text.trim().split()
    const regex = new RegExp(textArray.join("|"), "i"); // 'i' flag for case-insensitive search
    const resultingPosts = posts.filter(
      (post) =>
        regex.test(post.creator.username) ||
        regex.test(post.tag) ||
        regex.test(post.prompt)
    )
    return resultingPosts
  }

  const handleTagClick = (tag) => {
    setSearchText(tag)    
  }


  const handleSearchChange = (e) => {
    e.preventDefault()
    setSearchText(e.target.value)
  }

  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
        <input 
          type='text'
          placeholder='Search for tag or username'
          value={searchText}
          onChange={handleSearchChange}
          required
          className='search_input peer'
        />
      </form>
      {searchText ? (
        <PromptCardList 
          data={searchResults}
          handleTagClick={handleTagClick}
          handleEdit
          handleDelete
        />
      ): (
        <PromptCardList 
          data={posts}
          handleTagClick={handleTagClick}
          handleEdit
          handleDelete
        />
      )}
    </section>
  )
}

export default Feed