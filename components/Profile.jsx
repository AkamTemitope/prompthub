'use client'

import { useState } from 'react'
import { useSession } from 'next-auth/react'
import PromptCard from './PromptCard'
import { useRouter } from 'next/navigation'

const Profile = ({ name, desc, data }) => {
    const router = useRouter()
    const { data: session } = useSession()
    const [posts, setPosts] = useState(data)

    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)

    }

const handleDelete = async (post) => {
    const hasConfirmed = confirm("Are you sure you want to delete this prompt?")

    if(hasConfirmed){

        try {
            await fetch(`/api/prompt/${post._id.toString()}`, {
                method: 'DELETE'
            })
            
            const filteredPosts = posts.filter((p) => p._id !== post._id)
            setPosts(filteredPosts)
            
        } catch (error) {
            console.log(error)
        }
    }

}

  return (
    <section className='w-full'>
      <h1 className='head_text text-left font-inter'>
        <span className='blue_gradient'>{name}'s profile</span>
      </h1>
      <p className='desc text-left'>{desc}</p>
      <div className='mt-16 prompt_layout'>
        {posts?.map((post) => (
          <PromptCard
            key={post.id}
            post={post}
            handleEdit={() => handleEdit(post)}
            handleDelete={() => handleDelete(post)}
          />
        ))}
      </div>
    </section>
  )
}

export default Profile