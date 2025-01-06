import { Button } from "@nextui-org/react"
import { Toaster, toast } from 'sonner'
import { login } from "../../store/auth.slice";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "../../components/UI/Footer";
import { Navbar_Landing_Page } from "../../components/LandingPage/Navbar.LanP";

export const Landing_Page = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.authLogin.user)
  return (
    <>
      <Navbar_Landing_Page/>
      <main className="w-full h-screen bg-gray-800 flex flex-col justify-center items-center">
        {user?.name && (<h1 className="py-5 text-white text-xl ">¡Redux en marcha!</h1>)}
        <Button className="text-black font-bold hover:cursor-pointer" color="warning" variant="shadow"
          onClick={()=> {
            toast.info("LISTO PARA TRABAJAR");
            dispatch(login({
              token: "123456789",
              user: {
                name: "Francisco",
                email: "Fran_2020@gmail.com",
                role: "viajero"
              }
            }))
          } }
        >
          LANDING PAGE
        </Button>

        <Toaster richColors/>
      </main>
      <Footer/>
    </>
  )
}
