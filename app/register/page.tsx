import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import RegisterPage from '../components/pages/register'

export default async function page () {
  const session = await getServerSession()
  if(session) {
    redirect('/')
     
 }


  return (
    <div>
       <RegisterPage/> 
    </div>
  )
}

