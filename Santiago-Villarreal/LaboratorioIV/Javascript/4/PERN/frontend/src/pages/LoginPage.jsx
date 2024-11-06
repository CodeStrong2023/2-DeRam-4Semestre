import Card from "../components/ui/card"
import Input from "../components/ui/input"
import Button from "../components/ui/Button"
import Label from "../components/ui/label"
import {Link, useNavigate} from "react-router-dom"
import { useForm } from "react-hook-form"
import {useAuth} from "../context/AuthContext";


function LoginPage() {
  const {register, handleSubmit} = useForm();
  const {singin, errors} = useAuth();
  const navigate = useNavigate();
  const onSubmit = handleSubmit(async(data) =>{
    const user = await singin(data);
    if(user){
      navigate("/profile");
    }
  })
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        {
          errors && errors.map((error) =>(
            <p className="bg-red-500 text-black py-2 text-center mb-2">{error}</p>
          ))
        } 
        <h2 className="text-2xl font-bold my-2 text-center">Iniciar Sesión</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Ingrese su email"{...register("email",{required: true})}></Input>
          <Label htmlFor="contraseña">Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña"{...register("password", {required:  true})}></Input>
          <Button>Ingresar</Button>
        </form>
        <div className="flex justify-between my-4">
          <p>¿No tienes cuenta? </p>
          <Link to="/register">Registrarse</Link>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage
