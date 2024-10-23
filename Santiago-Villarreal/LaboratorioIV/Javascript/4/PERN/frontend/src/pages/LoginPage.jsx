import Card from "../components/ui/card"
import Input from "../components/ui/input"
import Button from "../components/ui/Button"
import Label from "../components/ui/label"
import {Link} from "react-router-dom"
import { useForm } from "react-hook-form"

function LoginPage() {
  const {login, handleSubmit} = useForm();
  const onSubmit = handleSubmit((data) =>{
    console.log(data);
  })
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <Card>
        <h2 className="text-2xl font-bold my-2 text-center">Iniciar Sesión</h2>
        <form onSubmit={onSubmit}>
          <Label htmlFor="email">Email</Label>
          <Input type="email" placeholder="Ingrese su email" 
          {...login("email",{
            required: true,
          })}></Input>
          <Label htmlFor="contraseña">Contraseña</Label>
          <Input type="password" placeholder="Ingrese su contraseña" {...login("password",{
            required:true,
          })}></Input>
          <Button>Ingresar</Button>
        </form>
        <div className="flex justify-between my-4">
          <p>¿No tienes cuenta?</p>
          <Link to="/register">Registrarse</Link>
        </div>
      </Card>
    </div>
  )
}

export default LoginPage
