import Profile from '@components/Profile'

const getData = async (id) => {
    let posts = []

    if(id) {
        const response = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${id}/posts`)
        posts = await response.json()  
    }        
    const creator = posts[0]?.creator?.username  
    return { posts, creator }
}

const CreatorProfile = async ({ params }) => {
    const { posts, creator } = await getData(params?.id)

    return (
    <Profile 
        name={creator}
        desc={`Welcome to ${creator}'s profile page. Explore ${creator}'s interesting prompts and be inspired by the power of their imagination`}
        data={posts}
    />
    )
}

export default CreatorProfile