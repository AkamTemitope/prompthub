import Profile from '@components/Profile'
import { authOptions } from '@app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

const getUserId = async (email) => {
    const userInfos = await fetch(`${process.env.NEXTAUTH_URL}/api/user/${email}`)
    const user = await userInfos.json()
    return user[0]?._id

}
const getData = async (sessionUser) => {

    let data = null
    const id = await getUserId(sessionUser.email)
    if(id) {        
        const dataResponse = await fetch(`${process.env.NEXTAUTH_URL}/api/users/${id}/posts`)
        data = await dataResponse.json()   
    }    
    else {
        redirect('/')
    }

    return data
}

const MyProfile = async ( ) => {
    const session = await getServerSession(authOptions) 
    const data = await getData(session?.user) 
    return (
    <Profile 
        name={session?.user.name || "Your"}
        desc="Welcome to your personalized profile. Share your interesting prompts and inspire others with the power of your imagination"
        data={data}
    />
    )
}

export default MyProfile